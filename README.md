# ☕ Café Premium - Website da Loja

Um website moderno e elegante para uma loja de café especializada, desenvolvido com Next.js 14, React, TypeScript e Tailwind CSS. O projeto apresenta um design responsivo e componentes reutilizáveis para uma experiência de usuário excepcional.

## 🌟 Características

### 📱 Páginas Implementadas
- **Página Inicial** - Hero section atrativo com produtos em destaque
- **Produtos** - Catálogo completo de cafés especiais com filtros
- **Sobre Nós** - História da empresa e valores da marca
- **Blog** - Artigos sobre café, preparo e sustentabilidade  
- **Contato** - Formulário de contato e informações da loja

### 🎨 Design & UX
- Design responsivo para desktop, tablet e mobile
- Tema escuro/claro suportado
- Animações suaves e transições elegantes
- Componentes UI modernos com shadcn/ui
- Tipografia customizada (Montserrat + Open Sans)
- Sistema de cores consistente

### 🛠️ Funcionalidades
- Navegação intuitiva com menu responsivo
- Carrinho de compras (interface)
- Sistema de badges para produtos (Mais Vendido, Novo, Orgânico, etc.)
- Cards de produtos com hover effects
- Formulário de contato estruturado
- Integração com redes sociais
- SEO otimizado

## 🚀 Tecnologias Utilizadas

### Core
- **Next.js 14** - Framework React com App Router
- **React 18** - Biblioteca para interfaces de usuário
- **TypeScript** - Tipagem estática para JavaScript
- **Tailwind CSS v4** - Framework CSS utilitário

### UI Components
- **shadcn/ui** - Componentes UI acessíveis e customizáveis
- **Radix UI** - Primitivos de componentes headless
- **Lucide React** - Ícones SVG modernos
- **class-variance-authority** - Utilitário para variações de componentes

### Funcionalidades Adicionais
- **React Hook Form** - Gerenciamento de formulários
- **Zod** - Validação de esquemas TypeScript
- **next-themes** - Suporte a tema escuro/claro
- **Framer Motion** (via tailwindcss-animate) - Animações
- **Vercel Analytics** - Análise de desempenho

## 📦 Estrutura do Projeto

```
coffee-shop/
├── app/                    # App Router (Next.js 14)
│   ├── globals.css        # Estilos globais
│   ├── layout.tsx         # Layout raiz da aplicação
│   ├── page.tsx           # Página inicial
│   ├── produtos/          # Página de produtos
│   ├── sobre/             # Página sobre nós
│   ├── blog/              # Página do blog
│   └── contato/           # Página de contato
├── components/            # Componentes reutilizáveis
│   ├── header.tsx         # Cabeçalho com navegação
│   ├── footer.tsx         # Rodapé com links
│   ├── theme-provider.tsx # Provedor de temas
│   └── ui/                # Componentes UI (shadcn/ui)
├── hooks/                 # Custom React hooks
├── lib/                   # Utilitários e configurações
│   └── utils.ts          # Funções auxiliares
├── public/               # Arquivos estáticos
├── styles/              # Arquivos de estilo adicionais
└── components.json      # Configuração shadcn/ui
```

## 🏃‍♂️ Como Executar

### Pré-requisitos
- Node.js 18+ instalado
- pnpm (recomendado) ou npm/yarn

### Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/Jpjss/coffee-shop.git
cd coffee-shop
```

2. **Instale as dependências**
```bash
pnpm install
# ou
npm install
```

3. **Execute o servidor de desenvolvimento**
```bash
pnpm dev
# ou
npm run dev
```

4. **Abra no navegador**
```
http://localhost:3000
```

### Scripts Disponíveis

```bash
# Desenvolvimento
pnpm dev          # Inicia servidor de desenvolvimento

# Produção  
pnpm build        # Cria build otimizado
pnpm start        # Executa build de produção
pnpm lint         # Executa linting do código
```

## 🎨 Customização

### Temas e Cores
O projeto utiliza CSS custom properties para temas. Personalize em `app/globals.css`:

```css
:root {
  --primary: /* Cor principal */
  --secondary: /* Cor secundária */
  --accent: /* Cor de destaque */
  --background: /* Cor de fundo */
  --foreground: /* Cor do texto */
}
```

### Componentes UI
Adicione novos componentes shadcn/ui:

```bash
npx shadcn-ui@latest add [component-name]
```

### Fontes
As fontes são configuradas em `app/layout.tsx`:
- **Montserrat** - Títulos e headings
- **Open Sans** - Texto corpo

## 📱 Responsividade

O design é totalmente responsivo com breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🔧 Configurações

### Next.js
Configurações em `next.config.mjs`:
- ESLint configurado
- TypeScript strict mode
- Otimizações de imagem

### Tailwind CSS
Configurações em `postcss.config.mjs` e `components.json`:
- Tailwind CSS v4 com PostCSS
- Animações customizadas
- Componentes shadcn/ui integrados

### TypeScript
Configurado em `tsconfig.json` com:
- Strict mode habilitado
- Path aliases configurados (@/ para src)
- Next.js types incluídos

## 🚀 Deploy

### Vercel (Recomendado)
1. Faça push para GitHub
2. Conecte no [Vercel](https://vercel.com)
3. Deploy automático configurado

### Outras Plataformas
```bash
# Build para produção
pnpm build

# Os arquivos estarão em .next/
```

## 🛡️ Boas Práticas

### Desenvolvimento
- Componentes TypeScript com tipagem forte
- Hooks personalizados para lógica reutilizável
- CSS-in-JS com Tailwind classes
- Otimização de imagens com Next.js Image

### Performance
- Code splitting automático (Next.js)
- Lazy loading de componentes
- Otimização de fonts (Google Fonts)
- Minificação automática em produção

### SEO
- Metadata configurado em cada página
- Sitemap automático (Next.js)
- Estrutura HTML semântica
- Open Graph tags

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para detalhes.

## 📞 Contato

**Café Premium**
- 📍 Rua do Café, 123 - Centro, São Paulo - SP
- 📞 (11) 99999-9999
- 📧 contato@cafepremium.com.br
- 🌐 [www.cafepremium.com.br](http://localhost:3000)

---

Desenvolvido com ☕ e 💜 pela equipe do Café Premium