import { Link } from "react-router-dom";
import { Sparkles, BookOpen, Brain, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold">NotesAI</span>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/auth">
              <Button variant="ghost">Войти</Button>
            </Link>
            <Link to="/auth">
              <Button>Начать</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-primary/10 border border-primary/20">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Заметки с искусственным интеллектом</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
            Управляйте идеями
            <br />
            с помощью AI
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Современный инструмент для предпринимателей: создавайте заметки, 
            структурируйте мысли и получайте AI-подсказки для развития бизнеса.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/auth">
              <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all">
                Начать бесплатно
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 py-6">
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-20 border-t border-border">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg animate-fade-in">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Умные заметки</h3>
            <p className="text-muted-foreground">
              Создавайте структурированные заметки с автоматической организацией и поиском.
            </p>
          </div>

          <div className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Brain className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">AI-ассистент</h3>
            <p className="text-muted-foreground">
              Получайте интеллектуальные подсказки для улучшения текста и генерации идей.
            </p>
          </div>

          <div className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Быстрый доступ</h3>
            <p className="text-muted-foreground">
              Работайте на любом устройстве с синхронизацией в реальном времени.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center p-12 rounded-3xl bg-gradient-to-br from-primary to-accent text-white animate-scale-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Начните управлять знаниями уже сегодня
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Присоединяйтесь к сообществу предпринимателей, которые используют AI для роста бизнеса.
          </p>
          <Link to="/auth">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 shadow-xl">
              Создать аккаунт
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-sm text-muted-foreground">
            © 2025 NotesAI. Создано для предпринимателей.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
