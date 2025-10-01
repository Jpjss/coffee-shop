import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContatoPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-secondary py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-[family-name:var(--font-montserrat)] mb-4 text-balance text-5xl font-black">
              Entre em Contato
            </h1>
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
              Estamos aqui para ajudar. Fale conosco!
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Contact Form */}
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <h2 className="font-[family-name:var(--font-montserrat)] mb-6 text-2xl font-bold">
                    Envie uma Mensagem
                  </h2>
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-sm font-medium">
                        Nome Completo
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full rounded-md border border-border bg-background px-4 py-3 outline-none ring-primary/20 focus:ring-2"
                        placeholder="Seu nome"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm font-medium">
                        E-mail
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full rounded-md border border-border bg-background px-4 py-3 outline-none ring-primary/20 focus:ring-2"
                        placeholder="seu@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="mb-2 block text-sm font-medium">
                        Telefone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full rounded-md border border-border bg-background px-4 py-3 outline-none ring-primary/20 focus:ring-2"
                        placeholder="(00) 00000-0000"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="mb-2 block text-sm font-medium">
                        Mensagem
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        className="w-full rounded-md border border-border bg-background px-4 py-3 outline-none ring-primary/20 focus:ring-2"
                        placeholder="Como podemos ajudar?"
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full">
                      Enviar Mensagem
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <div className="space-y-6">
                <Card className="border-none shadow-md">
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-[family-name:var(--font-montserrat)] mb-2 text-lg font-bold">Endereço</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        Rua do Café, 123
                        <br />
                        Centro, São Paulo - SP
                        <br />
                        CEP: 01234-567
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md">
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-[family-name:var(--font-montserrat)] mb-2 text-lg font-bold">Telefone</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        (11) 98765-4321
                        <br />
                        (11) 3456-7890
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md">
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-[family-name:var(--font-montserrat)] mb-2 text-lg font-bold">E-mail</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        contato@cafepremium.com.br
                        <br />
                        vendas@cafepremium.com.br
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md">
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-[family-name:var(--font-montserrat)] mb-2 text-lg font-bold">
                        Horário de Atendimento
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        Segunda a Sexta: 9h às 18h
                        <br />
                        Sábado: 9h às 13h
                        <br />
                        Domingo: Fechado
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="bg-secondary py-16">
          <div className="container mx-auto px-4">
            <h2 className="font-[family-name:var(--font-montserrat)] mb-8 text-center text-3xl font-black">
              Nossa Localização
            </h2>
            <div className="aspect-video overflow-hidden rounded-lg shadow-lg">
              <img
                src="/placeholder.svg?height=600&width=1200"
                alt="Mapa da localização"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
