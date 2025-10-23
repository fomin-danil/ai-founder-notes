import { useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles, Plus, Search, Sparkles as SparklesIcon, LogOut, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { NoteCard } from "@/components/NoteCard";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

// Заглушка данных
const mockNotes = [
  {
    id: "1",
    title: "Идеи для нового продукта",
    content: "Разработать MVP приложения для автоматизации...",
    createdAt: "2025-01-20",
    color: "from-blue-500/10 to-blue-600/10",
  },
  {
    id: "2",
    title: "Встреча с инвесторами",
    content: "Подготовить презентацию: финансовые показатели...",
    createdAt: "2025-01-19",
    color: "from-purple-500/10 to-purple-600/10",
  },
  {
    id: "3",
    title: "Маркетинговая стратегия Q1",
    content: "Целевая аудитория, каналы привлечения...",
    createdAt: "2025-01-18",
    color: "from-green-500/10 to-green-600/10",
  },
  {
    id: "4",
    title: "Техническое задание",
    content: "Требования к функционалу: авторизация, база данных...",
    createdAt: "2025-01-17",
    color: "from-orange-500/10 to-orange-600/10",
  },
];

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredNotes = mockNotes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold hidden sm:inline">NotesAI</span>
          </Link>

          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Поиск заметок..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button size="sm" className="gap-2">
              <Plus className="w-4 h-4" />
              <span className="hidden sm:inline">Новая заметка</span>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Avatar className="w-8 h-8">
                    <AvatarFallback className="bg-primary/10 text-primary">ИИ</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  Настройки
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  Выйти
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* AI Assistant Banner */}
        <div className="mb-8 p-6 rounded-2xl bg-gradient-to-br from-primary to-accent text-white animate-fade-in">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
              <SparklesIcon className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-semibold mb-1">AI-Ассистент готов помочь</h2>
              <p className="text-white/90 text-sm">
                Попробуйте структурировать заметки, улучшить текст или сгенерировать новые идеи
              </p>
            </div>
            <Button variant="secondary" size="sm" className="shrink-0">
              Попробовать
            </Button>
          </div>
        </div>

        {/* Notes Grid - Bento Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-min">
          {filteredNotes.map((note, index) => (
            <NoteCard
              key={note.id}
              note={note}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            />
          ))}
        </div>

        {filteredNotes.length === 0 && (
          <div className="text-center py-20">
            <div className="w-16 h-16 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center">
              <Search className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Заметки не найдены</h3>
            <p className="text-muted-foreground">
              Попробуйте изменить поисковый запрос
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
