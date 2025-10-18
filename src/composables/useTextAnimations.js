import { ref, onMounted } from 'vue'

export function useTypewriter(text, speed = 100) {
  const displayedText = ref('')
  const isTyping = ref(false)
  
  const startTyping = () => {
    if (isTyping.value) return
    
    isTyping.value = true
    displayedText.value = ''
    
    let i = 0
    const typeInterval = setInterval(() => {
      if (i < text.length) {
        displayedText.value += text.charAt(i)
        i++
      } else {
        clearInterval(typeInterval)
        isTyping.value = false
      }
    }, speed)
  }
  
  return {
    displayedText,
    isTyping,
    startTyping
  }
}

export function useScrollTrigger(callback, threshold = 0.1) {
  const elementRef = ref(null)
  
  onMounted(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callback()
          }
        })
      },
      { threshold }
    )
    
    if (elementRef.value) {
      observer.observe(elementRef.value)
    }
    
    return () => {
      if (elementRef.value) {
        observer.unobserve(elementRef.value)
      }
    }
  })
  
  return { elementRef }
}

export function useStaggeredAnimation(items, delay = 100) {
  const visibleItems = ref([])
  
  const startAnimation = () => {
    visibleItems.value = []
    items.forEach((_, index) => {
      setTimeout(() => {
        visibleItems.value.push(index)
      }, index * delay)
    })
  }
  
  return {
    visibleItems,
    startAnimation,
    isVisible: (index) => visibleItems.value.includes(index)
  }
}