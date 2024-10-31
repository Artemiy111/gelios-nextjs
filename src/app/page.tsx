
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Home, Car, Plane, Heart, Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: <Home className="h-8 w-8 mb-2 text-primary" />,
    title: "Страхование имущества",
    description: "Защитите свой дом и имущество от непредвиденных ситуаций.",
    link: "/services/property"
  },
  {
    icon: <Car className="h-8 w-8 mb-2 text-primary" />,
    title: "Авто",
    description: "Полная защита вашего автомобиля и ответственности на дороге.",
    link: "/services/auto"
  },
  {
    icon: <Heart className="h-8 w-8 mb-2 text-primary" />,
    title: "Здоровье",
    description: "Забота о вашем здоровье с нашими медицинскими страховыми планами.",
    link: "/services/health"
  },
  {
    icon: <Shield className="h-8 w-8 mb-2 text-primary" />,
    title: "Комплексные",
    description: "Индивидуальные решения для всесторонней защиты.",
    link: "/services/comprehensive"
  }
]

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen justify-center">
      <header className="px-4 lg:px-6 h-16 flex items-center">
        <Link className="flex items-center justify-center" href="/">
          <Shield className="h-6 w-6 text-primary" />
          <span className="ml-2 text-2xl font-bold text-primary">Гелиос</span>
        </Link>
        <Link className="flex items-center justify-center ml-5" href="/login">
          <span className="text-base font-medium hover:underline underline-offset-4">Войти</span>
        </Link>
        <Link className="flex items-center justify-center ml-5" href="/register">
          <span className="text-base font-medium hover:underline underline-offset-4">Зарегистрироваться</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/catalog">
            Услуги
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#about">
            О нас
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
            Контакты
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <div className="">
        <section className="flex justify-center w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-primary">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center text-white mx-auto">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Надежная защита с Гелиос
              </h1>
              <p className="mx-auto max-w-[700px] text-lg sm:text-xl">
                Мы предоставляем широкий спектр страховых услуг для вашего спокойствия и уверенности в завтрашнем дне.
              </p>
              <Button className="bg-white text-primary hover:bg-primary-foreground">Получить консультацию</Button>
            </div>
          </div>
        </section>
        <section id="services" className="flex justify-center w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Наши услуги</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="flex flex-col justify-between">
                  <CardHeader>
                    {service.icon}
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href={service.link}>Подробнее</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="about" className="flex justify-center w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">О компании Гелиос</h2>
            <p className="mx-auto max-w-[700px] text-lg sm:text-xl text-center mb-8">
              Гелиос - это надежная страховая компания с многолетним опытом работы на рынке. Мы стремимся обеспечить нашим клиентам максимальную защиту и спокойствие.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="text-2xl font-bold mb-2">20+</h3>
                <p>лет на рынке</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">100 000+</h3>
                <p>довольных клиентов</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">99%</h3>
                <p>положительных отзывов</p>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="flex justify-center w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Свяжитесь с нами</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <Phone className="w-8 h-8 mb-2 mx-auto text-primary" />
                <p>+7 (123) 456-78-90</p>
              </div>
              <div>
                <Mail className="w-8 h-8 mb-2 mx-auto text-primary" />
                <p>info@gelios-insurance.ru</p>
              </div>
              <div>
                <MapPin className="w-8 h-8 mb-2 mx-auto text-primary" />
                <p>г. Москва, ул. Страховая, д. 1</p>
              </div>
            </div>
          </div>
        </section>
        </div>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">© 2024 Гелиос Страхование. Все права защищены.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="/feedback">
            Обратная связь
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Политика конфиденциальности
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Условия использования
          </Link>
        </nav>
      </footer>
    </div>
  )
}
