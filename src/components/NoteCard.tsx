import { Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  color: string;
}

interface NoteCardProps {
  note: Note;
  className?: string;
  style?: React.CSSProperties;
}

export const NoteCard = ({ note, className, style }: NoteCardProps) => {
  return (
    <div
      className={cn(
        "group p-6 rounded-2xl border border-border bg-card hover:border-primary/50",
        "transition-all duration-300 hover:shadow-lg cursor-pointer",
        "animate-fade-in",
        className
      )}
      style={style}
    >
      <div className={cn("w-full h-2 rounded-full mb-4 bg-gradient-to-r", note.color)} />
      
      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
        {note.title}
      </h3>
      
      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
        {note.content}
      </p>
      
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <Clock className="w-3 h-3" />
        <span>{new Date(note.createdAt).toLocaleDateString("ru-RU")}</span>
      </div>
    </div>
  );
};
