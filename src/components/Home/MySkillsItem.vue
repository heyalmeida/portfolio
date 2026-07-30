<template>
  <section id="skills" class="bg-slate-950 py-24 border-t border-slate-900">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-16">
        <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-indigo-950/20 border border-indigo-500/30 text-indigo-400 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
          <i class="fas fa-layer-group text-xs"></i> Stack Técnica
        </span>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">O que uso e por quê</h2>
        <p class="text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
          Não escolho tecnologia por hype. Cada ferramenta aqui tem um motivo de estar em produção nos meus sistemas.
        </p>
      </div>

      <!-- Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

        <!-- Backend & APIs -->
        <div class="group rounded-lg bg-slate-900/40 border border-slate-800 hover:border-slate-700 hover:bg-slate-900/60 p-6 transition-all duration-300 hover:-translate-y-0.5">
          <div class="w-10 h-10 rounded-lg bg-slate-950 border border-slate-800 group-hover:border-indigo-500/30 flex items-center justify-center mb-5 transition-all duration-300">
            <i class="fas fa-server text-slate-500 group-hover:text-indigo-400 text-lg transition-colors duration-300"></i>
          </div>
          <h3 class="text-white font-semibold text-lg mb-2">Backend & APIs</h3>
          <p class="text-slate-400 text-xs mb-5 leading-relaxed">Onde a lógica de negócio vive. Go para velocidade e eficiência; Node.js quando o time é menor e a entrega precisa ser rápida; Java onde confiabilidade em longo prazo é inegociável.</p>
          <div class="flex flex-wrap gap-2">
            <span v-for="tech in backendTechs" :key="tech"
              class="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-slate-400 text-[10px] font-mono font-medium">
              {{ tech }}
            </span>
          </div>
        </div>

        <!-- Bancos de Dados -->
        <div class="group rounded-lg bg-slate-900/40 border border-slate-800 hover:border-slate-700 hover:bg-slate-900/60 p-6 transition-all duration-300 hover:-translate-y-0.5">
          <div class="w-10 h-10 rounded-lg bg-slate-950 border border-slate-800 group-hover:border-violet-500/30 flex items-center justify-center mb-5 transition-all duration-300">
            <i class="fas fa-database text-slate-500 group-hover:text-violet-400 text-lg transition-colors duration-300"></i>
          </div>
          <h3 class="text-white font-semibold text-lg mb-2">Bancos de Dados</h3>
          <p class="text-slate-400 text-xs mb-5 leading-relaxed">Cada sistema precisa de um lugar honesto para guardar dados. PostgreSQL e MySQL para relações complexas, MongoDB quando o schema precisa respirar, Redis para respostas que não podem esperar.</p>
          <div class="flex flex-wrap gap-2">
            <span v-for="tech in dbTechs" :key="tech"
              class="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-slate-400 text-[10px] font-mono font-medium">
              {{ tech }}
            </span>
          </div>
        </div>

        <!-- Infra & DevOps -->
        <div class="group rounded-lg bg-slate-900/40 border border-slate-800 hover:border-slate-700 hover:bg-slate-900/60 p-6 transition-all duration-300 hover:-translate-y-0.5">
          <div class="w-10 h-10 rounded-lg bg-slate-950 border border-slate-800 group-hover:border-indigo-500/30 flex items-center justify-center mb-5 transition-all duration-300">
            <i class="fas fa-network-wired text-slate-500 group-hover:text-indigo-400 text-lg transition-colors duration-300"></i>
          </div>
          <h3 class="text-white font-semibold text-lg mb-2">Infraestrutura & DevOps</h3>
          <p class="text-slate-400 text-xs mb-5 leading-relaxed">Aplicarção só existe se rodar. Docker elimina o "funciona na minha máquina", Nginx e Cloudflare protegem a borda, e pipelines CI/CD fazem o deploy virar rotina, não aventura.</p>
          <div class="flex flex-wrap gap-2">
            <span v-for="tech in infraTechs" :key="tech"
              class="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-slate-400 text-[10px] font-mono font-medium">
              {{ tech }}
            </span>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const backendTechs = ['Golang', 'Java', 'Node.js', 'TypeScript', 'Hono', 'Express', 'REST APIs', 'OpenAPI']
const dbTechs = ['MySQL', 'MongoDB', 'Redis', 'Mongoose', 'GORM', 'Upstash Redis']
const infraTechs = ['Docker', 'Docker Compose', 'Linux Server', 'Nginx', 'Cloudflare', 'CI/CD']
</script>
