import { useState, useEffect } from "react";
import { Sparkles, Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface WeeklySummaryDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const WeeklySummaryDialog = ({
  open,
  onOpenChange,
}: WeeklySummaryDialogProps) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [summary, setSummary] = useState("");

  const generateSummary = async () => {
    console.log('generateSummary called');
    setIsGenerating(true);
    setSummary("");

    try {
      const { data: { session } } = await supabase.auth.getSession();
      console.log('Session:', session ? 'exists' : 'null');
      
      if (!session) {
        toast.error("Необходимо войти в систему");
        setIsGenerating(false);
        return;
      }

      console.log('Invoking generate-weekly-summary function...');
      const { data, error } = await supabase.functions.invoke('generate-weekly-summary', {
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      });

      console.log('Function response:', { data, error });

      if (error) {
        console.error('Ошибка вызова функции:', error);
        toast.error(`Ошибка генерации резюме: ${error.message}`);
        setIsGenerating(false);
        return;
      }

      if (data?.error) {
        console.error('Error from function:', data.error);
        toast.error(data.error);
        setIsGenerating(false);
        return;
      }

      console.log('Summary received:', data?.summary);
      setSummary(data?.summary || 'Резюме не получено');
    } catch (error) {
      console.error('Exception in generateSummary:', error);
      toast.error(`Произошла ошибка: ${error instanceof Error ? error.message : 'Неизвестная ошибка'}`);
    } finally {
      setIsGenerating(false);
    }
  };

  useEffect(() => {
    if (open) {
      console.log('Dialog opened, generating summary...');
      setSummary("");
      generateSummary();
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            AI-саммари за неделю
          </DialogTitle>
          <DialogDescription>
            Краткое содержание всех ваших заметок за последние 7 дней
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4">
          {isGenerating ? (
            <div className="flex flex-col items-center justify-center py-12 gap-4">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
              <p className="text-sm text-muted-foreground">
                Анализирую ваши заметки...
              </p>
            </div>
          ) : summary ? (
            <div className="prose prose-sm dark:prose-invert max-w-none">
              <div className="rounded-lg bg-muted/50 p-4 text-sm leading-relaxed whitespace-pre-wrap">
                {summary}
              </div>
            </div>
          ) : null}
        </div>

        <div className="flex justify-end gap-2 mt-4">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
          >
            Закрыть
          </Button>
          {!isGenerating && summary && (
            <Button onClick={generateSummary} className="gap-2">
              <Sparkles className="w-4 h-4" />
              Обновить
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};