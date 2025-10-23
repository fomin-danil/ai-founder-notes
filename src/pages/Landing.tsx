import { Link } from "react-router-dom";
import { Sparkles, BookOpen, Brain, Zap, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DisplayCards } from "@/components/DisplayCards";
import { AnimatedBackground } from "@/components/AnimatedBackground";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background dark">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex h-14 items-center justify-between">
            <div className="flex items-center gap-8">
              <Link to="/" className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-md bg-foreground flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-background" />
                </div>
                <span className="text-base font-semibold bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">NotesAI</span>
              </Link>
              <nav className="hidden md:flex items-center gap-6 text-sm">
                <Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Документация
                </Link>
                <Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Возможности
                </Link>
                <Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Примеры
                </Link>
              </nav>
            </div>
            <div className="flex items-center gap-3">
              <Link to="/auth">
                <Button variant="ghost" size="sm">Войти</Button>
              </Link>
              <Link to="/auth">
                <Button size="sm">Начать</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative container mx-auto px-4 md:px-8 pt-24 pb-16 md:pt-32 md:pb-24">
        <AnimatedBackground />
        <div className="relative z-10 max-w-5xl mx-auto text-center animate-fade-in-up">
          <Badge variant="secondary" className="mb-6 px-3 py-1 text-xs">
            <Sparkles className="w-3 h-3 mr-1.5" />
            Новые AI-функции: структурирование и генерация идей
            <ArrowRight className="w-3 h-3 ml-1.5" />
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">
            Управляйте идеями
            <br />
            с помощью AI
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Современный инструмент для предпринимателей: создавайте заметки, 
            структурируйте мысли и получайте AI-подсказки для развития бизнеса.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link to="/auth">
              <Button size="lg" className="w-full sm:w-auto h-11 px-8">
                Начать бесплатно
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="w-full sm:w-auto h-11 px-8 bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent hover:from-white hover:to-white/90">
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      {/* Full Screen Features Section */}
      <section className="min-h-screen flex items-center py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Left side - Animated Display Cards */}
            <div className="order-2 lg:order-1 animate-fade-in">
              <DisplayCards />
            </div>
            
            {/* Right side - Features List */}
            <div className="order-1 lg:order-2 space-y-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">
                  Все функции для продуктивной работы
                </h2>
                <p className="text-lg text-muted-foreground">
                  NotesAI — это больше, чем просто заметки. Это ваш персональный помощник для организации идей и развития бизнеса.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-lg bg-foreground flex items-center justify-center">
                      <BookOpen className="w-5 h-5 text-background" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">
                      Умные заметки
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Создавайте структурированные заметки с автоматической организацией, тегами и быстрым поиском по содержимому.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-lg bg-foreground flex items-center justify-center">
                      <Brain className="w-5 h-5 text-background" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">
                      AI-ассистент
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Получайте интеллектуальные подсказки для улучшения текста, генерации идей и структурирования информации.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-lg bg-foreground flex items-center justify-center">
                      <Zap className="w-5 h-5 text-background" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">
                      Быстрый доступ
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Работайте на любом устройстве с синхронизацией в реальном времени и offline режимом.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-lg bg-foreground flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-background" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">
                      Организация
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Цветовое кодирование, категории и умная сортировка помогут держать все идеи под контролем.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="relative overflow-hidden rounded-xl border border-border bg-muted/50 p-8 md:p-12 text-center animate-scale-in">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">
              Начните управлять знаниями уже сегодня
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Присоединяйтесь к сообществу предпринимателей, которые используют AI для роста бизнеса.
            </p>
            <Link to="/auth">
              <Button size="lg" className="h-11 px-8">
                Создать аккаунт
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="container mx-auto px-4 md:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-foreground flex items-center justify-center">
                <Sparkles className="w-3 h-3 text-background" />
              </div>
              <span className="text-sm font-medium bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">NotesAI</span>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2025 NotesAI. Создано для предпринимателей.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
