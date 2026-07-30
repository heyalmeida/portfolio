<template>
  <section class="py-16 bg-slate-950">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Grid Container -->
      <div v-if="filteredProjects.length > 0" class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          v-for="project in filteredProjects"
          :key="project.title"
          class="group rounded-lg bg-slate-900/40 border border-slate-800 hover:border-slate-700 hover:bg-slate-900/60 overflow-hidden transition-all duration-300 hover:-translate-y-0.5 flex flex-col h-full"
        >
          <!-- Banner -->
          <div
            class="h-44 relative flex items-center justify-center overflow-hidden shrink-0 border-b border-slate-800/40 bg-slate-950/50"
          >
            <div class="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.02)_50%,transparent_75%)]"></div>
            <img 
              :src="project.image" 
              :alt="project.title" 
              class="w-20 h-20 object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.35)] group-hover:scale-105 transition-transform duration-300"
            />
            
            <!-- Floating Badges -->
            <div class="absolute top-4 right-4 flex gap-2">
              <span
                v-for="badge in project.badges"
                :key="badge"
                class="px-2 py-0.5 rounded bg-slate-950/80 backdrop-blur-sm text-slate-400 text-[10px] font-mono border border-slate-800"
              >
                {{ badge }}
              </span>
            </div>
          </div>

          <!-- Content Section -->
          <div class="p-6 flex flex-col flex-1 justify-between">
            <div>
              <div class="flex items-start justify-between gap-3 mb-3">
                <h3 class="text-white font-bold text-lg leading-tight tracking-tight group-hover:text-indigo-400 transition-colors duration-200">
                  {{ project.title }}
                </h3>
                <span
                  class="shrink-0 px-2 py-0.5 rounded text-[10px] font-semibold border"
                  :class="project.typeClass"
                >
                  {{ project.type }}
                </span>
              </div>
              
              <p class="text-slate-400 text-xs leading-relaxed mb-6 min-h-[50px]">
                {{ project.description }}
              </p>
            </div>

            <div>
              <!-- Tech tags -->
              <div class="flex flex-wrap gap-1.5 mb-6">
                <span
                  v-for="tech in project.techs"
                  :key="tech"
                  class="px-2 py-0.5 rounded bg-slate-950 border border-slate-850 text-slate-400 text-[10px] font-mono"
                >
                  {{ tech }}
                </span>
              </div>

              <!-- Links -->
              <div class="flex flex-wrap gap-4 border-t border-slate-850 pt-4">
                <a
                  v-for="link in project.links"
                  :key="link.label"
                  :href="link.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-1.5 text-indigo-400 hover:text-indigo-300 text-xs font-semibold transition-colors duration-200"
                >
                  <i :class="link.icon" class="text-[10px]"></i>
                  {{ link.label }}
                </a>
                <span v-if="!project.links.length" class="text-slate-500 text-[11px] italic flex items-center gap-1">
                  <i class="fas fa-lock text-[10px] text-slate-600"></i>
                  Código privado · disponível sob solicitação
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-else class="text-center py-20 bg-slate-900/20 border border-slate-800 rounded-lg">
        <i class="fas fa-folder-open text-slate-600 text-5xl mb-4"></i>
        <h3 class="text-white font-bold text-lg">Nenhum projeto encontrado</h3>
        <p class="text-slate-500 text-sm mt-1">Tente selecionar outra categoria de filtro.</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  activeCategory: string
}>()
const projects = [
  {
    title: 'Portal Institucional – Gastão Valle',
    type: 'Full-Stack · API',
    typeClass: 'bg-cyan-950/40 text-cyan-400 border border-cyan-800/30',
    image: '/images/GastaoValle/logo.png',
    badges: ['Node.js', 'Mai 2025'],
    categories: ['backend', 'saas'],
    description: 'Uma escola com ~2.500 alunos e professores não pode depender de um sistema frágil. Construí a API em Node.js com autenticação JWT + bcrypt, rate-limiting por IP, headers estritos (HSTS/CSP) e pipeline CI/CD dockerizado no Render. Desde o lançamento, zero incidentes críticos — o sistema simplesmente funciona.',
    techs: ['Node.js', 'Express', 'MongoDB', 'JWT', 'bcrypt', 'Docker', 'CI/CD'],
    links: [
      { label: 'Visitar Portal', url: 'https://gastaovalle.com/', icon: 'fas fa-external-link-alt' },
    ],
  },
  {
    title: 'E-Commerce Premium – Lojas M&M',
    type: 'Full-Stack · E-Commerce',
    typeClass: 'bg-indigo-950/40 text-indigo-400 border border-indigo-800/30',
    image: '/images/lojas-mm-logo.png',
    badges: ['Next.js 15', 'Abr 2026'],
    categories: ['saas', 'backend'],
    description: 'Moda premium exige mais do que um carrinho de compras. O cliente precisava de Drops com acesso por senha e contagem regressiva, matriz de estoque em tempo real por cor e tamanho, checkout MercadoPago e painel Kanban interno para a equipe de faturamento. Entreguei tudo isso com Next.js 15 + Server Actions e arquitetura que sustenta picos de acesso nos lançamentos.',
    techs: ['Next.js 15', 'React 19', 'Node.js', 'MariaDB', 'MercadoPago', 'Tailwind', 'Docker'],
    links: [],
  },
  {
    title: 'Arctis Deploy',
    type: 'SaaS · DevOps',
    typeClass: 'bg-indigo-950/40 text-indigo-400 border border-indigo-800/30',
    image: '/images/logo.png',
    badges: ['Golang', 'Jul 2025'],
    categories: ['saas', 'devops', 'backend'],
    description: 'Fazer deploy em VPS ainda é doloroso demais: configuração manual, SSL na mão, logs ilegíveis. O Arctis Deploy resolve isso com uma arquitetura control-plane + deploy-agent que converte repositórios Git em instâncias de produção isoladas. SSL automático via Nginx, logs em tempo real por WebSocket e cobrança recorrente via Stripe.',
    techs: ['Golang', 'NextJS 15', 'Docker', 'Nginx', 'WebSockets', 'Stripe', 'TypeScript'],
    links: [
      { label: 'Dashboard', url: 'https://dashboard.arctisdev.com/', icon: 'fas fa-external-link-alt' },
      { label: 'Landing Page', url: 'https://launch.arctisdev.com/', icon: 'fas fa-external-link-alt' },
    ],
  },
  {
    title: 'Lumine AI',
    type: 'Backend · IA',
    typeClass: 'bg-violet-950/40 text-violet-400 border border-violet-800/30',
    image: '/images/Lumine/logo-green.png',
    badges: ['Node.js', 'Mai 2026'],
    categories: ['saas', 'backend'],
    description: 'O gargalo de chatbots de IA é latência: buscar contexto do zero a cada mensagem. Resolvi isso com Upstash Redis como cache distribuído de histórico de conversa, reduzindo o tempo de resposta perceptivelmente. A API em Hono suporta OpenAI, Gemini e Groq simultaneamente, com Argon2 para autenticação e Cloudinary para uploads.',
    techs: ['Node.js', 'TypeScript', 'Hono', 'MongoDB', 'Upstash Redis', 'Argon2', 'Cloudinary'],
    links: [],
  },
  {
    title: 'Sistema de Controle de Acesso',
    type: 'System Design · IoT',
    typeClass: 'bg-amber-950/40 text-amber-400 border border-amber-800/30',
    image: '/images/GastaoValle/logo.png',
    badges: ['Hardware/SW', 'Abr 2026'],
    categories: ['devops', 'backend'],
    description: 'Controlar o acesso físico de ~2.500 alunos por RFID exige mais do que ligar um hardware a um banco de dados. Fui responsável pelo System Design completo: arquitetura de integração entre leitores RFID e a API Node.js, lógica de autorização em tempo real e ambiente dockerizado em Linux Server. Projeto acadêmico com exigência de confiabilidade real.',
    techs: ['System Design', 'Node.js', 'Hardware RFID', 'Docker', 'Linux Server'],
    links: [],
  },
]

// Dynamic filtering computed property
const filteredProjects = computed(() => {
  if (props.activeCategory === 'all') {
    return projects
  }
  return projects.filter((project) => project.categories.includes(props.activeCategory))
})
</script>
