<script setup lang="ts">
import { ref } from 'vue'
import { useHead } from '@vueuse/head'

useHead({
  title: 'Projetos - ArctisDev | Sistemas Backend em Produção',
  meta: [
    { charset: 'UTF-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },

    // SEO
    {
      name: 'description',
      content:
        'ArctisDev - Portfólio de projetos backend: Arctis Deploy (SaaS Golang), Lumine AI Chatbot (Node.js/TS), Portal Institucional e sistema de controle de acesso com microsserviços e Docker.',
    },
    {
      name: 'keywords',
      content:
        'ArctisDev, projetos backend, Golang, Java, Node.js, TypeScript, microsserviços, SaaS, Docker, MongoDB, Redis, Nginx, APIs RESTful, DevOps, Arctis Deploy, Lumine',
    },
    { name: 'author', content: 'Pedro Miguel de Almeida Silva (ArctisDev)' },
    { name: 'robots', content: 'index, follow' },
    { name: 'language', content: 'Portuguese' },

    // Open Graph / Facebook
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://studio.arctisdev.com/projects' },
    {
      property: 'og:title',
      content: 'Projetos - ArctisDev | Sistemas Backend em Produção',
    },
    {
      property: 'og:description',
      content:
        'Portfólio de projetos backend em produção: Arctis Deploy (SaaS Golang), Lumine AI Chatbot (Node.js/TS), Portal Institucional e mais.',
    },
    {
      property: 'og:image',
      content: 'https://www.arctisdev.com/images/icon.png',
    },
    { property: 'og:site_name', content: 'ArctisDev' },
    { property: 'og:locale', content: 'pt_BR' },

    // Twitter
    { property: 'twitter:card', content: 'summary_large_image' },
    { property: 'twitter:url', content: 'https://www.arctisdev.com/projects' },
    {
      property: 'twitter:title',
      content: 'Projetos - ArctisDev',
    },
    {
      property: 'twitter:description',
      content:
        'ArctisDev - Portfólio de projetos backend desenvolvidos com alta performance, focando em Golang, Java, Node.js/TypeScript e DevOps.',
    },
    {
      property: 'twitter:image',
      content: 'https://www.arctisdev.com/images/icon.png',
    },
  ],

  link: [
    // Canonical
    { rel: 'canonical', href: 'https://studio.arctisdev.com/projects' },

    // Favicon
    { rel: 'icon', type: 'image/png', href: '/images/icon.png' },
    { rel: 'shortcut icon', type: 'image/png', href: '/images/icon.png' },
    { rel: 'apple-touch-icon', href: '/images/icon.png' },

    // Fonts e Icons
    {
      href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&family=Inter:wght@400;500;600&display=swap',
      rel: 'stylesheet',
    },
    {
      href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css',
      rel: 'stylesheet',
    },
  ],

  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Projetos - ArctisDev | Sistemas Backend em Produção',
        description:
          'Portfólio de projetos backend em produção: Arctis Deploy (SaaS Golang), Lumine AI Chatbot, Portal Institucional Gastão Valle.',
        url: 'https://studio.arctisdev.com/projects',
        mainEntity: {
          '@type': 'ItemList',
          name: 'Projetos Backend em Produção',
          description:
            'Coleção de sistemas backend desenvolvidos por Pedro Miguel de Almeida Silva (ArctisDev)',
          itemListElement: [
            {
              '@type': 'CreativeWork',
              name: 'Arctis Deploy',
              description:
                'Plataforma SaaS de deploy automático com Golang: microsserviços, multi-tenant, WebSockets, Nginx dinâmico e Stripe.',
              url: 'https://dashboard.arctisdev.com/',
              creator: { '@type': 'Person', name: 'Pedro Miguel de Almeida Silva' },
            },
            {
              '@type': 'CreativeWork',
              name: 'Lumine AI Chatbot',
              description:
                'Chatbot de IA multi-provedor com Hono (Node.js/TypeScript), MongoDB, Upstash Redis e Vercel AI SDK.',
              creator: { '@type': 'Person', name: 'Pedro Miguel de Almeida Silva' },
            },
            {
              '@type': 'CreativeWork',
              name: 'Portal Institucional - E. E. Professor Gastão Valle',
              description:
                'Portal escolar com API RESTful segura: JWT, bcrypt, rate-limiting, headers HTTP robustos e CI/CD com Docker.',
              url: 'https://gastaovalle.com/',
              creator: { '@type': 'Person', name: 'Pedro Miguel de Almeida Silva' },
            },
          ],
        },
      }),
    },
  ],
})

import Navbar from '@/components/NavbarItem.vue'
import HeroInitial from '@/components/Projects/HeroItem.vue'
import FilterProjects from '@/components/Projects/FilterProjects.vue'
import ProjectsGrid from '@/components/Projects/ProjectsGrid.vue'
import UsedStacks from '@/components/Projects/UsedStacks.vue'
import CTA from '@/components/Projects/CTA.vue'
import Footer from '@/components/FooterItem.vue'

// Reactive state for filtering
const activeCategory = ref('all')
</script>
<template>
  <Navbar />
  <main class="bg-slate-950 min-h-screen text-slate-100 overflow-x-hidden">
    <HeroInitial />
    
    <FilterProjects v-model:active-category="activeCategory" />
    
    <ProjectsGrid :active-category="activeCategory" />
    
    <UsedStacks />
    <CTA />
    <Footer />
  </main>
</template>
