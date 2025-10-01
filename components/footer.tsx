import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-secondary">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="font-[family-name:var(--font-montserrat)] mb-4 text-lg font-bold">Café Premium</h3>
            <p className="text-sm text-muted-foreground">
              Os melhores grãos de café especiais, selecionados e torrados artesanalmente.
            </p>
          </div>

          <div>
            <h4 className="font-[family-name:var(--font-montserrat)] mb-4 text-sm font-bold">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/produtos" className="transition-colors hover:text-primary">
                  Produtos
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="transition-colors hover:text-primary">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/blog" className="transition-colors hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contato" className="transition-colors hover:text-primary">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-[family-name:var(--font-montserrat)] mb-4 text-sm font-bold">Atendimento</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="transition-colors hover:text-primary">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-primary">
                  Envio e Entrega
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-primary">
                  Política de Devolução
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-primary">
                  Termos de Serviço
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-[family-name:var(--font-montserrat)] mb-4 text-sm font-bold">Redes Sociais</h4>
            <div className="flex gap-4">
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Café Premium. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
