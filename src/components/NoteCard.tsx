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

const colorClasses = {
  blue: "border-l-blue-500",
  purple: "border-l-purple-500",
  green: "border-l-green-500",
  orange: "border-l-orange-500",
};

export const NoteCard = ({ note, className, style }: NoteCardProps) => {
  return (
    <div
      className={cn(
        "group relative rounded-xl border border-border bg-card p-6 border-l-4",
        "transition-all duration-200 hover:bg-accent/50 cursor-pointer",
        "animate-fade-in",
        colorClasses[note.color as keyof typeof colorClasses],
        className
      )}
      style={style}
    >
      <h3 className="text-base font-semibold mb-2 line-clamp-2">
        {note.title}
      </h3>
      
      <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
        {note.content}
      </p>
      
      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
        <Clock className="w-3 h-3" />
        <span>{new Date(note.createdAt).toLocaleDateString("ru-RU")}</span>
      </div>
    </div>
  );
};
