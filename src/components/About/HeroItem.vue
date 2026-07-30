<template>
  <section class="relative bg-slate-950 pt-28 pb-20 overflow-hidden border-b border-slate-900">
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(37,99,235,0.06),transparent)]"></div>
    <div class="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Text -->
        <div>
          <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-indigo-950/20 border border-indigo-500/30 text-indigo-400 text-xs font-mono font-semibold uppercase tracking-wider mb-6">
            <i class="fas fa-user text-xs"></i> Sobre Mim
          </span>
          <h1 class="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6 tracking-tighter">
            Construo sistemas.<br>
            <span class="bg-gradient-to-r from-white via-slate-200 to-indigo-400 bg-clip-text text-transparent">
              Eles ficam no ar.
            </span>
          </h1>
          <p class="text-slate-400 text-xs leading-relaxed mb-8">
            Sou Pedro, engenheiro backend de Bocaiuva, MG. Aprendi programação pela necessidade de resolver problemas reais
            — e fui fundo o suficiente pra entender o que acontece por baixo das abstrações. Hoje trabalho com Go,
            Node.js e Java, com sistemas multi-tenant e infra Docker em produção atendendo milhares de usuários.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <a href="#journey"
              class="inline-flex items-center gap-2 px-5 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-600/20 active:translate-y-0">
              <i class="fas fa-arrow-down text-xs"></i> Minha Jornada
            </a>
            <a href="/#Contact"
              class="inline-flex items-center gap-2 px-5 py-3 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-white font-bold rounded-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0">
              <i class="fas fa-envelope text-xs"></i> Fale Comigo
            </a>
          </div>
        </div>

        <!-- Stats card -->
        <div class="grid grid-cols-2 gap-4">
          <div v-for="stat in stats" :key="stat.label"
            class="group p-5 rounded-lg bg-slate-900/40 border border-slate-800 hover:border-slate-700 hover:bg-slate-900/60 transition-all duration-200">
            <div class="w-9 h-9 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center mb-3 group-hover:border-indigo-500/30 transition-all duration-300">
              <i :class="[stat.icon, 'text-slate-500 group-hover:text-indigo-400 text-sm transition-colors duration-300']"></i>
            </div>
            <p class="text-2xl font-extrabold text-white mb-0.5">{{ stat.value }}</p>
            <p class="text-slate-500 text-[10px] font-mono uppercase tracking-wider">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const stats = [
  { value: '4+', label: 'Sistemas em Produção', icon: 'fas fa-rocket', iconBg: 'bg-indigo-600/20', iconColor: 'text-indigo-400' },
  { value: '2.5k+', label: 'Usuários Atendidos Hoje', icon: 'fas fa-users', iconBg: 'bg-violet-600/20', iconColor: 'text-violet-400' },
  { value: '2025', label: 'Primeiro Projeto Real', icon: 'fas fa-calendar', iconBg: 'bg-cyan-600/20', iconColor: 'text-cyan-400' },
  { value: 'MG', label: 'Bocaiuva, Brasil', icon: 'fas fa-map-marker-alt', iconBg: 'bg-amber-600/20', iconColor: 'text-amber-400' },
]
</script>
