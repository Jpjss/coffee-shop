import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function ProdutosPage() {
  const products = [
    {
      id: 1,
      name: "Café Arábica Premium",
      origin: "Colômbia",
      price: "R$ 45,90",
      image: "/premium-arabica-coffee-beans.jpg",
      badge: "Mais Vendido",
      notes: "Notas de chocolate e caramelo",
    },
    {
      id: 2,
      name: "Blend Especial",
      origin: "Brasil",
      price: "R$ 39,90",
      image: "/special-blend-coffee-beans.jpg",
      badge: "Novo",
      notes: "Equilibrado e suave",
    },
    {
      id: 3,
      name: "Café Orgânico",
      origin: "Etiópia",
      price: "R$ 52,90",
      image: "/organic-ethiopian-coffee-beans.jpg",
      badge: "Orgânico",
      notes: "Notas florais e cítricas",
    },
    {
      id: 4,
      name: "Espresso Intenso",
      origin: "Itália",
      price: "R$ 48,90",
      image: "/intense-espresso-coffee-beans.jpg",
      badge: "Forte",
      notes: "Corpo intenso e marcante",
    },
    {
      id: 5,
      name: "Café Descafeinado",
      origin: "Costa Rica",
      price: "R$ 42,90",
      image: "/decaf-coffee-beans.png",
      badge: "Sem Cafeína",
      notes: "Sabor completo sem cafeína",
    },
    {
      id: 6,
      name: "Café Gourmet",
      origin: "Guatemala",
      price: "R$ 55,90",
      image: "/gourmet-guatemalan-coffee-beans.jpg",
      badge: "Premium",
      notes: "Notas de frutas vermelhas",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-secondary py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-[family-name:var(--font-montserrat)] mb-4 text-balance text-5xl font-black">
              Nossos Produtos
            </h1>
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
              Explore nossa coleção completa de cafés especiais de todo o mundo
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
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
                    <p className="mb-2 text-sm text-muted-foreground">Origem: {product.origin}</p>
                    <p className="mb-4 text-sm italic text-muted-foreground">{product.notes}</p>
                    <Button className="w-full" asChild>
                      <Link href={`/produtos/${product.id}`}>Ver Detalhes</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
