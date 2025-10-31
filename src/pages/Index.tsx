import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const categories = [
    { name: 'Технологии', icon: 'Smartphone', color: 'bg-gradient-to-br from-purple-500 to-pink-500' },
    { name: 'Спорт', icon: 'Dumbbell', color: 'bg-gradient-to-br from-orange-500 to-red-500' },
    { name: 'Красота', icon: 'Sparkles', color: 'bg-gradient-to-br from-pink-500 to-purple-500' },
    { name: 'Дом и уют', icon: 'Home', color: 'bg-gradient-to-br from-blue-500 to-cyan-500' },
    { name: 'Хобби', icon: 'Palette', color: 'bg-gradient-to-br from-green-500 to-teal-500' },
    { name: 'Еда', icon: 'UtensilsCrossed', color: 'bg-gradient-to-br from-yellow-500 to-orange-500' },
  ];

  const interests = [
    'Путешествия', 'Музыка', 'Чтение', 'Кулинария', 
    'Фотография', 'Игры', 'Мода', 'Искусство'
  ];

  const toggleInterest = (interest: string) => {
    setSelectedInterests(prev => 
      prev.includes(interest) 
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Icon name="Gift" className="text-white" size={24} />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              DreamGift AI
            </h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#catalog" className="text-sm font-medium hover:text-primary transition-colors">Каталог</a>
            <a href="#delivery" className="text-sm font-medium hover:text-primary transition-colors">Доставка</a>
            <a href="#blog" className="text-sm font-medium hover:text-primary transition-colors">Блог</a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">О нас</a>
            <a href="#contacts" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
            <a href="#faq" className="text-sm font-medium hover:text-primary transition-colors">FAQ</a>
          </nav>
          <Button variant="outline" size="sm" className="relative">
            <Icon name="ShoppingCart" size={20} />
            <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center bg-secondary">
              0
            </Badge>
          </Button>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden py-20 md:py-32">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDEwMCwgNTAsIDIwMCwgMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
          
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <Badge className="mb-4 bg-gradient-to-r from-primary to-secondary text-white">
                <Icon name="Sparkles" size={14} className="mr-1" />
                AI-подбор подарков
              </Badge>
              
              <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                Идеальный подарок за 2 минуты
              </h2>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Искусственный интеллект подберёт персональный подарок на основе интересов получателя. Более 10 000 уникальных товаров в каталоге
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white group">
                  <Icon name="Wand2" size={20} className="mr-2 group-hover:rotate-12 transition-transform" />
                  Начать подбор
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="PlayCircle" size={20} className="mr-2" />
                  Как это работает
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="catalog" className="py-16 container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h3 className="text-4xl font-bold mb-4">Популярные категории</h3>
            <p className="text-muted-foreground">Выберите категорию или доверьте выбор AI</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {categories.map((category, index) => (
              <Card 
                key={category.name}
                className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-primary animate-scale-in overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className={`w-16 h-16 ${category.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon name={category.icon} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl">{category.name}</CardTitle>
                  <CardDescription>Более 1000 товаров</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                    Смотреть все
                    <Icon name="ArrowRight" size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="mb-4 bg-gradient-to-r from-primary to-secondary text-white">
                  <Icon name="Brain" size={14} className="mr-1" />
                  AI-ассистент
                </Badge>
                <h3 className="text-4xl font-bold mb-4">Расскажите о получателе</h3>
                <p className="text-muted-foreground">Выберите интересы, и AI предложит идеальные варианты</p>
              </div>

              <Card className="shadow-2xl border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="MessageSquare" size={24} />
                    Какие у получателя интересы?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3 mb-6">
                    {interests.map((interest) => (
                      <Badge
                        key={interest}
                        variant={selectedInterests.includes(interest) ? 'default' : 'outline'}
                        className={`cursor-pointer px-4 py-2 text-base transition-all ${
                          selectedInterests.includes(interest)
                            ? 'bg-gradient-to-r from-primary to-secondary text-white scale-105'
                            : 'hover:border-primary'
                        }`}
                        onClick={() => toggleInterest(interest)}
                      >
                        {interest}
                        {selectedInterests.includes(interest) && (
                          <Icon name="Check" size={14} className="ml-1" />
                        )}
                      </Badge>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Возраст получателя</label>
                      <div className="flex gap-2">
                        {['18-25', '26-35', '36-45', '46+'].map((age) => (
                          <Button key={age} variant="outline" className="flex-1">
                            {age}
                          </Button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Повод для подарка</label>
                      <div className="grid grid-cols-2 gap-2">
                        {['День рождения', 'Новый год', 'Свадьба', 'Юбилей'].map((occasion) => (
                          <Button key={occasion} variant="outline">
                            {occasion}
                          </Button>
                        ))}
                      </div>
                    </div>

                    <Button 
                      className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white text-lg py-6"
                      disabled={selectedInterests.length === 0}
                    >
                      <Icon name="Wand2" size={20} className="mr-2" />
                      Найти подарки ({selectedInterests.length > 0 ? `${selectedInterests.length} интересов` : 'выберите интересы'})
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4">
                <Icon name="Lightbulb" size={14} className="mr-1" />
                Процесс подбора
              </Badge>
              <h3 className="text-4xl font-bold mb-4">Как это работает</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Пошаговая инструкция использования AI-сервиса подбора подарков
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { 
                    step: '1', 
                    icon: 'UserCircle2', 
                    title: 'Опишите получателя', 
                    desc: 'Выберите возраст, интересы и повод для подарка',
                    color: 'from-purple-500 to-pink-500'
                  },
                  { 
                    step: '2', 
                    icon: 'Brain', 
                    title: 'AI анализирует данные', 
                    desc: 'Нейросеть обрабатывает 50+ параметров и предпочтений',
                    color: 'from-pink-500 to-orange-500'
                  },
                  { 
                    step: '3', 
                    icon: 'Gift', 
                    title: 'Получаете варианты', 
                    desc: 'Уникальные подарки с рейтингом соответствия',
                    color: 'from-orange-500 to-red-500'
                  },
                  { 
                    step: '4', 
                    icon: 'ShoppingBag', 
                    title: 'Оформляете заказ', 
                    desc: 'Быстрая оплата и доставка за 1-2 дня',
                    color: 'from-red-500 to-purple-500'
                  }
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className="relative animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="text-center">
                      <div className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                        <Icon name={item.icon} size={36} className="text-white" />
                      </div>
                      <div className="absolute top-8 left-1/2 w-full hidden md:block">
                        {index < 3 && (
                          <div className="w-full h-0.5 bg-gradient-to-r from-muted to-transparent"></div>
                        )}
                      </div>
                      <Badge className="mb-3 bg-gradient-to-r from-primary to-secondary text-white">
                        Шаг {item.step}
                      </Badge>
                      <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-16 max-w-3xl mx-auto">
              <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-2">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="Zap" size={24} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Демо-режим для тестирования</h4>
                      <p className="text-muted-foreground mb-4">
                        Попробуйте AI-подбор прямо сейчас без регистрации. Введите данные о получателе и получите персональные рекомендации за 30 секунд.
                      </p>
                      <Button className="bg-gradient-to-r from-primary to-secondary text-white">
                        <Icon name="Sparkles" size={16} className="mr-2" />
                        Попробовать демо
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4">
                <Icon name="Star" size={14} className="mr-1" />
                Отзывы клиентов
              </Badge>
              <h3 className="text-4xl font-bold mb-4">Реальные истории наших пользователей</h3>
              <p className="text-muted-foreground">Более 5000 довольных клиентов уже нашли идеальные подарки</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  name: 'Анна Соколова',
                  role: 'Маркетолог',
                  avatar: '👩‍💼',
                  rating: 5,
                  text: 'Искала подарок коллеге на юбилей. AI предложил идеальный набор для кофемана — попал точно в цель! Заказ пришёл за день.',
                  gift: 'Кофейный набор'
                },
                {
                  name: 'Михаил Петров',
                  role: 'IT-специалист',
                  avatar: '👨‍💻',
                  rating: 5,
                  text: 'Долго выбирал подарок жене на годовщину. Сервис учёл все её увлечения и предложил книгу с автографом любимого автора. Восторг!',
                  gift: 'Книга с автографом'
                },
                {
                  name: 'Елена Волкова',
                  role: 'Предприниматель',
                  avatar: '👩‍🎨',
                  rating: 5,
                  text: 'Покупаю подарки партнёрам через DreamGift AI. Экономит массу времени, а качество подбора на высоте. Рекомендую!',
                  gift: 'Корпоративные подарки'
                }
              ].map((review, index) => (
                <Card 
                  key={index} 
                  className="animate-scale-in hover:shadow-xl transition-all"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl">
                        {review.avatar}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{review.name}</CardTitle>
                        <CardDescription>{review.role}</CardDescription>
                      </div>
                    </div>
                    <div className="flex gap-1 mb-3">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{review.text}</p>
                    <Badge variant="outline">
                      <Icon name="Gift" size={12} className="mr-1" />
                      {review.gift}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4">
                <Icon name="Handshake" size={14} className="mr-1" />
                Наши партнёры
              </Badge>
              <h3 className="text-4xl font-bold mb-4">Интеграция с ведущими магазинами</h3>
              <p className="text-muted-foreground">Доступ к каталогам 10+ торговых площадок</p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
                {[
                  { name: 'Wildberries', color: 'text-purple-600' },
                  { name: 'OZON', color: 'text-blue-600' },
                  { name: 'Яндекс.Маркет', color: 'text-yellow-600' },
                  { name: 'VK Маркет', color: 'text-blue-500' }
                ].map((partner, index) => (
                  <Card 
                    key={index}
                    className="p-6 hover:shadow-lg transition-all cursor-pointer group animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="text-center">
                      <div className={`text-3xl font-bold ${partner.color} group-hover:scale-110 transition-transform`}>
                        {partner.name}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <Card className="mt-12 bg-gradient-to-r from-primary to-secondary text-white">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <h4 className="text-2xl font-bold mb-3">Технологические интеграции</h4>
                    <p className="mb-4 opacity-90">Работаем с мессенджерами и социальными сетями</p>
                    <div className="flex justify-center gap-4 flex-wrap">
                      {[
                        { name: 'VK', icon: 'MessageCircle' },
                        { name: 'Telegram', icon: 'Send' },
                      ].map((tech, i) => (
                        <Badge key={i} variant="secondary" className="text-base px-4 py-2">
                          <Icon name={tech.icon} size={16} className="mr-2" />
                          {tech.name}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl font-bold mb-12">Почему DreamGift AI?</h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: 'Sparkles', title: 'AI-подбор', desc: 'Умный алгоритм учитывает 50+ параметров' },
                { icon: 'Truck', title: 'Быстрая доставка', desc: 'Доставим за 1-2 дня по всей стране' },
                { icon: 'Shield', title: 'Гарантия', desc: 'Вернём деньги, если не понравится' }
              ].map((feature, index) => (
                <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon name={feature.icon} size={32} className="text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Icon name="Gift" className="text-white" size={24} />
                </div>
                <span className="text-xl font-bold">DreamGift AI</span>
              </div>
              <p className="text-gray-400 text-sm">Идеальные подарки с помощью искусственного интеллекта</p>
            </div>
            
            <div>
              <h5 className="font-bold mb-4">Каталог</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Все категории</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Новинки</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Хиты продаж</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-bold mb-4">Информация</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#delivery" className="hover:text-white transition-colors">Доставка</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-bold mb-4">Контакты</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#contacts" className="hover:text-white transition-colors">Связаться с нами</a></li>
                <li><a href="#blog" className="hover:text-white transition-colors">Блог</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>© 2024 DreamGift AI. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;