import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-newspaper-border text-white py-2">
      <div className="container mx-auto px-4">
        <nav className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm">
          <Link href="/" className="hover:text-newspaper-accent transition-colors font-medium">
            HOME
          </Link>
          <Link href="/experiencia" className="hover:text-newspaper-accent transition-colors font-medium">
            EXPERIENCIA
          </Link>
          <Link href="/educacion" className="hover:text-newspaper-accent transition-colors font-medium">
            EDUCACIÓN
          </Link>
          <Link href="/habilidades" className="hover:text-newspaper-accent transition-colors font-medium">
            HABILIDADES
          </Link>
          <Link href="/proyectos" className="hover:text-newspaper-accent transition-colors font-medium">
            PROYECTOS
          </Link>
          <Link href="/contacto" className="hover:text-newspaper-accent transition-colors font-medium">
            CONTACTO
          </Link>
        </nav>
      </div>
    </header>
  );
}
