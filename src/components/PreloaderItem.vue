<template>
  <div
    v-if="isVisible"
    class="fixed inset-0 bg-slate-950 flex items-center justify-center z-[9999] transition-all duration-500 ease-out"
    :class="{ 'opacity-0 scale-95 pointer-events-none': isFading }"
  >
    <!-- Simple premium glowing pulse/spinner -->
    <div class="relative w-12 h-12 flex items-center justify-center">
      <div class="absolute inset-0 rounded-full border-2 border-indigo-500/20"></div>
      <div class="absolute inset-0 rounded-full border-2 border-t-indigo-500 animate-spin"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isVisible = ref(true)
const isFading = ref(false)

onMounted(() => {
  // Ultra fast and smooth initial load (500ms is enough to load pages)
  setTimeout(() => {
    isFading.value = true
    setTimeout(() => {
      isVisible.value = false
    }, 500)
  }, 500)
})
</script>
