<template>
  <section ref="sectionRef" id="about" class="py-20 bg-gradient-to-r from-gray-50 to-blue-50 relative overflow-hidden">
    <!-- Фоновая анимация -->
    <div class="absolute inset-0">
      <div class="absolute top-0 left-0 w-40 h-40 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-10 animate-float"></div>
      <div class="absolute bottom-0 right-0 w-60 h-60 bg-gradient-to-r from-indigo-400 to-blue-500 rounded-full opacity-10 animate-float" style="animation-delay: 1.5s;"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div data-aos="fade-right" data-aos-duration="800" class="parallax">
          <img src="/hero_image_jdl6ff.svg" 
               alt="О компании" 
               class="server-image transform rotate-1 hover:rotate-0 no-background" />
        </div>
        <div data-aos="fade-left" data-aos-duration="800">
          <h2 class="text-4xl font-bold text-gray-900 mb-6" data-aos="fade-up" data-aos-delay="200">
            О компании
          </h2>
          <p class="text-lg text-gray-600 mb-6 leading-relaxed" data-aos="fade-up" data-aos-delay="300">
            AMANATS — ведущий интегратор IT-решений в Казахстане. Мы специализируемся на комплексной цифровой трансформации бизнеса, предоставляя инновационные технологические решения.
          </p>
          <p class="text-lg text-gray-600 mb-8 leading-relaxed" data-aos="fade-up" data-aos-delay="400">
            Наша команда профессионалов обладает глубокими знаниями и многолетним опытом в области информационных технологий.
          </p>

          <div class="grid grid-cols-3 gap-6">
            <div class="text-center card-hover bg-white p-4 rounded-xl shadow-lg" 
                 data-aos="zoom-in" 
                 data-aos-delay="500">
              <div class="text-4xl font-bold text-blue-600 mb-2">{{ animatedProjects }}+</div>
              <div class="text-gray-600">Проектов</div>
            </div>
            <div class="text-center card-hover bg-white p-4 rounded-xl shadow-lg" 
                 data-aos="zoom-in" 
                 data-aos-delay="600">
              <div class="text-4xl font-bold text-blue-600 mb-2">{{ animatedClients }}+</div>
              <div class="text-gray-600">Клиентов</div>
            </div>
            <div class="text-center card-hover bg-white p-4 rounded-xl shadow-lg" 
                 data-aos="zoom-in" 
                 data-aos-delay="700">
              <div class="text-4xl font-bold text-blue-600 mb-2">{{ animatedYears }}+</div>
              <div class="text-gray-600">Лет опыта</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

const animatedProjects = ref(0)
const animatedClients = ref(0)
const animatedYears = ref(0)

const sectionRef = ref(null)
const hasAnimated = ref(false)

const animateCounter = (target, current, duration = 2000) => {
  const startTime = Date.now()
  const startValue = current.value

  const animate = () => {
    const elapsed = Date.now() - startTime
    const progress = Math.min(elapsed / duration, 1)
    
    // Ease out animation
    const easeOut = 1 - Math.pow(1 - progress, 3)
    current.value = Math.round(startValue + (target - startValue) * easeOut)
    
    if (progress < 1) {
      requestAnimationFrame(animate)
    }
  }
  
  animate()
}

onMounted(() => {
  const { stop } = useIntersectionObserver(
    sectionRef,
    ([{ isIntersecting }]) => {
      if (isIntersecting && !hasAnimated.value) {
        hasAnimated.value = true
        setTimeout(() => {
          animateCounter(150, animatedProjects)
          animateCounter(50, animatedClients, 1800)
          animateCounter(10, animatedYears, 1500)
        }, 500)
        stop()
      }
    },
    { threshold: 0.3 }
  )
})
</script>