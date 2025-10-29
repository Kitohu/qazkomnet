import { ref, computed, onMounted, onUnmounted } from 'vue'

export function useParallax(speed = 0.5) {
  const elementRef = ref(null)
  const offset = ref(0)

  let ticking = false
  let cached = { top: 0, height: 0 }

  const isPerfLow = () =>
    typeof document !== 'undefined' && document.documentElement.classList.contains('perf-low')

  const measure = () => {
    if (!elementRef.value) return
    const rect = elementRef.value.getBoundingClientRect()
    const scrolled = window.pageYOffset
    cached.top = rect.top + scrolled
    cached.height = rect.height
  }

  const updateParallax = () => {
    if (!elementRef.value) return
    if (isPerfLow()) return // отключаем на слабых

    if (!ticking) {
      ticking = true
      requestAnimationFrame(() => {
        const scrolled = window.pageYOffset
        const windowHeight = window.innerHeight
        const elementCenter = cached.top + cached.height / 2
        const scrollCenter = scrolled + windowHeight / 2
        offset.value = (scrollCenter - elementCenter) * speed
        ticking = false
      })
    }
  }

  const handleResize = () => {
    measure()
    updateParallax()
  }

  onMounted(() => {
    measure()
    window.addEventListener('scroll', updateParallax, { passive: true })
    window.addEventListener('resize', handleResize)
    updateParallax()
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', updateParallax)
    window.removeEventListener('resize', handleResize)
  })

  return {
    elementRef,
    offset,
    style: computed(() => ({
      transform: `translateY(${offset.value}px)`
    }))
  }
}

export function useScrollDirection() {
  const scrollDirection = ref('down')
  const lastScrollY = ref(0)

  const updateScrollDirection = () => {
    const currentScrollY = window.scrollY
    
    if (currentScrollY > lastScrollY.value) {
      scrollDirection.value = 'down'
    } else {
      scrollDirection.value = 'up'
    }
    
    lastScrollY.value = currentScrollY
  }

  onMounted(() => {
    window.addEventListener('scroll', updateScrollDirection, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', updateScrollDirection)
  })

  return {
    scrollDirection,
    isScrollingDown: computed(() => scrollDirection.value === 'down'),
    isScrollingUp: computed(() => scrollDirection.value === 'up')
  }
}

export function useMouseParallax(intensity = 50) {
  const mouseX = ref(0)
  const mouseY = ref(0)
  let ticking = false

  const isPerfLow = () =>
    typeof document !== 'undefined' && document.documentElement.classList.contains('perf-low')
  
  const handleMouseMove = (event) => {
    if (isPerfLow()) return
    if (!ticking) {
      ticking = true
      requestAnimationFrame(() => {
        const { clientX, clientY } = event
        const { innerWidth, innerHeight } = window
        mouseX.value = (clientX / innerWidth - 0.5) * intensity
        mouseY.value = (clientY / innerHeight - 0.5) * intensity
        ticking = false
      })
    }
  }

  onMounted(() => {
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', handleMouseMove)
  })

  return {
    mouseX,
    mouseY,
    style: computed(() => ({
      transform: `translate(${mouseX.value}px, ${mouseY.value}px)`
    }))
  }
}