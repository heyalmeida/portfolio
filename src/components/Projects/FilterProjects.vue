<template>
  <section class="py-8 bg-slate-950">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex flex-wrap justify-center gap-3 sm:gap-4 mb-4">
        <!-- Todos -->
        <button
          @click="$emit('update:activeCategory', 'all')"
          class="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium border transition-all duration-200"
          :class="activeCategory === 'all'
            ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-600/25'
            : 'bg-slate-900/60 border-slate-800/80 text-slate-400 hover:border-slate-700 hover:text-slate-200'"
        >
          <i class="fas fa-th-large"></i>
          Todos
        </button>

        <!-- Backend -->
        <button
          @click="$emit('update:activeCategory', 'backend')"
          class="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium border transition-all duration-200"
          :class="activeCategory === 'backend'
            ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-600/25'
            : 'bg-slate-900/60 border-slate-800/80 text-slate-400 hover:border-slate-700 hover:text-slate-200'"
        >
          <i class="fas fa-server"></i>
          Backend & APIs
        </button>

        <!-- DevOps -->
        <button
          @click="$emit('update:activeCategory', 'devops')"
          class="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium border transition-all duration-200"
          :class="activeCategory === 'devops'
            ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-600/25'
            : 'bg-slate-900/60 border-slate-800/80 text-slate-400 hover:border-slate-700 hover:text-slate-200'"
        >
          <i class="fas fa-network-wired"></i>
          DevOps & Infra
        </button>

        <!-- SaaS & IA -->
        <button
          @click="$emit('update:activeCategory', 'saas')"
          class="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium border transition-all duration-200"
          :class="activeCategory === 'saas'
            ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-600/25'
            : 'bg-slate-900/60 border-slate-800/80 text-slate-400 hover:border-slate-700 hover:text-slate-200'"
        >
          <i class="fas fa-cloud"></i>
          SaaS & IA
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  activeCategory: string
}>()

defineEmits<{
  (e: 'update:activeCategory', category: string): void
}>()
</script>
