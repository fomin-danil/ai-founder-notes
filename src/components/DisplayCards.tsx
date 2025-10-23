import { useState, useEffect } from "react";
import { NoteCard } from "./NoteCard";

const sampleNotes = [
  {
    id: "1",
    title: "Идея для нового продукта",
    content: "Разработать мобильное приложение для автоматизации процессов учета. Потенциальный рынок - малый и средний бизнес.",
    createdAt: "2025-01-15",
    color: "blue"
  },
  {
    id: "2",
    title: "Маркетинговая стратегия",
    content: "Запустить серию обучающих видео в социальных сетях. Фокус на Instagram и TikTok для привлечения молодой аудитории.",
    createdAt: "2025-01-18",
    color: "purple"
  },
  {
    id: "3",
    title: "Встреча с инвесторами",
    content: "Подготовить презентацию: финансовые показатели, планы масштабирования, конкурентные преимущества. Дедлайн - пятница.",
    createdAt: "2025-01-20",
    color: "green"
  },
  {
    id: "4",
    title: "Оптимизация расходов",
    content: "Пересмотреть текущие подписки и сервисы. Возможная экономия до 30% бюджета при переходе на годовые планы.",
    createdAt: "2025-01-22",
    color: "orange"
  }
];

export const DisplayCards = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % sampleNotes.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center">
      <div className="relative w-full max-w-md">
        {sampleNotes.map((note, index) => {
          const position = (index - activeIndex + sampleNotes.length) % sampleNotes.length;
          const isActive = position === 0;
          const isNext = position === 1;
          const isPrev = position === sampleNotes.length - 1;
          
          return (
            <NoteCard
              key={note.id}
              note={note}
              className="absolute inset-0 transition-all duration-700 ease-out"
              style={{
                transform: `
                  translateX(${position === 0 ? '0' : position === 1 ? '20px' : position === 2 ? '40px' : '60px'})
                  translateY(${position === 0 ? '0' : position === 1 ? '20px' : position === 2 ? '40px' : '60px'})
                  scale(${position === 0 ? '1' : position === 1 ? '0.95' : position === 2 ? '0.9' : '0.85'})
                `,
                opacity: position <= 2 ? 1 - position * 0.25 : 0,
                zIndex: sampleNotes.length - position,
                pointerEvents: isActive ? 'auto' : 'none',
              }}
            />
          );
        })}
      </div>
      
      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {sampleNotes.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === activeIndex 
                ? 'bg-foreground w-6' 
                : 'bg-foreground/30 hover:bg-foreground/50'
            }`}
            aria-label={`Go to card ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
