<template>
  <section id="hero" class="relative flex items-center bg-slate-950 overflow-hidden min-h-[90vh]">
    <!-- Background grid pattern -->
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#1f1f23_1px,transparent_1px),linear-gradient(to_bottom,#1f1f23_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
    <!-- Radial glow -->
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(37,99,235,0.08),transparent)]"></div>
    <div class="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24 w-full">
      <!-- Badge -->
      <div class="flex justify-center mb-8 animate-fade-in-up">
        <span class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-indigo-950/20 border border-indigo-500/30 text-indigo-400 text-xs font-mono font-semibold uppercase tracking-wider backdrop-blur-xs">
          <span class="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
          Backend Engineer & DevOps — Bocaiúva, MG
        </span>
      </div>

      <!-- Title -->
      <h1 class="text-center text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight tracking-tighter mb-6 animate-fade-in-up-1">
        Software que funciona<br>
        <span class="bg-gradient-to-r from-white via-slate-200 to-indigo-400 bg-clip-text text-transparent">
          quando mais importa.
        </span>
      </h1>

      <!-- Description -->
      <p class="text-center text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up-2">
        Uso <span class="text-indigo-400 font-semibold font-mono text-base">Go</span>,
        <span class="text-indigo-400 font-semibold font-mono text-base">Node.js</span> e
        <span class="text-indigo-400 font-semibold font-mono text-base">Java</span> para construir
        sistemas backend que chegam em produção e ficam lá — sem downtime surpresa,
        sem reescritas desnecessárias, sem dor de cabeça às 3h da manhã.
      </p>

      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 animate-fade-in-up-3">
        <a
          href="#Contact"
          class="inline-flex items-center gap-2 px-6 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-600/20 active:translate-y-0"
        >
          <i class="fas fa-envelope text-xs"></i>
          Fale Comigo
        </a>
        <a
          href="/projects"
          class="inline-flex items-center gap-2 px-6 py-3.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-white font-bold rounded-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
        >
          <i class="fas fa-folder-open text-xs"></i>
          Ver o que já construí
        </a>
        <a
          href="/archives/Curriculo-ArctisDev.pdf"
          download
          target="_blank"
          class="inline-flex items-center gap-2 px-6 py-3.5 bg-transparent hover:bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white font-bold rounded-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
        >
          <i class="fas fa-download text-xs"></i>
          Baixar Currículo
        </a>
      </div>

      <!-- Stats -->
      <div class="grid grid-cols-3 gap-4 max-w-lg mx-auto animate-fade-in-up-4">
        <div class="text-center px-4 py-5 rounded-lg bg-slate-900/40 border border-slate-800/60 backdrop-blur-xs">
          <p class="text-3xl font-extrabold text-white mb-1">4+</p>
          <p class="text-[10px] font-mono uppercase tracking-wider text-slate-500">Sistemas em<br>Produção Hoje</p>
        </div>
        <div class="text-center px-4 py-5 rounded-lg bg-slate-900/40 border border-slate-800/60 backdrop-blur-xs">
          <p class="text-3xl font-extrabold text-white mb-1">2.5k+</p>
          <p class="text-[10px] font-mono uppercase tracking-wider text-slate-500">Usuários Reais<br>Atendidos</p>
        </div>
        <div class="text-center px-4 py-5 rounded-lg bg-slate-900/40 border border-slate-800/60 backdrop-blur-xs">
          <p class="text-3xl font-extrabold text-white mb-1">Multi</p>
          <p class="text-[10px] font-mono uppercase tracking-wider text-slate-500">Tenant SaaS<br>em Operação</p>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-600 animate-bounce">
      <i class="fas fa-chevron-down text-xs"></i>
      <i class="fas fa-chevron-down text-xs opacity-50"></i>
    </div>
  </section>
</template>
