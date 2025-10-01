import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Coffee, Leaf, Truck, Award, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const featuredProducts = [
    {
      id: 1,
      name: "Café Arábica Premium",
      origin: "Colômbia",
      price: "R$ 45,90",
      image: "/premium-arabica-coffee-beans.jpg",
      badge: "Mais Vendido",
    },
    {
      id: 2,
      name: "Blend Especial",
      origin: "Brasil",
      price: "R$ 39,90",
      image: "/special-blend-coffee-beans.jpg",
      badge: "Novo",
    },
    {
      id: 3,
      name: "Café Orgânico",
      origin: "Etiópia",
      price: "R$ 52,90",
      image: "/organic-ethiopian-coffee-beans.jpg",
      badge: "Orgânico",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[600px] overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="absolute inset-0">
            <img
              src="/coffee-brewing-pour-over-artisan.jpg"
              alt="Café sendo preparado"
              className="h-full w-full object-cover opacity-20"
            />
          </div>
          <div className="container relative mx-auto flex h-full items-center px-4">
            <div className="max-w-2xl">
              <h1 className="font-[family-name:var(--font-montserrat)] mb-6 text-balance text-5xl font-black leading-tight md:text-6xl">
                Desperte Seus Sentidos com Café Premium
              </h1>
              <p className="mb-8 text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
                Grãos especiais selecionados das melhores fazendas do mundo, torrados artesanalmente para proporcionar
                uma experiência única em cada xícara.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="gap-2" asChild>
                  <Link href="/produtos">
                    Explorar Produtos
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/sobre">Conheça Nossa História</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <Card className="border-none bg-card shadow-sm">
                <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Coffee className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-[family-name:var(--font-montserrat)] text-lg font-bold">Grãos Selecionados</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Apenas os melhores grãos de cafés especiais do mundo
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none bg-card shadow-sm">
                <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Leaf className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-[family-name:var(--font-montserrat)] text-lg font-bold">100% Sustentável</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Produção responsável e comércio justo com produtores
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none bg-card shadow-sm">
                <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Truck className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-[family-name:var(--font-montserrat)] text-lg font-bold">Entrega Rápida</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Café fresco entregue na sua porta em até 48 horas
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none bg-card shadow-sm">
                <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-[family-name:var(--font-montserrat)] text-lg font-bold">Qualidade Garantida</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Satisfação garantida ou seu dinheiro de volta
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="bg-secondary py-16">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="font-[family-name:var(--font-montserrat)] mb-4 text-balance text-4xl font-black">
                Nossos Cafés Especiais
              </h2>
              <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
                Descubra nossa seleção de cafés premium de diferentes origens
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {featuredProducts.map((product) => (
                <Card
                  key={product.id}
                  className="group overflow-hidden border-none shadow-md transition-shadow hover:shadow-xl"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <Badge className="absolute right-4 top-4 bg-accent text-accent-foreground">{product.badge}</Badge>
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-2 flex items-center justify-between">
                      <h3 className="font-[family-name:var(--font-montserrat)] text-xl font-bold">{product.name}</h3>
                      <span className="text-lg font-bold text-primary">{product.price}</span>
                    </div>
                    <p className="mb-4 text-sm text-muted-foreground">Origem: {product.origin}</p>
                    <Button className="w-full" asChild>
                      <Link href={`/produtos/${product.id}`}>Ver Detalhes</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button size="lg" variant="outline" asChild>
                <Link href="/produtos">Ver Todos os Produtos</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-16 text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-[family-name:var(--font-montserrat)] mb-4 text-balance text-4xl font-black">
              Receba Ofertas Exclusivas
            </h2>
            <p className="mb-8 text-pretty text-lg leading-relaxed">
              Inscreva-se na nossa newsletter e ganhe 10% de desconto na primeira compra
            </p>
            <div className="mx-auto flex max-w-md gap-2">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 rounded-md border-0 px-4 py-3 text-foreground outline-none ring-2 ring-primary-foreground/20 focus:ring-primary-foreground/40"
              />
              <Button size="lg" variant="secondary">
                Inscrever
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
