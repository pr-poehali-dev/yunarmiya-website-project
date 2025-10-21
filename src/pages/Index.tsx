import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const leaders = [
    {
      name: "Иванов Сергей Петрович",
      position: "Главный руководитель отделения",
      rank: "Полковник запаса",
      achievements: "Ветеран боевых действий, кавалер ордена Мужества",
      image: "https://cdn.poehali.dev/projects/51e8e555-1df0-4d0e-b85e-091bc40662c8/files/93a0bc4c-7eb8-4ec1-86a5-9d6e1294725c.jpg"
    },
    {
      name: "Смирнова Елена Викторовна",
      position: "Заместитель руководителя",
      rank: "Майор запаса",
      achievements: "Отличник физической подготовки, мастер спорта",
      image: "https://cdn.poehali.dev/projects/51e8e555-1df0-4d0e-b85e-091bc40662c8/files/93a0bc4c-7eb8-4ec1-86a5-9d6e1294725c.jpg"
    },
    {
      name: "Петров Александр Иванович",
      position: "Наставник по военной подготовке",
      rank: "Капитан запаса",
      achievements: "Специалист тактической подготовки",
      image: "https://cdn.poehali.dev/projects/51e8e555-1df0-4d0e-b85e-091bc40662c8/files/93a0bc4c-7eb8-4ec1-86a5-9d6e1294725c.jpg"
    },
    {
      name: "Козлова Анна Сергеевна",
      position: "Наставник по патриотическому воспитанию",
      rank: "Преподаватель высшей категории",
      achievements: "Заслуженный учитель РФ",
      image: "https://cdn.poehali.dev/projects/51e8e555-1df0-4d0e-b85e-091bc40662c8/files/93a0bc4c-7eb8-4ec1-86a5-9d6e1294725c.jpg"
    }
  ];

  const stats = [
    { number: "1000+", label: "Участников", icon: "Users" },
    { number: "50+", label: "Мероприятий в год", icon: "Calendar" },
    { number: "15", label: "Лет опыта", icon: "Award" },
    { number: "100%", label: "Патриотизм", icon: "Flag" }
  ];

  const values = [
    {
      title: "Патриотизм",
      description: "Любовь к Родине и готовность служить Отечеству",
      icon: "Heart"
    },
    {
      title: "Дисциплина",
      description: "Строгое соблюдение правил и норм поведения",
      icon: "Shield"
    },
    {
      title: "Честь",
      description: "Высокие моральные принципы и достоинство",
      icon: "Star"
    },
    {
      title: "Товарищество",
      description: "Взаимовыручка и поддержка единомышленников",
      icon: "Users"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground py-4 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Icon name="Flag" size={32} className="text-accent" />
            <div>
              <h1 className="text-2xl font-bold tracking-tight">ЮНАРМИЯ</h1>
              <p className="text-xs opacity-90">Всероссийское военно-патриотическое движение</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#about" className="hover:text-accent transition-colors">О движении</a>
            <a href="#leaders" className="hover:text-accent transition-colors">Руководство</a>
            <a href="#values" className="hover:text-accent transition-colors">Ценности</a>
          </nav>
        </div>
      </header>

      <section className="relative bg-gradient-to-br from-primary via-secondary to-primary text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-accent text-accent-foreground text-lg px-4 py-2">
              #ЮНАРМИЯ
            </Badge>
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
              Всероссийское военно-патриотическое движение
            </h2>
            <p className="text-xl md:text-2xl mb-8 opacity-95 leading-relaxed">
              Формируем у молодёжи готовность к защите Отечества, воспитываем патриотизм и гражданственность
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold">
                <Icon name="UserPlus" size={20} className="mr-2" />
                Вступить в Юнармию
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary font-bold">
                <Icon name="Info" size={20} className="mr-2" />
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-xl transition-all hover:scale-105 border-2">
                <Icon name={stat.icon} size={40} className="mx-auto mb-4 text-primary" />
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="values" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Наши ценности</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-2xl transition-all hover:scale-105 border-t-4 border-t-primary">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center">
                  <Icon name={value.icon} size={32} className="text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="leaders" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Руководители и наставники</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Опытные специалисты с военным опытом и педагогическим образованием
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leaders.map((leader, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all hover:scale-105">
                <div className="aspect-square overflow-hidden bg-muted">
                  <img 
                    src={leader.image} 
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 text-foreground">{leader.name}</h3>
                  <Badge className="mb-3 bg-secondary text-secondary-foreground">
                    {leader.rank}
                  </Badge>
                  <p className="text-sm font-semibold text-primary mb-2">{leader.position}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{leader.achievements}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-12 border-2 border-primary/20 shadow-xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Shield" size={24} className="text-primary-foreground" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">О движении</h2>
                  <div className="w-16 h-1 bg-primary mb-6"></div>
                </div>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  <strong className="text-foreground">ЮНАРМИЯ</strong> — Всероссийское детско-юношеское военно-патриотическое общественное движение, созданное для воспитания подрастающего поколения в духе патриотизма и любви к Родине.
                </p>
                <p>
                  Движение объединяет молодых людей, стремящихся развивать свои лидерские качества, физическую подготовку и получать знания в области военного дела, истории и культуры России.
                </p>
                <p>
                  Участники движения проходят строевую, физическую и военно-тактическую подготовку, изучают основы безопасности жизнедеятельности, участвуют в патриотических мероприятиях и социальных проектах.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Badge variant="outline" className="px-4 py-2 text-base">
                  <Icon name="Target" size={16} className="mr-2" />
                  Физподготовка
                </Badge>
                <Badge variant="outline" className="px-4 py-2 text-base">
                  <Icon name="Book" size={16} className="mr-2" />
                  История России
                </Badge>
                <Badge variant="outline" className="px-4 py-2 text-base">
                  <Icon name="Trophy" size={16} className="mr-2" />
                  Соревнования
                </Badge>
                <Badge variant="outline" className="px-4 py-2 text-base">
                  <Icon name="Heart" size={16} className="mr-2" />
                  Патриотизм
                </Badge>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Flag" size={24} className="text-accent" />
                <h3 className="text-xl font-bold">ЮНАРМИЯ</h3>
              </div>
              <p className="text-sm opacity-80 leading-relaxed">
                Всероссийское военно-патриотическое движение
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm opacity-80">
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@yunarmy.ru</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (495) 000-00-00</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <Button size="icon" variant="outline" className="border-background/20 hover:bg-accent hover:text-accent-foreground">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button size="icon" variant="outline" className="border-background/20 hover:bg-accent hover:text-accent-foreground">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button size="icon" variant="outline" className="border-background/20 hover:bg-accent hover:text-accent-foreground">
                  <Icon name="Youtube" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-background/20 text-center text-sm opacity-80">
            © 2024 Юнармия. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
