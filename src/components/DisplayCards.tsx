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
    <div className="relative w-full h-[500px] flex items-center justify-center px-4">
      <div className="relative w-full max-w-md h-[400px]">
        {sampleNotes.map((note, index) => {
          const position = (index - activeIndex + sampleNotes.length) % sampleNotes.length;
          
          // Only show first 3 cards in stack
          if (position > 2) return null;
          
          return (
            <div
              key={note.id}
              className="absolute top-0 left-0 w-full transition-all duration-700 ease-out"
              style={{
                transform: `
                  translateX(${position * 12}px)
                  translateY(${position * 12}px)
                  scale(${1 - position * 0.05})
                `,
                opacity: 1 - position * 0.15,
                zIndex: 10 - position,
                pointerEvents: position === 0 ? 'auto' : 'none',
              }}
            >
              <NoteCard note={note} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
