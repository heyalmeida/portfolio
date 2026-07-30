# Pedro Miguel — Portfolio (ArctisDev)

> Portfólio pessoal de engenharia backend e DevOps. Construído para mostrar sistemas reais em produção, não demos.

**Live:** [arctisdev.com](https://arctisdev.com)

---

## Stack

| Camada | Tecnologia |
|---|---|
| Framework | Vue 3 (Composition API + `<script setup>`) |
| Linguagem | TypeScript |
| Estilização | Tailwind CSS v4 |
| Build | Vite 7 |
| Roteamento | Vue Router 4 |
| Deploy | Vercel |

---

## Páginas

| Rota | Descrição |
|---|---|
| `/` | Hero, stack técnica, projetos em destaque e contato |
| `/projects` | Grade completa de projetos com filtros por categoria |
| `/about` | Apresentação pessoal e linha do tempo da trajetória |

---

## Rodando localmente

**Pré-requisito:** Node.js `>=20.19`

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

Abra [http://localhost:5173](http://localhost:5173) no navegador.

### Outros comandos

```bash
# Build de produção
npm run build

# Pré-visualizar o build
npm run preview

# Verificar tipos TypeScript
npm run type-check

# Lint + auto-fix
npm run lint

# Formatar código
npm run format
```

---

## Estrutura do projeto

```
src/
├── components/
│   ├── About/
│   │   ├── HeroItem.vue        # Hero da página Sobre Mim
│   │   └── JourneyItem.vue     # Timeline de trajetória
│   ├── Home/
│   │   ├── HeroItem.vue        # Hero principal
│   │   ├── MySkillsItem.vue    # Seção de stack técnica
│   │   ├── ProjectsItem.vue    # Projetos em destaque
│   │   └── ContactFormItem.vue # Formulário de contato
│   ├── Projects/
│   │   ├── HeroItem.vue        # Hero da página de Projetos
│   │   ├── FilterProjects.vue  # Filtros por categoria
│   │   ├── ProjectsGrid.vue    # Grade de projetos
│   │   ├── UsedStacks.vue      # Grid de tecnologias
│   │   └── CTA.vue             # Call to action final
│   ├── NavbarItem.vue
│   ├── FooterItem.vue
│   └── PreloaderItem.vue
├── views/
│   ├── HomePage.vue
│   ├── AboutPage.vue
│   └── ProjectsPage.vue
├── router/
│   └── index.ts
└── assets/
    └── css/
```

---

## Deploy

O projeto é deployed automaticamente na **Vercel** a cada push na branch `main`.

O arquivo [`vercel.json`](./vercel.json) configura o rewrite de todas as rotas para `/` (necessário para SPA com Vue Router no modo history).

---

## Contato

- **Email:** mc33pedrobr@gmail.com
- **LinkedIn:** [linkedin.com/in/hey-almeida](https://www.linkedin.com/in/hey-almeida)
- **GitHub:** [github.com/heyalmeida](https://github.com/heyalmeida)
