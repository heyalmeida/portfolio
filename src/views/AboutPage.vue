<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'Sobre Mim - ArctisDev | Engenheiro Backend',
  meta: [
    { charset: 'UTF-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
    {
      name: 'description',
      content:
        'Pedro Miguel de Almeida Silva (ArctisDev) - Desenvolvedor Backend especializado em Golang, Java, Node.js/TypeScript, microsserviços, SaaS multi-tenant e infraestrutura Linux.',
    },
    {
      name: 'keywords',
      content:
        'ArctisDev, sobre mim, desenvolvedor backend, Golang, Java, Node.js, TypeScript, microsserviços, Docker, Linux, Bocaiuva MG, engenharia de sistemas, SaaS',
    },
    { name: 'author', content: 'Pedro Miguel de Almeida Silva (ArctisDev)' },
    { name: 'robots', content: 'index, follow' },
    { name: 'language', content: 'Portuguese' },

    // Open Graph
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://studio.arctisdev.com/about' },
    { property: 'og:title', content: 'Sobre Mim - ArctisDev | Engenheiro Backend' },
    {
      property: 'og:description',
      content:
        'Pedro Miguel (ArctisDev) - Desenvolvedor Backend especializado em Golang, Java, Node.js/TypeScript, microsserviços, SaaS multi-tenant e infraestrutura Linux.',
    },
    { property: 'og:image', content: 'https://studio.arctisdev.com/images/icon.png' },
    { property: 'og:site_name', content: 'ArctisDev' },
    { property: 'og:locale', content: 'pt_BR' },

    // Twitter
    { property: 'twitter:card', content: 'summary_large_image' },
    { property: 'twitter:url', content: 'https://www.arctisdev.com/about' },
    {
      property: 'twitter:title',
      content: 'Sobre Mim - ArctisDev',
    },
    {
      property: 'twitter:description',
      content:
        'ArctisDev - Desenvolvedor Backend especializado em Golang, Java, Node.js/TypeScript, microsserviços e infraestrutura Linux.',
    },
    { property: 'twitter:image', content: 'https://studio.arctisdev.com/images/icon.png' },
  ],
  link: [
    { rel: 'canonical', href: 'https://studio.arctisdev.com/about' },
    { rel: 'icon', type: 'image/png', href: '/images/favicon.ico' },
    { rel: 'shortcut icon', href: '/images/favicon.ico', type: 'image/x-icon' },
    { rel: 'apple-touch-icon', href: '/images/favicon.ico' },

    // Preconnect
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { rel: 'preconnect', href: 'https://cdnjs.cloudflare.com' },

    // Fonts e CSS externos
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&family=Inter:wght@400;500;600&display=swap',
    },
    {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css',
    },
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Sobre Mim - ArctisDev | Engenheiro Backend',
        description:
          'Pedro Miguel (ArctisDev) - Desenvolvedor Backend especializado em Golang, Java, Node.js/TypeScript, microsserviços e infraestrutura Linux.',
        url: 'https://studio.arctisdev.com/about',
        mainEntity: {
          '@type': 'Person',
          name: 'Pedro Miguel de Almeida Silva',
          alternateName: 'ArctisDev',
          jobTitle: 'Desenvolvedor Backend',
          description:
            'Desenvolvedor Backend especializado em Golang, Java, Node.js/TypeScript, microsserviços, SaaS multi-tenant e infraestrutura Linux.',
          knowsAbout: [
            'Backend Development',
            'Golang',
            'Java',
            'Node.js',
            'TypeScript',
            'Microsserviços',
            'Docker',
            'Linux',
            'MongoDB',
            'Redis',
            'Nginx',
            'DevOps',
          ],
          sameAs: [
            'https://www.linkedin.com/in/hey-almeida',
            'https://github.com/heyalmeida/',
            'https://www.instagram.com/hey._almeida/',
          ],
        },
      }),
    },
  ],
})

import Navbar from '@/components/NavbarItem.vue'
import HeroInitial from '@/components/About/HeroItem.vue'
import Journey from '@/components/About/JourneyItem.vue'
import Footer from '@/components/FooterItem.vue'
</script>
<template>
  <Navbar />
  <main class="bg-slate-950 text-slate-100 min-h-screen">
    <HeroInitial />
    <Journey />
    <Footer />
  </main>
</template>
