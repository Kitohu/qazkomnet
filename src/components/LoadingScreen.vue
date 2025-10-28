<template>
  <div class="loading-screen" v-if="isLoading">
    <div class="loading-container">
      <!-- Логотип с анимацией -->
      <div class="logo-container">
        <div class="logo-aura">
          <span class="aura aura-1"></span>
          <span class="aura aura-2"></span>
          <span class="aura aura-3"></span>
        </div>
        <img src="/qazkomnet_nobg_2.png" alt="QAZKOMNET" class="h-14 w-auto mx-auto drop-shadow-lg select-none" />
        <div class="logo-subtitle">{{ t('loading.subtitle') }}</div>
      </div>
      
      <!-- Анимированный прогресс бар -->
      <div class="progress-container">
        <div class="progress-bar">
          <div class="progress-fill" :style="{ width: progress + '%' }"></div>
        </div>
        <div class="progress-text">{{ Math.round(progress) }}%</div>
      </div>

      <div class="loading-message" v-if="currentMessage">
        <span class="message-glow"></span>
        <span class="message-text">{{ currentMessage }}</span>
      </div>
      
      <!-- Анимированные точки -->
      <div class="loading-dots">
        <div class="dot" v-for="i in 3" :key="i" :style="{ animationDelay: i * 0.2 + 's' }"></div>
      </div>

      <div class="loading-icons" aria-hidden="true">
        <div
          v-for="icon in iconPaths"
          :key="icon.src"
          class="icon-wrapper"
        >
          <img :src="icon.src" :alt="icon.alt" />
        </div>
      </div>
    </div>
    
    <!-- Фоновые анимированные элементы -->
    <div class="bg-elements">
      <div class="bg-gradient"></div>
  <div class="bg-grid"></div>
  <div class="bg-stripe stripe-1"></div>
  <div class="bg-stripe stripe-2"></div>
      <div
        class="bg-circle"
        v-for="circle in backgroundCircles"
        :key="circle.id"
        :style="{
          animationDelay: circle.delay + 's',
          left: circle.left,
          top: circle.top
        }"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useI18n } from '../composables/useI18n'

const isLoading = ref(true)
const progress = ref(0)

