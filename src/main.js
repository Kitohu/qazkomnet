import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)

// Простая детекция слабых устройств и предпочтений пользователя
const isReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches

const isLowEndDevice = () => {
  try {
    const nav = navigator || {}
    const ua = (nav.userAgent || '').toLowerCase()
    const lowRAM = typeof nav.deviceMemory === 'number' && nav.deviceMemory <= 2 // <=2 GB
    const lowCPU = typeof nav.hardwareConcurrency === 'number' && nav.hardwareConcurrency <= 4
    const oldAndroid = /android\s(4|5|6|7)/.test(ua) || /sm-j2/i.test(ua) // Samsung J2, старые андроиды
    return lowRAM || lowCPU || oldAndroid
  } catch {
    return false
  }
}

const lowPerf = isReducedMotion() || isLowEndDevice()
if (typeof document !== 'undefined' && lowPerf) {
  document.documentElement.classList.add('perf-low')
}

// Монтируем приложение как можно быстрее
app.mount('#app')

// Инициализация AOS после первого кадра отрисовки
requestAnimationFrame(() => {
  AOS.init({
    duration: lowPerf ? 400 : 600,
    easing: 'ease-in-out',
    once: true,
    mirror: false,
    offset: lowPerf ? 64 : 0,
    debounceDelay: lowPerf ? 120 : 60,
    throttleDelay: lowPerf ? 120 : 60,
    // Полностью отключаем на reduced motion и очень слабых девайсах
    disable: () => isReducedMotion() || isLowEndDevice()
  })

  // По желанию: проиграть анимации сразу при загрузке (без ожидания скролла)
  try {
    const nodes = document.querySelectorAll('[data-aos]')
    nodes.forEach((el) => el.classList.add('aos-animate'))
  } catch {}
})