import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <p className="text-xs text-muted-foreground">
        © 2024 Гелиос Страхование. Все права защищены.
      </p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link className="text-xs hover:underline underline-offset-4" href="/feedback">
          Обратная связь
        </Link>
        <Link
          className="text-xs hover:underline underline-offset-4"
          href="/Пользовательское соглашение.pdf"
          target="_blank"
        >
          Пользовательское соглашение
        </Link>
      </nav>
    </footer>
  )
}
