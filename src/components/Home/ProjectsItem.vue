<template>
  <section id="projects" class="bg-slate-950 py-24 border-t border-slate-900">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-16">
        <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-indigo-950/20 border border-indigo-500/30 text-indigo-400 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
          <i class="fas fa-code-branch text-xs"></i> Projetos
        </span>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">Sistemas Reais. Resultados Concretos.</h2>
        <p class="text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
          Não são demos. Cada projeto abaixo serve usuários reais hoje e tem uma decisão técnica por trás.
        </p>
      </div>

      <!-- Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div
          v-for="project in projects"
          :key="project.title"
          class="group rounded-lg bg-slate-900/40 border border-slate-800 hover:border-slate-700 hover:bg-slate-900/60 overflow-hidden transition-all duration-300 hover:-translate-y-0.5"
        >
          <!-- Banner -->
          <div class="h-36 relative flex items-center justify-center overflow-hidden border-b border-slate-800/40 bg-slate-950/50">
            <div class="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.02)_50%,transparent_75%)]"></div>
            <img 
              :src="project.image" 
              :alt="project.title" 
              class="w-16 h-16 object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.3)] group-hover:scale-105 transition-transform duration-300"
            />
            <!-- Badges -->
            <div class="absolute top-3 right-3 flex gap-2">
              <span
                v-for="badge in project.badges"
                :key="badge"
                class="px-2 py-0.5 rounded bg-slate-950/80 backdrop-blur-sm text-slate-400 text-[10px] font-mono border border-slate-800"
              >{{ badge }}</span>
            </div>
          </div>

          <!-- Content -->
          <div class="p-6">
            <div class="flex items-start justify-between gap-3 mb-3">
              <h3 class="text-white font-semibold text-lg leading-tight">{{ project.title }}</h3>
              <span class="shrink-0 px-2 py-0.5 rounded text-[10px] font-semibold border"
                :class="project.typeClass">
                {{ project.type }}
              </span>
            </div>
            <p class="text-slate-400 text-xs leading-relaxed mb-4 min-h-[40px]">{{ project.description }}</p>
            <div class="flex flex-wrap gap-1.5 mb-5">
              <span
                v-for="tech in project.techs"
                :key="tech"
                class="px-2 py-0.5 rounded bg-slate-950 border border-slate-850 text-slate-400 text-[10px] font-mono"
              >{{ tech }}</span>
            </div>
            <div class="flex gap-4">
              <a
                v-for="link in project.links"
                :key="link.label"
                :href="link.url"
                target="_blank"
                rel="noreferrer"
                class="inline-flex items-center gap-1.5 text-indigo-400 hover:text-indigo-300 text-xs font-semibold transition-colors duration-200"
              >
                <i :class="link.icon" class="text-[10px]"></i>
                {{ link.label }}
              </a>
              <span v-if="!project.links.length" class="text-slate-500 text-[11px] italic mt-0.5">
                <i class="fas fa-lock text-[10px] mr-1"></i> Projeto em andamento ou sob NDA
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center mt-12">
        <a
          href="/projects"
          class="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-white font-semibold rounded-lg transition-all duration-200 hover:-translate-y-0.5"
        >
          <i class="fas fa-folder-open"></i>
          Ver todos os projetos
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const projects = [
  {
    title: 'Portal Institucional – Gastão Valle',
    type: 'Full-Stack · Produção',
    typeClass: 'bg-cyan-950/40 text-cyan-400 border border-cyan-800/30',
    image: '/images/GastaoValle/logo.png',
    badges: ['Node.js', 'Mai 2025'],
    description: 'Uma escola com ~2.500 alunos e professores precisava de um portal que não simplesmente existisse — precisava ser confiável. Construí a API com Node.js + Express, autenticacão JWT com bcrypt, rate-limiting por IP e headers de segurança estritos (HSTS/CSP). Pipeline CI/CD com Docker no Render. Resultado: zero incidentes críticos desde o lançamento.',
    techs: ['Node.js', 'Express', 'MongoDB', 'Docker', 'JWT', 'bcrypt', 'CI/CD'],
    links: [
      { label: 'Visitar Portal', url: 'https://gastaovalle.com/', icon: 'fas fa-external-link-alt' },
    ],
  },
  {
    title: 'E-Commerce Premium – Lojas M&M',
    type: 'Full-Stack',
    typeClass: 'bg-indigo-950/40 text-indigo-400 border border-indigo-800/30',
    image: '/images/lojas-mm-logo.png',
    badges: ['Next.js 15', 'Abr 2026'],
    description: 'Montar um e-commerce de moda exige muito além de um carrinho. O cliente queria mecânicas de Drop exclusivo por tempo/senha, matriz de estoque em tempo real por cor e tamanho, e integração de checkout com MercadoPago. Entreguei isso com Next.js 15, Server Actions e um painel Kanban interno para a equipe de faturamento.',
    techs: ['Next.js 15', 'React 19', 'Node.js', 'MariaDB', 'MercadoPago', 'Tailwind'],
    links: [],
  },
  {
    title: 'Arctis Deploy',
    type: 'SaaS · DevOps',
    typeClass: 'bg-indigo-950/40 text-indigo-400 border border-indigo-800/30',
    image: '/images/logo.png',
    badges: ['Golang', 'Jul 2025'],
    description: 'O problema: configurar deploy em VPS exige horas de leitura de documentação e múltiplas tentativas manuais. O Arctis Deploy resolve isso conectando repositórios Git a instâncias de servidor remoto em poucos cliques, com multi-tenant seguro, logs em tempo real via WebSockets, SSL automático pelo Nginx e cobrança recorrente via Stripe.',
    techs: ['Golang', 'NextJS 15', 'Docker', 'Nginx', 'WebSockets', 'Stripe'],
    links: [
      { label: 'Dashboard', url: 'https://dashboard.arctisdev.com/', icon: 'fas fa-external-link-alt' },
      { label: 'Landing Page', url: 'https://launch.arctisdev.com/', icon: 'fas fa-external-link-alt' },
    ],
  },
  {
    title: 'Lumine AI Chatbot',
    type: 'Backend · IA',
    typeClass: 'bg-violet-950/40 text-violet-400 border border-violet-800/30',
    image: '/images/Lumine/logo-green.png',
    badges: ['Node.js', 'Mai 2026'],
    description: 'O desafio era latência: chatbots de IA costumam ser lentos porque buscam contexto do zero a cada mensagem. Resolvi isso com Upstash Redis como camada de cache distribuído para histórico de conversa. Resultado: respostas perceptivelmente mais ágeis, mesmo com múltiplos provedores de IA configurados simultaneamente.',
    techs: ['Node.js', 'TypeScript', 'Hono', 'MongoDB', 'Redis', 'Argon2'],
    links: [
      { label: 'GitHub', url: 'https://github.com/heyalmeida/lumine', icon: 'fab fa-github' },
    ],
  },
]
</script>
