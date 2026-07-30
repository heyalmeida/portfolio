<template>
  <footer class="bg-slate-950 border-t border-slate-800">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">

        <!-- Brand -->
        <div>
          <a href="/" class="flex items-center gap-3 mb-4">
            <img src="/images/logo.png" width="32" height="32" alt="Logo" class="rounded-lg" />
            <span class="text-white font-bold text-lg">ArctisDev</span>
          </a>
          <p class="text-slate-500 text-sm leading-relaxed">
            Backend Engineer baseado em Bocaiuva, MG. Escrevo código que vai pra produção e fica lá — sem surpresas.
          </p>
        </div>

        <!-- Links -->
        <div>
          <h4 class="text-slate-300 font-semibold text-sm mb-4">Navegação</h4>
          <ul class="space-y-2.5">
            <li v-for="link in links" :key="link.href">
              <a :href="link.href" class="text-slate-500 hover:text-indigo-400 text-sm transition-colors duration-200">
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Social -->
        <div>
          <h4 class="text-slate-300 font-semibold text-sm mb-4">Redes Sociais</h4>
          <div class="flex gap-3">
            <a href="https://www.linkedin.com/in/hey-almeida" target="_blank" rel="noreferrer"
              class="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 hover:border-indigo-500/50 hover:bg-indigo-600/10 flex items-center justify-center text-slate-400 hover:text-indigo-400 transition-all duration-200">
              <i class="fab fa-linkedin text-sm"></i>
            </a>
            <a href="https://github.com/heyalmeida/" target="_blank" rel="noreferrer"
              class="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 hover:border-slate-500 hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200">
              <i class="fab fa-github text-sm"></i>
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom -->
      <div class="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p class="text-slate-600 text-sm">© 2025 ArctisDev. Todos os direitos reservados.</p>
        <a href="#hero" class="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 hover:border-indigo-500/50 flex items-center justify-center text-slate-500 hover:text-indigo-400 transition-all duration-200">
          <i class="fas fa-chevron-up text-xs"></i>
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const links = [
  { href: '/', label: 'Início' },
  { href: '/projects', label: 'Projetos' },
  { href: '/about', label: 'Sobre Mim' },
  { href: '/#Contact', label: 'Contato' },
]
</script>
