// Funcionalidade da página de soluções
document.addEventListener('DOMContentLoaded', function () {
  console.log('Página de soluções carregada!')
  // Funcionalidade do FAQ
  const faqItems = document.querySelectorAll('.faq-item')

  faqItems.forEach((item) => {
    const question = item.querySelector('.faq-question')

    question.addEventListener('click', function () {
      // Fechar todos os outros itens
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove('active')
        }
      })

      // Toggle do item atual
      item.classList.toggle('active')
    })
  })

  // Animação dos cards de serviços
  function animateServiceCards() {
    const serviceCards = document.querySelectorAll('.service-card')

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '0'
          entry.target.style.transform = 'translateY(50px)'

          setTimeout(() => {
            entry.target.style.transition = 'all 0.6s ease'
            entry.target.style.opacity = '1'
            entry.target.style.transform = 'translateY(0)'
          }, 100)

          observer.unobserve(entry.target)
        }
      })
    })

    serviceCards.forEach((card) => {
      observer.observe(card)
    })
  }

  // Animação dos cards de preços
  function animatePricingCards() {
    const pricingCards = document.querySelectorAll('.pricing-card')

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '0'
          entry.target.style.transform = 'translateY(50px)'

          setTimeout(() => {
            entry.target.style.transition = 'all 0.6s ease'
            entry.target.style.opacity = '1'
            entry.target.style.transform = 'translateY(0)'
          }, 150)

          observer.unobserve(entry.target)
        }
      })
    })

    pricingCards.forEach((card) => {
      observer.observe(card)
    })
  }

  // Animação dos steps do processo
  function animateProcessSteps() {
    const processSteps = document.querySelectorAll('.process-step')

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Array.from(processSteps).indexOf(entry.target)

          setTimeout(() => {
            entry.target.classList.add('animate-fade-in-up')
          }, index * 200)

          observer.unobserve(entry.target)
        }
      })
    })

    processSteps.forEach((step) => {
      observer.observe(step)
    })
  }

  // Animação dos depoimentos
  function animateTestimonials() {
    const testimonialCards = document.querySelectorAll('.testimonial-card')

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '0'
          entry.target.style.transform = 'translateY(50px) scale(0.9)'

          setTimeout(() => {
            entry.target.style.transition = 'all 0.6s ease'
            entry.target.style.opacity = '1'
            entry.target.style.transform = 'translateY(0) scale(1)'
          }, 100)

          observer.unobserve(entry.target)
        }
      })
    })

    testimonialCards.forEach((card) => {
      observer.observe(card)
    })
  }

  // Inicializar animações
  animateServiceCards()
  animatePricingCards()
  animateProcessSteps()
  animateTestimonials()

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

  // Efeito parallax no hero
  window.addEventListener('scroll', function () {
    const scrolled = window.pageYOffset
    const hero = document.querySelector('.hero-section')
    const rate = scrolled * -0.3

    if (hero) {
      hero.style.transform = `translateY(${rate}px)`
    }
  })

  // Animação de contagem nos preços
  function animatePriceCounters() {
    const priceElements = document.querySelectorAll('.pricing-price .amount')

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target
          const originalText = target.textContent
          const finalValue = parsePrice(originalText)
          const hasDecimal = originalText.includes(',') || originalText.includes('.')

          animateCounter(target, 0, finalValue, 1800, hasDecimal, originalText)
          observer.unobserve(target)
        }
      })
    })

    priceElements.forEach((element) => {
      observer.observe(element)
    })
  }

  // Função para parse de preços com diferentes formatos
  function parsePrice(priceText) {
    // Remove espaços e converte para formato numérico
    let cleanText = priceText.trim()

    // Se tem vírgula e ponto, assume formato brasileiro (1.800,99)
    if (cleanText.includes('.') && cleanText.includes(',')) {
      cleanText = cleanText.replace(/\./g, '').replace(',', '.')
    }
    // Se tem apenas vírgula, assume que é decimal brasileiro (74,99)
    else if (cleanText.includes(',') && !cleanText.includes('.')) {
      cleanText = cleanText.replace(',', '.')
    }
    // Se tem apenas ponto, pode ser decimal americano (74.99) ou separador de milhares (1.800)
    else if (cleanText.includes('.')) {
      const parts = cleanText.split('.')
      // Se a última parte tem 2 dígitos, provavelmente é decimal
      if (parts[parts.length - 1].length === 2) {
        // É decimal, manter o ponto
      } else {
        // É separador de milhares, remover pontos
        cleanText = cleanText.replace(/\./g, '')
      }
    }

    return parseFloat(cleanText) || 0
  }

  function animateCounter(element, start, end, duration, hasDecimal = false, originalFormat = '') {
    let startTime = null

    function step(timestamp) {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const current = progress * (end - start) + start

      // Formatar o número de acordo com o formato original
      let displayValue
      if (hasDecimal) {
        // Se o número original tinha decimais, mostrar com 2 casas decimais
        displayValue = formatPrice(current, originalFormat)
      } else {
        // Se era número inteiro, mostrar como inteiro
        displayValue = Math.floor(current).toString()
      }

      element.textContent = displayValue

      if (progress < 1) {
        requestAnimationFrame(step)
      } else {
        // Garantir que o valor final seja exato
        element.textContent = originalFormat
      }
    }

    requestAnimationFrame(step)
  }

  // Função para formatar preços mantendo o formato original
  function formatPrice(value, originalFormat) {
    const hasComma = originalFormat.includes(',')
    const hasDot = originalFormat.includes('.')

    // Formato brasileiro (vírgula para decimal)
    if (hasComma && !hasDot) {
      return value.toFixed(2).replace('.', ',')
    }
    // Formato brasileiro com milhares (1.800,99)
    else if (hasComma && hasDot) {
      const formatted = value.toFixed(2)
      const parts = formatted.split('.')
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.')
      return parts.join(',')
    }
    // Formato americano (ponto para decimal)
    else if (hasDot) {
      const dotCount = (originalFormat.match(/\./g) || []).length
      if (dotCount === 1 && originalFormat.split('.')[1].length === 2) {
        return value.toFixed(2)
      }
      // Formato com separador de milhares
      else {
        return Math.floor(value)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
      }
    }

    return Math.floor(value).toString()
  }

  // Inicializar animação de contadores
  animatePriceCounters()

  // Adicionar efeito de hover personalizado nos cards de serviços
  const serviceCards = document.querySelectorAll('.service-card')
  serviceCards.forEach((card) => {
    card.addEventListener('mouseenter', function () {
      this.style.transform = 'translateY(-12px) scale(1.02)'
    })

    card.addEventListener('mouseleave', function () {
      this.style.transform = 'translateY(0) scale(1)'
    })
  })

  // Adicionar efeito de hover nos cards de preços
  const pricingCards = document.querySelectorAll('.pricing-card')
  pricingCards.forEach((card) => {
    card.addEventListener('mouseenter', function () {
      if (!this.classList.contains('featured')) {
        this.style.transform = 'translateY(-8px) scale(1.02)'
      }
    })

    card.addEventListener('mouseleave', function () {
      if (!this.classList.contains('featured')) {
        this.style.transform = 'translateY(0) scale(1)'
      }
    })
  })

  // Efeito de typing no hero
  function typeWriter(element, text, speed = 100) {
    let i = 0
    element.textContent = ''

    function type() {
      if (i < text.length) {
        element.textContent += text.charAt(i)
        i++
        setTimeout(type, speed)
      }
    }

    type()
  }

  // Aplicar efeito de typing no título principal (opcional)
  const heroTitle = document.querySelector('.hero-section h1')
  if (heroTitle) {
    const originalText = heroTitle.textContent
    // Descomente a linha abaixo para ativar o efeito de typing
    // typeWriter(heroTitle, originalText, 50);
  }

  // Lazy loading para melhor performance
  const lazyElements = document.querySelectorAll('.service-card, .pricing-card, .testimonial-card')
  const lazyObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('loaded')
        lazyObserver.unobserve(entry.target)
      }
    })
  })

  lazyElements.forEach((element) => {
    lazyObserver.observe(element)
  })

  // Adicionar ripple effect aos botões
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

  // Aplicar ripple effect aos botões
  const buttons = document.querySelectorAll(
    '.modern-button-primary, .modern-button-secondary, .pricing-button',
  )
  buttons.forEach(addRippleEffect)

  // Adicionar efeito de shake nos cards de preços quando clicados
  const pricingButtons = document.querySelectorAll('.pricing-button')
  pricingButtons.forEach((button) => {
    button.addEventListener('click', function (e) {
      const card = this.closest('.pricing-card')
      card.classList.add('shake')

      setTimeout(() => {
        card.classList.remove('shake')
      }, 500)
    })
  })

  // ===== PLANEJADOR COMPLETO DE PROJETO =====

  // Função para inicializar o planejador de projeto
  function initProjectPlanner() {
    console.log('Inicializando planejador de projeto...')

    const planRadios = document.querySelectorAll('.plan-radio')
    const periodBtns = document.querySelectorAll('.period-btn')
    let currentPeriod = 12 // Default: 1 ano

    // Dados dos planos
    const planData = {
      149: {
        name: 'Essencial',
        weeks: 3,
        pages: '1 página',
        deliverables: [
          'Landing page responsiva',
          'Até 5 seções personalizadas',
          'Formulários funcionais',
          'SEO otimizado',
          'Hospedagem Vercel configurada',
          'SSL automático',
          'Google Analytics',
        ],
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'Vercel'],
        breakdown: { dev: 50, hosting: 49, support: 50 },
        marketCost: 4200,
      },
      299: {
        name: 'Profissional',
        weeks: 6,
        pages: 'até 8 páginas',
        deliverables: [
          'Site completo responsivo',
          'Até 8 páginas personalizadas',
          'Design 100% personalizado',
          'Painel administrativo',
          'CDN global incluído',
          'Integrações (Forms, APIs)',
          'SEO avançado',
          'Hospedagem Vercel Pro',
        ],
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'Vercel Pro', 'CDN', 'Analytics'],
        breakdown: { dev: 120, hosting: 89, support: 90 },
        marketCost: 5400,
      },
      499: {
        name: 'Premium',
        weeks: 9,
        pages: 'ilimitadas',
        deliverables: [
          'Sistema full-stack completo',
          'Backend + banco de dados',
          'API personalizada',
          'Área de membros',
          'E-commerce integrado',
          'Dashboard analytics',
          'Hospedagem enterprise',
          'Suporte WhatsApp direto',
        ],
        technologies: [
          'HTML5',
          'CSS3',
          'JavaScript',
          'Node.js',
          'Vercel Pro',
          'Render.com',
          'Database',
        ],
        breakdown: { dev: 200, hosting: 149, support: 150 },
        marketCost: 8000,
      },
    }

    // Função para atualizar o planejador
    function updatePlanner() {
      console.log('Atualizando planejador...')
      const selectedPlan = document.querySelector('.plan-radio:checked')

      if (!selectedPlan) {
        console.log('Nenhum plano selecionado')
        return
      }

      const planCost = parseInt(selectedPlan.value)
      const planInfo = planData[planCost]

      console.log('Plano selecionado:', planInfo.name, 'Custo:', planCost)

      // Atualizar cronograma
      const devTimeEl = document.getElementById('dev-time')
      const deliveryDateEl = document.getElementById('delivery-date')

      if (devTimeEl) {
        devTimeEl.textContent = `${planInfo.weeks} semanas`
        devTimeEl.style.color = '#ffffff' // white para melhor legibilidade
      }
      if (deliveryDateEl) {
        deliveryDateEl.textContent = `${planInfo.weeks} semanas`
        deliveryDateEl.style.color = '#ffffff' // white
      }

      // Atualizar barra de progresso (visual)
      const progressBar = document.getElementById('progress-bar')
      if (progressBar) {
        const progressWidth = Math.min((planInfo.weeks / 9) * 100, 100)
        progressBar.style.width = `${progressWidth}%`
      }

      // Atualizar entregáveis
      const deliverablesContainer = document.getElementById('deliverables')
      if (deliverablesContainer) {
        deliverablesContainer.innerHTML = planInfo.deliverables
          .map(
            (item) => `<div class="flex items-center text-slate-200">
                        <i class="fas fa-check-circle text-green-400 mr-3 text-lg"></i>
                        <span>${item}</span>
                    </div>`,
          )
          .join('')
      }

      // Atualizar tecnologias
      const techContainer = document.getElementById('technologies')
      if (techContainer) {
        techContainer.innerHTML = planInfo.technologies
          .map((tech) => `<span class="tech-badge">${tech}</span>`)
          .join('')
      }

      // Atualizar custos
      updateFinancialAnalysis(planCost, planInfo)
    }

    // Função para atualizar análise financeira
    function updateFinancialAnalysis(planCost, planInfo) {
      console.log('Atualizando análise financeira...')

      // Verificar se elementos existem antes de atualizar
      const monthlyCostEl = document.getElementById('monthly-cost')
      const devMonthlyEl = document.getElementById('dev-monthly')
      const hostingMonthlyEl = document.getElementById('hosting-monthly')
      const supportMonthlyEl = document.getElementById('support-monthly')
      const breakdownTotalEl = document.getElementById('breakdown-total')
      const totalPeriodEl = document.getElementById('total-period')
      const marketTotalEl = document.getElementById('market-total')
      const totalSavingsEl = document.getElementById('total-savings')

      // Custo mensal
      if (monthlyCostEl) {
        animateNumber(monthlyCostEl, planCost, 'R$ ')
      }

      // Breakdown mensal
      if (devMonthlyEl) devMonthlyEl.textContent = `R$ ${planInfo.breakdown.dev}`
      if (hostingMonthlyEl) hostingMonthlyEl.textContent = `R$ ${planInfo.breakdown.hosting}`
      if (supportMonthlyEl) supportMonthlyEl.textContent = `R$ ${planInfo.breakdown.support}`
      if (breakdownTotalEl) breakdownTotalEl.textContent = `R$ ${planCost}`

      // Cálculos por período
      const totalPeriod = planCost * currentPeriod
      const marketTotal =
        planInfo.marketCost + (currentPeriod > 12 ? (currentPeriod - 12) * 500 : 0)
      const totalSavings = Math.max(0, marketTotal - totalPeriod)

      // Atualizar displays
      if (totalPeriodEl) animateNumber(totalPeriodEl, totalPeriod, 'R$ ')
      if (marketTotalEl) marketTotalEl.textContent = `R$ ${marketTotal.toLocaleString('pt-BR')}`
      if (totalSavingsEl) animateNumber(totalSavingsEl, totalSavings, 'R$ ')
    }

    // Função para atualizar período
    function updatePeriod(months) {
      console.log('Atualizando período para:', months, 'meses')
      currentPeriod = months

      // Atualizar botões visuais
      periodBtns.forEach((btn) => btn.classList.remove('active'))
      const activeBtn = document.querySelector(`[data-period="${months}"]`)
      if (activeBtn) activeBtn.classList.add('active')

      // Recalcular financeiro
      const selectedPlan = document.querySelector('.plan-radio:checked')
      if (selectedPlan) {
        const planCost = parseInt(selectedPlan.value)
        const planInfo = planData[planCost]
        updateFinancialAnalysis(planCost, planInfo)
      }
    }

    // Função para animar números
    function animateNumber(element, targetValue, prefix = '') {
      if (!element || targetValue === undefined || targetValue === null) return

      // Limpar animação anterior se existir
      if (element.animationTimer) {
        clearInterval(element.animationTimer)
      }

      const currentValue = parseInt(element.textContent.replace(/\D/g, '')) || 0
      const difference = targetValue - currentValue

      // Se a diferença for muito pequena, apenas atualizar diretamente
      if (Math.abs(difference) < 10) {
        element.textContent = `${prefix}${targetValue.toLocaleString('pt-BR')}`
        return
      }

      const increment = difference / 15
      let current = currentValue

      element.animationTimer = setInterval(() => {
        current += increment
        if (
          (increment > 0 && current >= targetValue) ||
          (increment < 0 && current <= targetValue)
        ) {
          current = targetValue
          clearInterval(element.animationTimer)
          element.animationTimer = null
        }
        element.textContent = `${prefix}${Math.round(current).toLocaleString('pt-BR')}`
      }, 50)
    }

    // Adicionar event listeners
    console.log('Adicionando event listeners...')
    console.log('Plan radios encontrados:', planRadios.length)
    console.log('Period buttons encontrados:', periodBtns.length)

    planRadios.forEach((radio, index) => {
      console.log(`Adicionando listener ao radio ${index + 1}`)
      radio.addEventListener('change', (e) => {
        console.log('Radio changed:', e.target.value)
        updatePlanner()
      })
    })

    periodBtns.forEach((btn, index) => {
      console.log(`Adicionando listener ao botão ${index + 1}`)
      btn.addEventListener('click', (e) => {
        e.preventDefault()
        const period = parseInt(btn.dataset.period)
        console.log('Period changed:', period)
        updatePeriod(period)
      })
    })

    // Inicializar com o plano padrão
    updatePlanner()
  }

  // Função para inicializar o planejador de forma segura
  function safeInitPlanner() {
    console.log('Verificando elementos do planejador...')

    const planRadios = document.querySelector('.plan-radio')
    const monthlyCost = document.getElementById('monthly-cost')
    const devTime = document.getElementById('dev-time')

    console.log('Elementos encontrados:', {
      planRadios: !!planRadios,
      monthlyCost: !!monthlyCost,
      devTime: !!devTime,
    })

    if (planRadios && monthlyCost && devTime) {
      console.log('Todos os elementos encontrados, inicializando planejador...')
      initProjectPlanner()
    } else {
      console.log('Elementos não encontrados, tentando novamente em 100ms...')
      setTimeout(safeInitPlanner, 100)
    }
  }

  // Inicializar planejador
  safeInitPlanner()

  // Efeito de scroll suave para sections
  function addScrollEffects() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1'
            entry.target.style.transform = 'translateY(0)'
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      },
    )

    // Observar todos os cards que não estão no viewport inicial
    const cards = document.querySelectorAll('.service-card, .pricing-card, .testimonial-card')
    cards.forEach((card, index) => {
      if (index > 2) {
        // Apenas cards que não estão visíveis inicialmente
        card.style.opacity = '0'
        card.style.transform = 'translateY(30px)'
        card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
        observer.observe(card)
      }
    })
  }

  // Adicionar efeitos de scroll após DOM load
  addScrollEffects()
})

// CSS adicional para as animações
const additionalStyles = document.createElement('style')
additionalStyles.textContent = `
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
    
    .shake {
        animation: shake 0.5s ease-in-out;
    }
    
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }
    
    .modern-button-primary,
    .modern-button-secondary,
    .pricing-button {
        position: relative;
        overflow: hidden;
    }
    
    .loaded {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
    
    .tech-badge {
        display: inline-block;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 4px 12px;
        border-radius: 20px;
        font-size: 0.8rem;
        margin: 2px;
        font-weight: 500;
    }
`
document.head.appendChild(additionalStyles)
