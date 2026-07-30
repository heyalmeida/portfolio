<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'Início - ArctisDev | Desenvolvedor Backend',
  meta: [
    {
      name: 'description',
      content:
        'ArctisDev - Desenvolvedor Backend especializado em Golang, Java, Node.js/TypeScript, microsserviços, SaaS multi-tenant, Docker e infraestrutura Linux. Portfólio de sistemas robustos e APIs escaláveis.',
    },
    {
      name: 'keywords',
      content:
        'ArctisDev, desenvolvedor backend, Golang, Java, Node.js, TypeScript, microsserviços, Docker, Linux, SaaS, APIs RESTful, MongoDB, Redis, DevOps, Nginx, portfólio backend',
    },
    { name: 'author', content: 'Pedro Miguel de Almeida Silva (ArctisDev)' },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://studio.arctisdev.com/' },
    {
      property: 'og:title',
      content: 'ArctisDev | Desenvolvedor Backend',
    },
    {
      property: 'og:description',
      content:
        'ArctisDev - Desenvolvedor Backend especializado em Golang, Java, Node.js/TypeScript, microsserviços, SaaS multi-tenant, Docker e infraestrutura Linux.',
    },
    { property: 'og:image', content: 'https://studio.arctisdev.com/images/logo.png' },
    { property: 'og:site_name', content: 'ArctisDev' },
    { property: 'og:locale', content: 'pt_BR' },
    { property: 'twitter:card', content: 'summary_large_image' },
    {
      property: 'twitter:title',
      content: 'ArctisDev | Desenvolvedor Backend',
    },
    {
      property: 'twitter:description',
      content:
        'ArctisDev - Desenvolvedor Backend especializado em Golang, Java, Node.js/TypeScript, microsserviços e infraestrutura Linux.',
    },
    { property: 'twitter:image', content: 'https://studio.arctisdev.com/images/logo.png' },
  ],
  link: [
    { rel: 'canonical', href: 'https://studio.arctisdev.com/' },
    { rel: 'icon', type: 'image/png', href: '/images/logo.png' },
    { rel: 'shortcut icon', type: 'image/png', href: '/images/logo.png' },
    { rel: 'apple-touch-icon', href: '/images/logo.png' },
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
        '@type': 'Person',
        name: 'Pedro Miguel de Almeida Silva',
        alternateName: 'ArctisDev',
        url: 'https://studio.arctisdev.com/',
        image: 'https://studio.arctisdev.com/images/logo.png',
        description:
          'Desenvolvedor Backend especializado em Golang, Java, Node.js/TypeScript, microsserviços, SaaS multi-tenant e infraestrutura Linux.',
        jobTitle: 'Desenvolvedor Backend',
        worksFor: { '@type': 'Organization', name: 'ArctisDev' },
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
          'SaaS',
          'APIs RESTful',
        ],
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Bocaiuva',
          addressRegion: 'MG',
          addressCountry: 'BR',
        },
        sameAs: [
          'https://www.linkedin.com/in/hey-almeida',
          'https://github.com/heyalmeida/',
        ],
      }),
    },
  ],
})

import Navbar from '@/components/NavbarItem.vue'
import HeroInitial from '@/components/Home/HeroItem.vue'
import MySkills from '@/components/Home/MySkillsItem.vue'
import Projects from '@/components/Home/ProjectsItem.vue'
import ContactForm from '@/components/Home/ContactFormItem.vue'
import Footer from '@/components/FooterItem.vue'
</script><template>
  <Navbar />
  <main class="bg-slate-950 text-slate-100 min-h-screen">
    <HeroInitial />
    <MySkills />
    <Projects />
    <ContactForm />
    <Footer />
  </main>
</template>
