<template>
  <div id="journey"></div>
  <section class="bg-slate-900 py-24">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-16">
        <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-700/50 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-4">
          <i class="fas fa-road text-xs"></i> Trajetória
        </span>
        <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">Minha Jornada</h2>
        <p class="text-slate-400">Os marcos que me transformaram em quem sou como engenheiro.</p>
      </div>

      <!-- Timeline -->
      <div class="relative">
        <!-- Vertical line -->
        <div class="absolute left-4 sm:left-1/2 sm:-translate-x-px top-0 bottom-0 w-px bg-slate-800"></div>

        <div class="space-y-10">
          <div
            v-for="(item, index) in timeline"
            :key="item.title"
            class="relative flex gap-6 sm:gap-0"
            :class="index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'"
          >
            <!-- Dot -->
            <div class="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 w-2 h-2 rounded-full mt-6 ring-4 ring-slate-900"
              :class="item.dotColor"></div>

            <!-- Card — alternating sides -->
            <div class="ml-10 sm:ml-0 sm:w-[46%]"
              :class="index % 2 === 0 ? 'sm:pr-10' : 'sm:pl-10 sm:ml-auto'">
              <div class="p-5 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-slate-600 transition-all duration-200 group">
                <div class="flex items-center gap-3 mb-3">
                  <div class="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" :class="item.iconBg">
                    <i :class="[item.icon, item.iconColor, 'text-sm']"></i>
                  </div>
                  <span class="text-xs font-medium text-slate-500 tabular-nums">{{ item.period }}</span>
                </div>
                <h3 class="text-white font-semibold text-base mb-1 leading-tight">{{ item.title }}</h3>
                <p class="text-indigo-400 text-xs font-medium mb-3">{{ item.institution }}</p>
                <p class="text-slate-400 text-sm leading-relaxed mb-3">{{ item.description }}</p>
                <div class="flex flex-wrap gap-1.5">
                  <span v-for="tag in item.tags" :key="tag"
                    class="px-2 py-0.5 rounded-md bg-slate-700/60 border border-slate-600/50 text-slate-400 text-xs">
                    {{ tag }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const timeline = [
  {
    period: '2023 – 2025',
    title: 'Onde a lógica virou código',
    institution: 'E. E. Professor Gastão Valle',
    description: 'Ensino Médio integrado ao Técnico em Desenvolvimento de Sistemas. Foi aqui que entendi que lógica de programação não é memorização — é a habilidade de decompor um problema até ele virar instruções executáveis. SQL e algoritmos deixaram de ser exercícios e viraram ferramentas.',
    icon: 'fa-solid fa-graduation-cap',
    iconBg: 'bg-indigo-600/20',
    iconColor: 'text-indigo-400',
    dotColor: 'bg-indigo-500',
    tags: ['Lógica de Programação', 'SQL', 'Algoritmos'],
  },
  {
    period: 'Out 2024 – Dez 2026',
    title: 'Engenharia de Software na prática',
    institution: 'UNIMONTES / UEMG – Bocaiuva/MG',
    description: 'Formação técnica com foco em modelagem de sistemas, banco de dados avançado e POO. Aqui a programação começou a fazer sentido em escala: como estruturar dados de forma que o sistema continue sustentável à medida que cresce.',
    icon: 'fa-solid fa-database',
    iconBg: 'bg-violet-600/20',
    iconColor: 'text-violet-400',
    dotColor: 'bg-violet-500',
    tags: ['Modelagem de Dados', 'POO', 'Banco de Dados Avançado'],
  },
  {
    period: 'Mai – Nov 2025',
    title: 'Primeiro sistema real em produção',
    institution: 'Projeto Real – Gastão Valle',
    description: 'Uma escola com ~2.500 pessoas precisava de um portal que simplesmente não quebrasse. Construí a API em Node.js com JWT, bcrypt, rate-limiting por IP e headers de segurança (HSTS/CSP). Foi meu primeiro contato com o que significa escrever código que outras pessoas dependem todos os dias.',
    icon: 'fa-solid fa-globe',
    iconBg: 'bg-cyan-600/20',
    iconColor: 'text-cyan-400',
    dotColor: 'bg-cyan-500',
    tags: ['Node.js', 'Docker', 'JWT', 'CI/CD', 'MongoDB'],
  },
  {
    period: 'Jul 2025 – Atual',
    title: 'Do zero ao SaaS próprio em produção',
    institution: 'Produto Próprio',
    description: 'Cansado de configurar deploy manualmente, construí o Arctis Deploy: uma plataforma que converte repositórios Git em ambientes de produção isolados. Arquitetura control-plane + deploy-agent em Go, multi-tenant, WebSockets para logs em tempo real, SSL automático e Stripe para cobrança. O primeiro produto que é meu, de ponta a ponta.',
    icon: 'fa-solid fa-rocket',
    iconBg: 'bg-indigo-600/20',
    iconColor: 'text-indigo-400',
    dotColor: 'bg-indigo-500',
    tags: ['Golang', 'Multi-tenant', 'Docker', 'Nginx', 'Stripe'],
  },
  {
    period: 'Abr 2026 – Atual',
    title: 'Hardware encontra software — de verdade',
    institution: 'Projeto Acadêmico',
    description: 'Projetei o System Design completo de um sistema de controle de acesso por RFID para ~2.500 alunos: protocolo de comunicação entre leitores e a API Node.js, lógica de autorização em tempo real e ambiente containerizado. Quando o hardware te dá feedback imediato, não tem como esconder um bug de arquitetura.',
    icon: 'fa-solid fa-chalkboard-user',
    iconBg: 'bg-amber-600/20',
    iconColor: 'text-amber-400',
    dotColor: 'bg-amber-500',
    tags: ['System Design', 'Node.js', 'RFID', 'Docker', 'Linux'],
  },
  {
    period: 'Ago 2026 – Dez 2030 (Previsão)',
    title: 'Teoria para solidificar a prática',
    institution: 'Afya – Montes Claros/MG',
    description: 'Engenharia da Computação com foco em sistemas distribuídos, arquitetura de hardware e computação paralela. Chego com sistemas reais já entregues em produção. O objetivo é entender formalmente o que já pratico — e construir sobre uma base mais profunda.',
    icon: 'fa-solid fa-microchip',
    iconBg: 'bg-emerald-600/20',
    iconColor: 'text-emerald-400',
    dotColor: 'bg-emerald-500',
    tags: ['Sistemas Distribuídos', 'Arquitetura de Hardware', 'Computação Paralela'],
  },
]
</script>
