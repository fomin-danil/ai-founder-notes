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
        "transition-all duration-300 cursor-pointer",
        "hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:border-foreground/30",
        "animate-fade-in",
        colorClasses[note.color as keyof typeof colorClasses],
        className
      )}
      style={style}
    >
      <h3 className="text-base font-semibold mb-2 line-clamp-2 bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">
        {note.title}
      </h3>
      
      <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
        {note.content}
      </p>
      
      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
        <Clock className="w-3 h-3" />
        <span className="bg-gradient-to-b from-white/70 to-white/50 bg-clip-text text-transparent">
          {new Date(note.createdAt).toLocaleDateString("ru-RU", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit"
          })}
        </span>
      </div>
    </div>
  );
};