const emit = defineEmits(['loaded'])
const { t } = useI18n()
const backgroundCircles = ref(
  Array.from({ length: 5 }, (_, index) => ({
    id: index,
    delay: index * 0.5,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`
  }))
)

const iconPaths = [
  { src: '/svg/html-tag-svgrepo-com.svg', alt: '' },
  { src: '/svg/two-overlapped-web-pages-svgrepo-com.svg', alt: '' },
  { src: '/svg/laptop-with-arrow-svgrepo-com.svg', alt: '' },
  { src: '/svg/planet-earth-svgrepo-com.svg', alt: '' }
]

const currentMessage = computed(() => {
  const messages = t('loading.messages')

  if (!Array.isArray(messages) || messages.length === 0) {
    return ''
  }

  if (progress.value < 35) {
    return messages[0]
  }

  if (progress.value < 70 && messages[1]) {
    return messages[1]
  }

  return messages[messages.length - 1]
})

onMounted(() => {
  // Симуляция загрузки с анимированным прогрессом
  const interval = setInterval(() => {
    progress.value += Math.random() * 10 + 4
    
    if (progress.value >= 100) {
      progress.value = 100
      clearInterval(interval)
      
      // Задержка перед скрытием загрузки
      setTimeout(() => {
        isLoading.value = false
        emit('loaded')
      }, 500)
    }
  }, 200)
})
</script>

<style scoped>
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: radial-gradient(circle at 18% 20%, rgba(226, 232, 240, 0.6), transparent 60%),
    radial-gradient(circle at 82% 12%, rgba(209, 213, 219, 0.5), transparent 62%),
    linear-gradient(135deg, #f8fafc 0%, #eef2ff 55%, #f9fafb 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  overflow: hidden;
}

.loading-container {
  text-align: center;
  z-index: 10;
  position: relative;
  padding: 3rem 3.5rem;
  border-radius: 1.75rem;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(14px);
  box-shadow: 0 22px 60px rgba(148, 163, 184, 0.28);
  border: 1px solid rgba(226, 232, 240, 0.85);
}

.logo-container {
  margin-bottom: 2rem;
  position: relative;
}

.logo-text {
  font-size: 3rem;
  font-weight: bold;
  color: white;
  margin-bottom: 0.5rem;
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
}

.logo-subtitle {
  font-size: 1.15rem;
  color: rgba(17, 24, 39, 0.7);
  letter-spacing: 2px;
  text-transform: uppercase;
}

.logo-aura {
  position: absolute;
  inset: -2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
}

.aura {
  position: absolute;
  border-radius: 9999px;
  border: 1px solid rgba(203, 213, 225, 0.85);
  box-shadow: 0 0 20px rgba(203, 213, 225, 0.5);
  animation: auraPulse 6s ease-in-out infinite;
}

.aura-1 {
  width: 160px;
  height: 80px;
}

.aura-2 {
  width: 220px;
  height: 110px;
  animation-delay: 1s;
}

.aura-3 {
  width: 280px;
  height: 140px;
  animation-delay: 2s;
  opacity: 0.6;
}

.progress-container {
  margin-bottom: 2rem;
  position: relative;
}

.progress-bar {
  width: 320px;
  height: 5px;
  background: rgba(226, 232, 240, 0.9);
  border-radius: 9999px;
  overflow: hidden;
  margin: 0 auto 1rem;
  border: 1px solid rgba(148, 163, 184, 0.3);
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #334155, #0f172a);
  border-radius: 9999px;
  transition: width 0.3s ease;
  box-shadow: 0 0 18px rgba(15, 23, 42, 0.25);
}

.progress-bar::after {
  content: '';
  position: absolute;
  inset: -10px;
  border-radius: 9999px;
  background: radial-gradient(circle, rgba(148, 163, 184, 0.18), transparent 65%);
  opacity: 0;
  animation: progressGlow 2.4s ease-in-out infinite;
}

.progress-text {
  color: rgba(17, 24, 39, 0.75);
  font-size: 0.95rem;
  font-weight: 500;
}

.loading-message {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 1.75rem auto 2.25rem;
  padding: 0.75rem 1.6rem;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.88);
  border: 1px solid rgba(226, 232, 240, 0.85);
  box-shadow: 0 12px 35px rgba(148, 163, 184, 0.25);
}

.message-glow {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(120deg, rgba(255, 255, 255, 0.45), rgba(209, 213, 219, 0.55));
  opacity: 0;
  animation: messageGlow 3s ease-in-out infinite;
}

.message-text {
  position: relative;
  font-size: 0.95rem;
  color: rgba(30, 41, 59, 0.9);
  letter-spacing: 0.4px;
}

.loading-dots {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
}

.dot {
  width: 8px;
  height: 8px;
  background: rgba(30, 41, 59, 0.85);
  border-radius: 50%;
  animation: bounce 1.4s infinite ease-in-out both;
}

.loading-icons {
  margin-top: 2.3rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  opacity: 0.75;
}

.icon-wrapper {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid rgba(209, 213, 219, 0.8);
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 12px 28px rgba(148, 163, 184, 0.25);
}

.icon-wrapper img {
  width: 18px;
  height: 18px;
  filter: grayscale(100%) brightness(40%);
  opacity: 0.9;
}

.icon-wrapper:nth-child(odd) {
  animation: iconPulse 6s ease-in-out infinite;
}

.icon-wrapper:nth-child(even) {
  animation: iconPulse 6s ease-in-out infinite;
  animation-delay: 1.6s;
}

.bg-elements {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.bg-gradient {
  position: absolute;
  inset: -50%;
  background: conic-gradient(from 220deg at 50% 50%, rgba(224, 231, 255, 0.55), rgba(226, 232, 240, 0.65), rgba(248, 250, 252, 0.35), rgba(224, 231, 255, 0.55));
  animation: slowRotate 22s linear infinite;
}

.bg-grid {
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(90deg, rgba(148, 163, 184, 0.14) 0px, rgba(148, 163, 184, 0.14) 1px, transparent 1px, transparent 70px),
    repeating-linear-gradient(0deg, rgba(148, 163, 184, 0.14) 0px, rgba(148, 163, 184, 0.14) 1px, transparent 1px, transparent 70px);
  mask-image: radial-gradient(circle at center, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0));
  opacity: 0.4;
}

.bg-stripe {
  position: absolute;
  width: 140%;
  height: 200px;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.9), rgba(226, 232, 240, 0.45));
  filter: blur(95px);
  opacity: 0.45;
  --stripe-rotation: -8deg;
  transform: translateX(0) rotate(var(--stripe-rotation));
  animation: stripeDrift 18s ease-in-out infinite;
}

.stripe-1 {
  top: -15%;
  left: -22%;
}

.stripe-2 {
  bottom: -20%;
  right: -25%;
  animation-delay: 8s;
  --stripe-rotation: 12deg;
  animation-direction: alternate-reverse;
  animation-duration: 22s;
}

.bg-circle {
  position: absolute;
  width: 20px;
  height: 20px;
  background: rgba(148, 163, 184, 0.16);
  border-radius: 50%;
  animation: float-up 6s infinite linear;
}

@keyframes bounce {
  0%, 80%, 100% {
    transform: scale(0);
    opacity: 0.5;
  }
  40% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes float-up {
  0% {
    transform: translateY(100vh) scale(0);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100vh) scale(1);
    opacity: 0;
  }
}

@keyframes auraPulse {
  0%, 100% {
    transform: scale(0.95);
    opacity: 0.55;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.9;
  }
}

@keyframes progressGlow {
  0%, 100% {
    opacity: 0;
  }
  40% {
    opacity: 0.35;
  }
  60% {
    opacity: 0.1;
  }
}

@keyframes messageGlow {
  0%, 100% {
    opacity: 0;
    transform: scale(0.98);
  }
  50% {
    opacity: 0.4;
    transform: scale(1.02);
  }
}

@keyframes slowRotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes stripeDrift {
  0%, 100% {
    transform: translateX(0) rotate(var(--stripe-rotation));
  }
  50% {
    transform: translateX(4%) rotate(var(--stripe-rotation));
  }
}

@keyframes iconPulse {
  0%, 100% {
    transform: translateY(0);
    opacity: 0.55;
  }
  50% {
    transform: translateY(-6px);
    opacity: 0.85;
  }
}
</style>