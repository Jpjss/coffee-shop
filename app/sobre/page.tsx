import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Coffee, Heart, Globe, Users } from "lucide-react"

export default function SobrePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[400px] overflow-hidden">
          <div className="absolute inset-0">
            <img src="/coffee-farm-plantation-mountains.jpg" alt="Fazenda de café" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
          </div>
          <div className="container relative mx-auto flex h-full items-center px-4">
            <div className="max-w-2xl text-white">
              <h1 className="font-[family-name:var(--font-montserrat)] mb-4 text-balance text-5xl font-black">
                Nossa História
              </h1>
              <p className="text-pretty text-lg leading-relaxed">
                Uma jornada de paixão pelo café que começou há mais de 20 anos
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="font-[family-name:var(--font-montserrat)] mb-6 text-3xl font-black">
                A Paixão Pelo Café Perfeito
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Tudo começou em 2003, quando nosso fundador viajou pela primeira vez para a Colômbia e se apaixonou
                  pela cultura do café. Visitando pequenas fazendas nas montanhas, ele descobriu que o café poderia ser
                  muito mais do que uma simples bebida matinal.
                </p>
                <p>
                  Desde então, nossa missão tem sido trazer os melhores cafés especiais do mundo diretamente para sua
                  xícara. Trabalhamos diretamente com produtores em mais de 15 países, garantindo práticas sustentáveis
                  e comércio justo.
                </p>
                <p>
                  Cada grão é cuidadosamente selecionado, torrado artesanalmente em pequenos lotes e embalado para
                  preservar o frescor e os aromas únicos de cada origem. Nossa paixão é compartilhar essa experiência
                  sensorial com você.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-secondary py-16">
          <div className="container mx-auto px-4">
            <h2 className="font-[family-name:var(--font-montserrat)] mb-12 text-center text-4xl font-black">
              Nossos Valores
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <Card className="border-none bg-background shadow-sm">
                <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Coffee className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-[family-name:var(--font-montserrat)] text-lg font-bold">Qualidade</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Apenas os melhores grãos, selecionados com rigor e cuidado
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none bg-background shadow-sm">
                <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-[family-name:var(--font-montserrat)] text-lg font-bold">Paixão</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Amor genuíno pelo café e pela arte de prepará-lo
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none bg-background shadow-sm">
                <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Globe className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-[family-name:var(--font-montserrat)] text-lg font-bold">Sustentabilidade</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Compromisso com o meio ambiente e comércio justo
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none bg-background shadow-sm">
                <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-[family-name:var(--font-montserrat)] text-lg font-bold">Comunidade</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Valorizamos cada produtor e cada cliente
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="font-[family-name:var(--font-montserrat)] mb-12 text-center text-4xl font-black">
              Nossa Equipe
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  name: "Carlos Silva",
                  role: "Fundador & Mestre Torrador",
                  image: "/professional-coffee-roaster-portrait.jpg",
                },
                {
                  name: "Ana Santos",
                  role: "Especialista em Cafés Especiais",
                  image: "/female-coffee-expert-portrait.jpg",
                },
                {
                  name: "Pedro Costa",
                  role: "Gerente de Qualidade",
                  image: "/male-coffee-quality-manager-portrait.jpg",
                },
              ].map((member, index) => (
                <Card key={index} className="overflow-hidden border-none shadow-md">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6 text-center">
                    <h3 className="font-[family-name:var(--font-montserrat)] mb-2 text-xl font-bold">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
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
