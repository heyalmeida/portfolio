<template>
  <div id="Contact"></div>
  <section class="bg-slate-900 py-24">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

        <!-- Info -->
        <div>
          <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-700/50 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-6">
            <i class="fas fa-envelope text-xs"></i> Contato
          </span>
          <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">Tem um projeto? Me conta.</h2>
          <p class="text-slate-400 text-base leading-relaxed mb-8">
            Se você tem um sistema pra construir, uma infra pra estabilizar ou só quer trocar uma ideia técnica — é por aqui.
            Respondo rápido.
          </p>

          <div class="space-y-4 mb-8">
            <a href="mailto:mc33pedrobr@gmail.com"
              class="flex items-center gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-200 group">
              <div class="w-10 h-10 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center shrink-0">
                <i class="fas fa-envelope text-indigo-400"></i>
              </div>
              <div>
                <p class="text-slate-500 text-xs mb-0.5">Email</p>
                <p class="text-slate-200 text-sm font-medium group-hover:text-indigo-300 transition-colors">mc33pedrobr@gmail.com</p>
              </div>
            </a>
            <a href="https://maps.app.goo.gl/ePP6GUDhFZsE1sZr6" target="_blank"
              class="flex items-center gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-200 group">
              <div class="w-10 h-10 rounded-lg bg-violet-600/20 border border-violet-500/30 flex items-center justify-center shrink-0">
                <i class="fas fa-map-marker-alt text-violet-400"></i>
              </div>
              <div>
                <p class="text-slate-500 text-xs mb-0.5">Localização</p>
                <p class="text-slate-200 text-sm font-medium group-hover:text-indigo-300 transition-colors">Bocaiuva, MG, Brasil</p>
              </div>
            </a>
          </div>

          <div class="flex gap-3">
            <a href="https://www.linkedin.com/in/hey-almeida" target="_blank"
              class="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600/20 border border-blue-500/30 hover:bg-blue-600/30 text-blue-400 text-sm font-medium transition-all duration-200">
              <i class="fab fa-linkedin"></i> LinkedIn
            </a>
            <a href="https://github.com/heyalmeida/" target="_blank"
              class="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-700/50 border border-slate-600/50 hover:bg-slate-700 text-slate-300 text-sm font-medium transition-all duration-200">
              <i class="fab fa-github"></i> GitHub
            </a>
          </div>
        </div>

        <!-- Form -->
        <div class="rounded-2xl bg-slate-800/50 border border-slate-700/50 p-6 sm:p-8">
          <h3 class="text-white font-semibold text-xl mb-6">Manda a mensagem</h3>
          <form action="https://formspree.io/f/myzkvnbb" target="_blank" method="POST" class="space-y-5">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-slate-400 text-xs font-medium mb-1.5" for="name">Nome</label>
                <input type="text" id="name" name="Nome" required placeholder="Seu nome completo"
                  class="w-full px-4 py-2.5 rounded-xl bg-slate-900/60 border border-slate-700 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 transition-all duration-200" />
              </div>
              <div>
                <label class="block text-slate-400 text-xs font-medium mb-1.5" for="email">Email</label>
                <input type="email" id="email" name="Email" required placeholder="seu@email.com"
                  class="w-full px-4 py-2.5 rounded-xl bg-slate-900/60 border border-slate-700 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 transition-all duration-200" />
              </div>
            </div>

            <div>
              <p class="text-slate-400 text-xs font-medium mb-2">Tipo de contato</p>
              <div class="grid grid-cols-3 gap-2">
                <label v-for="opt in ['Projeto Novo', 'Orçamento', 'Só uma dúvida']" :key="opt"
                  class="relative flex items-center justify-center text-center px-2 py-2.5 rounded-xl border cursor-pointer transition-all duration-200 text-xs font-medium has-[:checked]:bg-indigo-600 has-[:checked]:border-indigo-500 has-[:checked]:text-white border-slate-700 text-slate-400 hover:border-slate-500 hover:text-slate-300">
                  <input type="radio" name="Tipo de Contato" :value="opt" class="sr-only" />
                  {{ opt }}
                </label>
              </div>
            </div>

            <div>
              <label class="block text-slate-400 text-xs font-medium mb-1.5" for="message">Mensagem</label>
              <textarea id="message" name="Mensagem" rows="5" required placeholder="Me conta o que você precisa construir ou o problema que quer resolver..."
                class="w-full px-4 py-2.5 rounded-xl bg-slate-900/60 border border-slate-700 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 transition-all duration-200 resize-none"></textarea>
            </div>

            <button type="submit"
              class="w-full flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/25">
              <i class="fas fa-paper-plane"></i>
              Mandar Mensagem
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
