<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="isScrolled
      ? 'bg-slate-900/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-slate-800'
      : 'bg-transparent'"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">

        <!-- Logo -->
        <a href="/" class="flex items-center gap-3 group" aria-label="ArctisDev - Início">
          <img src="/images/logo.png" width="36" height="36" alt="ArctisDev Logo" class="rounded-lg" />
          <span class="text-white font-bold text-lg tracking-tight">ArctisDev</span>
        </a>

        <!-- Desktop nav -->
        <nav class="hidden md:flex items-center gap-8">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="text-sm font-medium transition-colors duration-200 relative group"
            :class="isActiveRoute(link.href)
              ? 'text-indigo-400'
              : 'text-slate-400 hover:text-white'"
          >
            {{ link.label }}
            <span
              class="absolute -bottom-0.5 left-0 h-px bg-indigo-400 transition-all duration-200"
              :class="isActiveRoute(link.href) ? 'w-full' : 'w-0 group-hover:w-full'"
            ></span>
          </a>
          <a
            href="https://github.com/heyalmeida/"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors duration-200"
          >
            <i class="fab fa-github"></i>
            <span>GitHub</span>
          </a>
        </nav>

        <!-- Mobile button -->
        <button
          id="menu-button"
          class="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-lg bg-slate-800 border border-slate-700"
          @click="toggleMobileMenu"
          aria-label="Menu"
        >
          <span
            class="block w-5 h-0.5 bg-slate-300 transition-all duration-200"
            :class="isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''"
          ></span>
          <span
            class="block w-5 h-0.5 bg-slate-300 transition-all duration-200"
            :class="isMobileMenuOpen ? 'opacity-0' : ''"
          ></span>
          <span
            class="block w-5 h-0.5 bg-slate-300 transition-all duration-200"
            :class="isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''"
          ></span>
        </button>
      </div>

      <!-- Mobile menu -->
      <div
        v-show="isMobileMenuOpen"
        class="md:hidden border-t border-slate-800 bg-slate-900/98 py-4"
      >
        <nav class="flex flex-col gap-1">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="text-sm font-medium px-3 py-2.5 rounded-lg transition-colors duration-200"
            :class="isActiveRoute(link.href)
              ? 'text-indigo-400 bg-indigo-950/50'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'"
            @click="closeMobileMenu"
          >
            {{ link.label }}
          </a>
          <a
            href="https://github.com/heyalmeida/"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-2 text-sm font-semibold px-3 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white mt-2 transition-colors duration-200"
            @click="closeMobileMenu"
          >
            <i class="fab fa-github"></i>
            GitHub
          </a>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const navLinks = [
  { href: '/', label: 'Início' },
  { href: '/projects', label: 'Projetos' },
  { href: '/about', label: 'Sobre Mim' },
]

const handleScroll = () => { isScrolled.value = window.scrollY > 20 }
const toggleMobileMenu = () => { isMobileMenuOpen.value = !isMobileMenuOpen.value }
const closeMobileMenu = () => { isMobileMenuOpen.value = false }
const isActiveRoute = (href: string) => href === '/' ? route.path === '/' : route.path.startsWith(href)

onMounted(() => { window.addEventListener('scroll', handleScroll); handleScroll() })
onUnmounted(() => { window.removeEventListener('scroll', handleScroll) })
</script>
