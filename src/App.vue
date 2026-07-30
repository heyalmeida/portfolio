<template>
  <Preloader />
  <router-view />
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head'
import Preloader from '@/components/PreloaderItem.vue'

useHead({
  title: 'ArctisDev - Engenharia de Backend & DevOps',
  meta: [
    { name: 'description', content: 'ArctisDev - Desenvolvedor Backend especializado em Golang, Java, Node.js/TypeScript, microsserviços, SaaS multi-tenant, Docker e infraestrutura Linux.' },
    { name: 'keywords', content: 'desenvolvedor backend, Golang, Java, Node.js, TypeScript, microsserviços, Docker, Linux, SaaS, APIs RESTful, DevOps, MongoDB, Redis, ArctisDev' },
    { name: 'author', content: 'ArctisDev' },
    { name: 'robots', content: 'index, follow' },
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: '/images/logo.png' },
    { rel: 'shortcut icon', type: 'image/png', href: '/images/logo.png' },
    { rel: 'apple-touch-icon', href: '/images/logo.png' },
    { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css' },
  ],
  script: [
    { children: `window.va=window.va||function(){(window.vaq=window.vaq||[]).push(arguments)};window.si=window.si||function(){(window.siq=window.siq||[]).push(arguments)};` },
    { src: '/_vercel/insights/script.js', defer: true },
    { src: '/_vercel/speed-insights/script.js', defer: true },
  ],
})
</script>
