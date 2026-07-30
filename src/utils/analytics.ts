export function setupAnalytics(router: any) {
  function isLocalEnv() {
    try {
      var hostname = typeof window !== 'undefined' ? window.location.hostname : ''
      if (!hostname || window.location.protocol === 'file:') return true
      if (hostname === 'localhost' || hostname === '127.0.0.1' || hostname === '[::1]') return true
      if (
        hostname.indexOf('192.168.') === 0 ||
        hostname.indexOf('10.') === 0 ||
        hostname.indexOf('172.16.') === 0 ||
        hostname.indexOf('172.17.') === 0 ||
        hostname.indexOf('172.18.') === 0 ||
        hostname.indexOf('172.19.') === 0 ||
        hostname.indexOf('172.20.') === 0 ||
        hostname.indexOf('172.21.') === 0 ||
        hostname.indexOf('172.22.') === 0 ||
        hostname.indexOf('172.23.') === 0 ||
        hostname.indexOf('172.24.') === 0 ||
        hostname.indexOf('172.25.') === 0 ||
        hostname.indexOf('172.26.') === 0 ||
        hostname.indexOf('172.27.') === 0 ||
        hostname.indexOf('172.28.') === 0 ||
        hostname.indexOf('172.29.') === 0 ||
        hostname.indexOf('172.30.') === 0 ||
        hostname.indexOf('172.31.') === 0 ||
        hostname.endsWith('.local')
      )
        return true
      return false
    } catch (e) {
      return false
    }
  }

  function shouldSkipTracking() {
    if (!isLocalEnv()) return false
    try {
      if (window.location.search.indexOf('_debug=true') !== -1) return false
      if (localStorage.getItem('plat_deploy_debug') === 'true') return false
    } catch (e) {}
    return true
  }

  if (shouldSkipTracking()) return

  var B = 'https://api.arctisdev.com/api/v1'
  var P = 'ac5d94'
  var A = window.location.hostname
  function getAnonId() {
    var K = 'plat_deploy_anon_id'
    var I = typeof window !== 'undefined' ? localStorage.getItem(K) : null
    if (I) return I
    var J = Math.random().toString(36).slice(2) + Date.now().toString(36)
    if (typeof window !== 'undefined') localStorage.setItem(K, J)
    return J
  }
  var T0 = Date.now()
  var SE = false
  var currentPage = typeof window !== 'undefined' ? window.location.href : ''
  function send(u: any) {
    try {
      var D = /Mobi|Android/i.test(navigator.userAgent) ? 'mobile' : 'desktop'
      var urlToSend = u || window.location.href
      if (currentPage && currentPage !== urlToSend && !SE) {
        sendSessionEnd()
      }
      T0 = Date.now()
      SE = false
      currentPage = urlToSend
      var us = null,
        um = null,
        uc = null
      try {
        var s = new URL(urlToSend)
        us = s.searchParams.get('utm_source')
        um = s.searchParams.get('utm_medium')
        uc = s.searchParams.get('utm_campaign')
      } catch (e) {}
      fetch(B + '/public/analytics/collect', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event_type: 'pageview',
          project_id: P,
          site_id: A,
          page_url: urlToSend,
          referrer: document.referrer || '',
          utm_source: us,
          utm_medium: um,
          utm_campaign: uc,
          device: D,
          anon_id: getAnonId(),
          user_agent: navigator.userAgent,
          extras: { script_version: '1.4.0' },
        }),
      })
    } catch (e) {}
  }
  function sendClick(targetHref: any, text: any) {
    try {
      var D = /Mobi|Android/i.test(navigator.userAgent) ? 'mobile' : 'desktop'
      var internal = false
      try {
        var u = new URL(targetHref, window.location.href)
        internal = u.hostname === window.location.hostname
      } catch (e) {}
      fetch(B + '/public/analytics/collect', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event_type: 'click',
          project_id: P,
          site_id: A,
          page_url: window.location.href,
          referrer: document.referrer || '',
          device: D,
          anon_id: getAnonId(),
          user_agent: navigator.userAgent,
          extras: {
            target: targetHref,
            text: text || '',
            internal: internal,
            script_version: '1.4.0',
          },
        }),
      })
    } catch (e) {}
  }

  function sendSessionEnd() {
    if (SE) return
    SE = true
    try {
      var D = /Mobi|Android/i.test(navigator.userAgent) ? 'mobile' : 'desktop'
      var dur = Math.max(0, Date.now() - T0)
      fetch(B + '/public/analytics/collect', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event_type: 'session_end',
          project_id: P,
          site_id: A,
          page_url: currentPage || window.location.href,
          device: D,
          anon_id: getAnonId(),
          user_agent: navigator.userAgent,
          extras: { duration_ms: dur, script_version: '1.4.0' },
        }),
      })
    } catch (e) {}
  }
  if (router && router.afterEach) {
    router.afterEach(function () {
      setTimeout(function () {
        send(null)
      }, 0)
    })
  }
  if (typeof window !== 'undefined') {
    send(null)
  }
  if (typeof document !== 'undefined') {
    document.addEventListener(
      'click',
      function (e: any) {
        var t = e.target
        while (t && t.tagName && t.tagName.toLowerCase() !== 'a') t = t.parentElement
        if (!t || !t.getAttribute) return
        var href = t.getAttribute('href')
        if (!href) return
        var abs = href
        try {
          abs = new URL(href, window.location.href).href
        } catch (e) {}
        var text = (t.textContent || '').trim()
        sendClick(abs, text)
      },
      true,
    )
  }
  if (typeof document !== 'undefined') {
    document.addEventListener('visibilitychange', function () {
      if (document.visibilityState === 'hidden') {
        sendSessionEnd()
      }
    })
  }
  try {
    window.addEventListener(
      'pagehide',
      function () {
        sendSessionEnd()
      },
      { once: true },
    )
  } catch (e) {}
  if (typeof window !== 'undefined') {
    window.addEventListener('error', function (e: any) {
      try {
        var D = /Mobi|Android/i.test(navigator.userAgent) ? 'mobile' : 'desktop'
        var msg = String((e && e.message) || '')
        var src = String((e && e.filename) || '')
        var ln = Number((e && e.lineno) || 0)
        var cn = Number((e && e.colno) || 0)
        var stack = String((e && e.error && e.error.stack) || '')
        var pagePath = (function () {
          try {
            return new URL(currentPage || window.location.href).pathname
          } catch (e) {
            return ''
          }
        })()
        fetch(B + '/public/analytics/collect', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            event_type: 'js_error',
            project_id: P,
            site_id: A,
            page_url: currentPage || window.location.href,
            device: D,
            anon_id: getAnonId(),
            user_agent: navigator.userAgent,
            extras: {
              message: msg.slice(0, 300),
              source: src.slice(0, 500),
              lineno: ln,
              colno: cn,
              stack: stack.slice(0, 1000),
              page_path: pagePath,
              script_version: '1.4.0',
            },
          }),
        })
      } catch (x) {}
    })
  }
  var SD: Record<number, boolean> = { 50: false, 75: false, 100: false }
  function checkSD() {
    var h = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight,
      document.documentElement.clientHeight,
    )
    var st = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0
    var wh = window.innerHeight || document.documentElement.clientHeight || 0
    var pct = Math.round(((st + wh) / Math.max(1, h)) * 100)
    ;[50, 75, 100].forEach(function (p) {
      if (!SD[p] && pct >= p) {
        SD[p] = true
        try {
          var D = /Mobi|Android/i.test(navigator.userAgent) ? 'mobile' : 'desktop'
          fetch(B + '/public/analytics/collect', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              event_type: 'scroll_depth',
              project_id: P,
              site_id: A,
              page_url: window.location.href,
              device: D,
              anon_id: getAnonId(),
              user_agent: navigator.userAgent,
              extras: { percent: p, script_version: '1.4.0' },
            }),
          })
        } catch (e) {}
      }
    })
  }
  try {
    window.addEventListener(
      'scroll',
      function () {
        try {
          checkSD()
        } catch (e) {}
      },
      { passive: true },
    )
  } catch (e) {}
  setTimeout(function () {
    try {
      checkSD()
    } catch (e) {}
  }, 300)
  var heartbeatInterval = setInterval(function () {
    if (SE) {
      clearInterval(heartbeatInterval)
      return
    }
    try {
      var D = /Mobi|Android/i.test(navigator.userAgent) ? 'mobile' : 'desktop'
      var dur = Math.max(0, Date.now() - T0)
      fetch(B + '/public/analytics/collect', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event_type: 'heartbeat',
          project_id: P,
          site_id: A,
          page_url: currentPage || window.location.href,
          device: D,
          anon_id: getAnonId(),
          user_agent: navigator.userAgent,
          extras: { duration_ms: dur, script_version: '1.4.0' },
        }),
      })
    } catch (e) {}
  }, 30000)
  window.addEventListener('beforeunload', function () {
    clearInterval(heartbeatInterval)
  })
}
