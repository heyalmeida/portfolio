<template>
  <section class="py-24 bg-slate-950 border-t border-slate-900">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <!-- Header -->
      <div class="mb-16">
        <span
          class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-700/50 text-xs font-mono text-indigo-300 mb-4"
        >
          <i class="fas fa-cubes text-[10px]"></i>
          Stack Tecnológica
        </span>
        <h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Stack de Produção
        </h2>
        <p class="text-slate-400 mt-4 max-w-2xl mx-auto">
          Não é uma lista de cursos concluídos. São as ferramentas que uso hoje nos sistemas que estão no ar.
        </p>
      </div>

      <!-- Grid -->
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        <!-- Java -->
        <div
          class="bg-slate-900/40 hover:bg-slate-900 border border-slate-800/80 hover:border-slate-700/80 p-6 rounded-2xl flex flex-col items-center justify-center transition-all duration-300 group hover:-translate-y-1 shadow-md shadow-black/10"
        >
          <div
            class="w-14 h-14 flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110"
          >
            <img class="w-12 h-12 object-contain" src="/images/Java.svg" alt="Java" />
          </div>
          <p class="font-semibold text-slate-200 font-mono text-sm tracking-wide">Java</p>
        </div>

        <!-- Golang -->
        <div
          class="bg-slate-900/40 hover:bg-slate-900 border border-slate-800/80 hover:border-slate-700/80 p-6 rounded-2xl flex flex-col items-center justify-center transition-all duration-300 group hover:-translate-y-1 shadow-md shadow-black/10"
        >
          <div
            class="w-14 h-14 flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110"
          >
            <i class="fab fa-golang text-5xl text-cyan-400"></i>
          </div>
          <p class="font-semibold text-slate-200 font-mono text-sm tracking-wide">Golang</p>
        </div>

        <!-- Node.js -->
        <div
          class="bg-slate-900/40 hover:bg-slate-900 border border-slate-800/80 hover:border-slate-700/80 p-6 rounded-2xl flex flex-col items-center justify-center transition-all duration-300 group hover:-translate-y-1 shadow-md shadow-black/10"
        >
          <div
            class="w-14 h-14 flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110"
          >
            <i class="fab fa-node-js text-5xl text-green-400"></i>
          </div>
          <p class="font-semibold text-slate-200 font-mono text-sm tracking-wide">Node.js</p>
        </div>

        <!-- TypeScript -->
        <div
          class="bg-slate-900/40 hover:bg-slate-900 border border-slate-800/80 hover:border-slate-700/80 p-6 rounded-2xl flex flex-col items-center justify-center transition-all duration-300 group hover:-translate-y-1 shadow-md shadow-black/10"
        >
          <div
            class="w-14 h-14 flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110"
          >
            <i class="fa-solid fa-code text-4xl text-blue-400"></i>
          </div>
          <p class="font-semibold text-slate-200 font-mono text-sm tracking-wide">TypeScript</p>
        </div>

        <!-- Docker (DevOps core) -->
        <div
          class="bg-slate-900/40 hover:bg-slate-900 border border-slate-800/80 hover:border-slate-700/80 p-6 rounded-2xl flex flex-col items-center justify-center transition-all duration-300 group hover:-translate-y-1 shadow-md shadow-black/10"
        >
          <div
            class="w-14 h-14 flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110"
          >
            <i class="fab fa-docker text-5xl text-sky-400"></i>
          </div>
          <p class="font-semibold text-slate-200 font-mono text-sm tracking-wide">Docker</p>
        </div>

        <!-- Next.js -->
        <div
          class="bg-slate-900/40 hover:bg-slate-900 border border-slate-800/80 hover:border-slate-700/80 p-6 rounded-2xl flex flex-col items-center justify-center transition-all duration-300 group hover:-translate-y-1 shadow-md shadow-black/10"
        >
          <div
            class="w-14 h-14 flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110"
          >
            <img class="w-12 h-12 object-contain invert" src="/images/NextJS.svg" alt="Next.js" />
          </div>
          <p class="font-semibold text-slate-200 font-mono text-sm tracking-wide">Next.js</p>
        </div>

        <!-- VueJS -->
        <div
          class="bg-slate-900/40 hover:bg-slate-900 border border-slate-800/80 hover:border-slate-700/80 p-6 rounded-2xl flex flex-col items-center justify-center transition-all duration-300 group hover:-translate-y-1 shadow-md shadow-black/10"
        >
          <div
            class="w-14 h-14 flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110"
          >
            <i class="fab fa-vuejs text-5xl text-emerald-400"></i>
          </div>
          <p class="font-semibold text-slate-200 font-mono text-sm tracking-wide">Vue.js</p>
        </div>

        <!-- ReactJS -->
        <div
          class="bg-slate-900/40 hover:bg-slate-900 border border-slate-800/80 hover:border-slate-700/80 p-6 rounded-2xl flex flex-col items-center justify-center transition-all duration-300 group hover:-translate-y-1 shadow-md shadow-black/10"
        >
          <div
            class="w-14 h-14 flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110"
          >
            <i class="fab fa-react text-5xl text-sky-400"></i>
          </div>
          <p class="font-semibold text-slate-200 font-mono text-sm tracking-wide">ReactJS</p>
        </div>

        <!-- HTML5 / CSS3 -->
        <div
          class="bg-slate-900/40 hover:bg-slate-900 border border-slate-800/80 hover:border-slate-700/80 p-6 rounded-2xl flex flex-col items-center justify-center transition-all duration-300 group hover:-translate-y-1 shadow-md shadow-black/10"
        >
          <div
            class="w-14 h-14 flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110"
          >
            <i class="fab fa-html5 text-5xl text-orange-400"></i>
          </div>
          <p class="font-semibold text-slate-200 font-mono text-sm tracking-wide">HTML5 & CSS3</p>
        </div>

        <!-- Figma -->
        <div
          class="bg-slate-900/40 hover:bg-slate-900 border border-slate-800/80 hover:border-slate-700/80 p-6 rounded-2xl flex flex-col items-center justify-center transition-all duration-300 group hover:-translate-y-1 shadow-md shadow-black/10"
        >
          <div
            class="w-14 h-14 flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110"
          >
            <i class="fab fa-figma text-5xl text-pink-400"></i>
          </div>
          <p class="font-semibold text-slate-200 font-mono text-sm tracking-wide">Figma</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Componente que lista a Stack de tecnologias utilizadas
</script>
