// Funcionalidade dos filtros de projetos
document.addEventListener('DOMContentLoaded', function () {
  const filterButtons = document.querySelectorAll('.filter-btn')
  const projectCards = document.querySelectorAll('.project-card')

  // Função para filtrar projetos
  function filterProjects(category) {
    projectCards.forEach((card) => {
      const cardCategories = card
        .getAttribute('data-category')
        .split(/[ ,]+/) // separa por espaço ou vírgula
        .map((c) => c.trim().toLowerCase())

      const match = category === 'all' || cardCategories.includes(category.toLowerCase())

      if (match) {
        card.style.display = 'block'
        card.classList.remove('fade-out')
        card.classList.add('fade-in')
      } else {
        card.classList.remove('fade-in')
        card.classList.add('fade-out')
        setTimeout(() => {
          if (card.classList.contains('fade-out')) {
            card.style.display = 'none'
          }
        }, 300)
      }
    })
  }

  // Adicionar event listeners nos botões de filtro
  filterButtons.forEach((button) => {
    button.addEventListener('click', function () {
      // Remover classe active de todos os botões
      filterButtons.forEach((btn) => btn.classList.remove('active'))

      // Adicionar classe active no botão clicado
      this.classList.add('active')

      // Filtrar projetos
      const category = this.getAttribute('data-filter')
      filterProjects(category)
    })
  })

  // Animação de contagem no hero
  function animateCounter(element, start, end, duration) {
    let startTime = null

    function step(timestamp) {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const current = Math.floor(progress * (end - start) + start)
      element.textContent = current + '+'

      if (progress < 1) {
        requestAnimationFrame(step)
      }
    }

    requestAnimationFrame(step)
  }

  // Observador para iniciar animação quando a seção estiver visível
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counters = entry.target.querySelectorAll('.text-2xl')
        counters.forEach((counter, index) => {
          const values = [3, 4, 2] // Valores para animar
          if (values[index]) {
            animateCounter(counter, 0, values[index], 1400)
          }
        })
        observer.unobserve(entry.target)
      }
    })
  })

  // Observar a seção hero
  const heroSection = document.querySelector('.hero-section')
  if (heroSection) {
    observer.observe(heroSection)
  }

  // Animação dos cards ao carregar
  function animateCardsOnLoad() {
    projectCards.forEach((card, index) => {
      card.style.opacity = '0'
      card.style.transform = 'translateY(50px)'

      setTimeout(() => {
        card.style.transition = 'all 0.6s ease'
        card.style.opacity = '1'
        card.style.transform = 'translateY(0)'
      }, index * 100)
    })
  }

  // Animação dos ícones de tecnologia
  function animateTechIcons() {
    const techItems = document.querySelectorAll('.tech-item')

    const techObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animationDelay = `${Array.from(techItems).indexOf(entry.target) * 0.1}s`
          entry.target.classList.add('animate-fade-in-up')
        }
      })
    })

    techItems.forEach((item) => {
      techObserver.observe(item)
    })
  }

  // Inicializar animações
  setTimeout(animateCardsOnLoad, 500)
  animateTechIcons()

  // Smooth scroll para links internos
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()

      const target = document.querySelector(this.getAttribute('href'))
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }
    })
  })

  // Efeito parallax sutil no hero
  window.addEventListener('scroll', function () {
    const scrolled = window.pageYOffset
    const hero = document.querySelector('.hero-section')
    const rate = scrolled * -0.5

    if (hero) {
      hero.style.transform = `translateY(${rate}px)`
    }
  })

  // Lazy loading para imagens
  const images = document.querySelectorAll('.project-image')
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target
        img.style.opacity = '0'
        img.style.transition = 'opacity 0.5s ease'

        setTimeout(() => {
          img.style.opacity = '1'
        }, 100)

        imageObserver.unobserve(img)
      }
    })
  })

  images.forEach((img) => {
    imageObserver.observe(img)
  })
})

// Função para adicionar ripple effect nos botões
function addRippleEffect(button) {
  button.addEventListener('click', function (e) {
    const ripple = document.createElement('span')
    const rect = this.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)
    const x = e.clientX - rect.left - size / 2
    const y = e.clientY - rect.top - size / 2

    ripple.style.width = ripple.style.height = size + 'px'
    ripple.style.left = x + 'px'
    ripple.style.top = y + 'px'
    ripple.classList.add('ripple')

    this.appendChild(ripple)

    setTimeout(() => {
      ripple.remove()
    }, 600)
  })
}

// Adicionar ripple effect aos botões
document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll(
    '.filter-btn, .modern-button-primary, .modern-button-secondary',
  )
  buttons.forEach(addRippleEffect)
})

// CSS para o efeito ripple
const style = document.createElement('style')
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        animation: ripple 0.6s linear;
        pointer-events: none;
    }

    @keyframes ripple {
        0% {
            transform: scale(0);
            opacity: 1;
        }
        100% {
            transform: scale(1);
            opacity: 0;
        }
    }

    .filter-btn,
    .modern-button-primary,
    .modern-button-secondary {
        position: relative;
        overflow: hidden;
    }
`
document.head.appendChild(style)
