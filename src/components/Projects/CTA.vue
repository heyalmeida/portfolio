<template>
  <section class="relative py-24 bg-slate-900 border-t border-slate-800 overflow-hidden">
    <!-- Glow effect background -->
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08),transparent_70%)] pointer-events-none"></div>

    <div class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div class="p-8 md:p-12 rounded-3xl bg-slate-950/50 border border-slate-800/80 backdrop-blur-sm shadow-xl shadow-black/20">
        <!-- Badge -->
        <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-700/40 text-xs font-mono text-indigo-300 mb-6">
          <span class="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
          Aberto a novos projetos
        </span>

        <h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
          Tem algo pra construir?
        </h2>
        
        <p class="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed">
          Me conta o que precisa ser resolvido. Se fizer sentido trabalharmos juntos, a gente descobre isso rápido.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="/#Contact"
            class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium shadow-lg shadow-indigo-600/20 transition-all duration-200"
          >
            <i class="fas fa-envelope"></i>
            Fale Comigo
          </a>
          <a
            href="https://wa.me/5538999548499"
            target="_blank"
            rel="noopener noreferrer"
            class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 hover:border-slate-700 font-medium transition-all duration-200"
          >
            <i class="fab fa-whatsapp text-emerald-500"></i>
            Chamar no WhatsApp
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Componente de Call to Action para projetos
</script>
