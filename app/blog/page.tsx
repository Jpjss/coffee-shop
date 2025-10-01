import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock } from "lucide-react"
import Link from "next/link"

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: "Como Preparar o Café Perfeito em Casa",
      excerpt:
        "Descubra os segredos para extrair o melhor sabor dos seus grãos de café com técnicas profissionais adaptadas para casa.",
      image: "/coffee-brewing-pour-over-home.jpg",
      category: "Preparo",
      date: "15 de Março, 2024",
      readTime: "5 min",
    },
    {
      id: 2,
      title: "A Jornada do Café: Da Fazenda à Xícara",
      excerpt: "Conheça todo o processo de produção do café, desde o cultivo nas montanhas até a torra artesanal.",
      image: "/coffee-farm-to-cup-journey.jpg",
      category: "Origem",
      date: "10 de Março, 2024",
      readTime: "8 min",
    },
    {
      id: 3,
      title: "Diferenças Entre Arábica e Robusta",
      excerpt:
        "Entenda as características únicas de cada espécie de café e como elas influenciam o sabor da sua bebida.",
      image: "/arabica-robusta-coffee-beans-comparison.jpg",
      category: "Educação",
      date: "5 de Março, 2024",
      readTime: "6 min",
    },
    {
      id: 4,
      title: "Métodos de Extração: Qual o Melhor Para Você?",
      excerpt: "Explore diferentes métodos de preparo como espresso, french press, aeropress e encontre seu favorito.",
      image: "/coffee-brewing-methods-equipment.jpg",
      category: "Preparo",
      date: "1 de Março, 2024",
      readTime: "7 min",
    },
    {
      id: 5,
      title: "Café e Sustentabilidade: Nosso Compromisso",
      excerpt: "Como trabalhamos com produtores para garantir práticas sustentáveis e comércio justo em toda a cadeia.",
      image: "/sustainable-coffee-farming-environment.jpg",
      category: "Sustentabilidade",
      date: "25 de Fevereiro, 2024",
      readTime: "5 min",
    },
    {
      id: 6,
      title: "Receitas Especiais com Café",
      excerpt: "Vá além do café tradicional com receitas criativas que destacam os sabores únicos dos nossos grãos.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Receitas",
      date: "20 de Fevereiro, 2024",
      readTime: "4 min",
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
              Blog do Café
            </h1>
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
              Dicas, histórias e conhecimento sobre o mundo do café especial
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link key={post.id} href={`/blog/${post.id}`}>
                  <Card className="group h-full overflow-hidden border-none shadow-md transition-shadow hover:shadow-xl">
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <Badge className="absolute left-4 top-4 bg-primary text-primary-foreground">
                        {post.category}
                      </Badge>
                    </div>
                    <CardContent className="flex flex-col gap-4 p-6">
                      <h3 className="font-[family-name:var(--font-montserrat)] text-balance text-xl font-bold transition-colors group-hover:text-primary">
                        {post.title}
                      </h3>
                      <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
