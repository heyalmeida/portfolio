// SEO e Analytics Configuration
;(function () {
  'use strict'

  // Google Analytics (substitua GA_MEASUREMENT_ID pelo seu ID real)
  // window.dataLayer = window.dataLayer || [];
  // function gtag(){dataLayer.push(arguments);}
  // gtag('js', new Date());
  // gtag('config', 'GA_MEASUREMENT_ID');

  // Meta tag dinâmica para performance
  function updateMetaTags() {
    // Atualizar meta description baseada na página atual
    const currentPage = window.location.pathname
    let description = ''

    switch (currentPage) {
      case '/':
        description =
          'Desenvolvedor web especializado em criação de sites modernos, aplicações web e soluções digitais. Experiência em HTML, CSS, JavaScript, Node.js e design responsivo.'
        break
      case '/page/projects':
        description =
          'Explore meus projetos de desenvolvimento web, incluindo sites institucionais, aplicações full-stack e templates modernos.'
        break
      case '/page/about-me':
        description =
          'Conheça minha jornada como desenvolvedor web, desde os primeiros passos na programação até projetos reais.'
        break
      case '/page/solutions':
        description =
          'Ofereço serviços completos de desenvolvimento web, design UI/UX, sistemas completos e consultoria digital.'
        break
      default:
        description = 'ArctisDev - Desenvolvimento Web e Soluções Digitais'
    }

    // Atualizar meta description se existir
    let metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute('content', description)
    }
  }

  // Lazy loading para imagens
  function initLazyLoading() {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target
            img.src = img.dataset.src
            img.classList.remove('lazy')
            imageObserver.unobserve(img)
          }
        })
      })

      document.querySelectorAll('img[data-src]').forEach((img) => {
        imageObserver.observe(img)
      })
    }
  }

  // Preload de recursos críticos
  function preloadCriticalResources() {
    const criticalResources = [
      '/src/css/brand-identity.css',
      '/src/css/index.css',
      '/src/images/logo.png',
    ]

    criticalResources.forEach((resource) => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.href = resource
      link.as = resource.endsWith('.css') ? 'style' : 'image'
      document.head.appendChild(link)
    })
  }

  // Otimização de performance
  function optimizePerformance() {
    // Defer non-critical CSS
    const nonCriticalCSS = ['/src/css/animations.css', '/src/css/fade-in.css']

    nonCriticalCSS.forEach((css) => {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = css
      link.media = 'print'
      link.onload = function () {
        this.media = 'all'
      }
      document.head.appendChild(link)
    })
  }

  // Schema.org markup dinâmico
  function addDynamicSchema() {
    const currentPage = window.location.pathname
    let schema = {}

    switch (currentPage) {
      case '/':
        schema = {
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'ArctisDev',
          url: 'https://arctisdev.vercel.app',
          jobTitle: 'Desenvolvedor Web',
          description:
            'Desenvolvedor web especializado em criação de sites modernos e soluções digitais',
        }
        break
      case '/page/projects':
        schema = {
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'Projetos de Desenvolvimento Web',
          description: 'Portfólio de projetos desenvolvidos por ArctisDev',
        }
        break
      case '/page/solutions':
        schema = {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Serviços de Desenvolvimento Web',
          provider: {
            '@type': 'Person',
            name: 'ArctisDev',
          },
        }
        break
    }

    if (Object.keys(schema).length > 0) {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.textContent = JSON.stringify(schema)
      document.head.appendChild(script)
    }
  }

  // Breadcrumb navigation para SEO
  function addBreadcrumbs() {
    const currentPage = window.location.pathname
    if (currentPage !== '/') {
      const breadcrumbs = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Início',
            item: 'https://arctisdev.vercel.app',
          },
        ],
      }

      let pageName = ''
      let pageUrl = ''

      switch (currentPage) {
        case '/page/projects':
          pageName = 'Projetos'
          pageUrl = 'https://arctisdev.vercel.app/page/projects'
          break
        case '/page/about-me':
          pageName = 'Sobre Mim'
          pageUrl = 'https://arctisdev.vercel.app/page/about-me'
          break
        case '/page/solutions':
          pageName = 'Soluções'
          pageUrl = 'https://arctisdev.vercel.app/page/solutions'
          break
      }

      if (pageName) {
        breadcrumbs.itemListElement.push({
          '@type': 'ListItem',
          position: 2,
          name: pageName,
          item: pageUrl,
        })

        const script = document.createElement('script')
        script.type = 'application/ld+json'
        script.textContent = JSON.stringify(breadcrumbs)
        document.head.appendChild(script)
      }
    }
  }

  // Inicialização quando o DOM estiver pronto
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      updateMetaTags()
      initLazyLoading()
      preloadCriticalResources()
      optimizePerformance()
      addDynamicSchema()
      addBreadcrumbs()
    })
  } else {
    updateMetaTags()
    initLazyLoading()
    preloadCriticalResources()
    optimizePerformance()
    addDynamicSchema()
    addBreadcrumbs()
  }

  // Event listeners para tracking de interações
  document.addEventListener('click', function (e) {
    // Track clicks em links externos
    if (e.target.tagName === 'A' && e.target.hostname !== window.location.hostname) {
      // gtag('event', 'click_external_link', {
      //     'link_url': e.target.href,
      //     'link_text': e.target.textContent
      // });
    }

    // Track clicks em botões de contato
    if (e.target.closest('a[href*="mailto"], a[href*="tel"], a[href*="wa.me"]')) {
      // gtag('event', 'contact_click', {
      //     'contact_method': e.target.href.includes('mailto') ? 'email' :
      //                      e.target.href.includes('tel') ? 'phone' : 'whatsapp'
      // });
    }
  })

  // Performance monitoring
  window.addEventListener('load', function () {
    // Report Core Web Vitals
    if ('performance' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          // gtag('event', 'web_vitals', {
          //     'metric_name': entry.name,
          //     'metric_value': entry.value,
          //     'metric_id': entry.id
          // });
        }
      })
      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] })
    }
  })
})()
