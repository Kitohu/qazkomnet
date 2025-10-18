import { ref, computed, onMounted, onUnmounted } from 'vue'

export function useParallax(speed = 0.5) {
  const elementRef = ref(null)
  const offset = ref(0)

  const updateParallax = () => {
    if (elementRef.value) {
      const rect = elementRef.value.getBoundingClientRect()
      const scrolled = window.pageYOffset
      const elementTop = rect.top + scrolled
      const elementHeight = rect.height
      const windowHeight = window.innerHeight

      // Вычисляем позицию элемента относительно viewport
      const elementCenter = elementTop + elementHeight / 2
      const scrollCenter = scrolled + windowHeight / 2
      
      // Рассчитываем offset для параллакса
      offset.value = (scrollCenter - elementCenter) * speed
    }
  }

  onMounted(() => {
    window.addEventListener('scroll', updateParallax, { passive: true })
    updateParallax() // Инициализация
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', updateParallax)
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
  
  const handleMouseMove = (event) => {
    const { clientX, clientY } = event
    const { innerWidth, innerHeight } = window
    
    mouseX.value = (clientX / innerWidth - 0.5) * intensity
    mouseY.value = (clientY / innerHeight - 0.5) * intensity
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