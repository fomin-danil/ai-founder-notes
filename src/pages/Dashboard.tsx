import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Sparkles, Plus, Search, LogOut, Settings } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
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
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

interface Note {
  id: string;
  title: string;
  content: string | null;
  color: string | null;
  created_at: string;
}

const Dashboard = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [notes, setNotes] = useState<Note[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [userEmail, setUserEmail] = useState<string>("");

  useEffect(() => {
    checkUser();
    loadNotes();
  }, []);

  const checkUser = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      navigate("/auth");
    } else {
      setUserEmail(session.user.email || "");
    }
  };

  const loadNotes = async () => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from("notes")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      toast.error("Ошибка загрузки заметок");
      console.error(error);
    } else {
      setNotes(data || []);
    }
    setIsLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/auth");
  };

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (note.content && note.content.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const getInitials = (email: string) => {
    return email.slice(0, 2).toUpperCase();
  };

  return (
    <div className="min-h-screen bg-background dark">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex h-14 items-center justify-between gap-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-md bg-foreground flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-background" />
              </div>
              <span className="text-base font-semibold hidden sm:inline">NotesAI</span>
            </Link>

            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Поиск заметок..."
                  className="pl-10 h-9"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Link to="/note/new">
                <Button size="sm" className="gap-2 h-9">
                  <Plus className="w-4 h-4" />
                  <span className="hidden sm:inline">Создать</span>
                </Button>
              </Link>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full h-9 w-9">
                    <Avatar className="h-7 w-7">
                      <AvatarFallback className="bg-muted text-foreground text-xs">
                        {getInitials(userEmail)}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    Настройки
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Выйти
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 md:px-8 py-8">
        {/* AI Assistant Badge */}
        <div className="mb-6">
          <Badge variant="secondary" className="px-3 py-1.5 text-xs">
            <Sparkles className="w-3 h-3 mr-1.5" />
            AI-ассистент готов помочь со структурированием и улучшением заметок
          </Badge>
        </div>

        {/* Notes Grid - Bento Layout */}
        {isLoading ? (
          <div className="text-center py-20">
            <p className="text-muted-foreground">Загрузка заметок...</p>
          </div>
        ) : filteredNotes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredNotes.map((note, index) => (
              <NoteCard
                key={note.id}
                note={{
                  id: note.id,
                  title: note.title,
                  content: note.content || "",
                  createdAt: new Date(note.created_at).toLocaleDateString("ru-RU"),
                  color: note.color || "default",
                }}
                style={{
                  animationDelay: `${index * 0.05}s`,
                }}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-muted mb-4">
              <Search className="h-6 w-6 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">
              {searchQuery ? "Заметки не найдены" : "У вас пока нет заметок"}
            </h3>
            <p className="text-sm text-muted-foreground">
              {searchQuery
                ? "Попробуйте изменить поисковый запрос"
                : "Создайте первую заметку, нажав кнопку 'Создать'"}
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
