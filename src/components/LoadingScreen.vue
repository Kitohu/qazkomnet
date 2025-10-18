<template>
  <div class="loading-screen" v-if="isLoading">
    <div class="loading-container">
      <!-- Логотип с анимацией -->
      <div class="logo-container">
        <img src="/qazkomnet_nobg_2.png" alt="QAZKOMNET" class="h-14 w-auto mx-auto drop-shadow-lg select-none" />
        <div class="logo-subtitle">IT Solutions</div>
      </div>
      
      <!-- Анимированный прогресс бар -->
      <div class="progress-container">
        <div class="progress-bar">
          <div class="progress-fill" :style="{ width: progress + '%' }"></div>
        </div>
        <div class="progress-text">{{ Math.round(progress) }}%</div>
      </div>
      
      <!-- Анимированные точки -->
      <div class="loading-dots">
        <div class="dot" v-for="i in 3" :key="i" :style="{ animationDelay: i * 0.2 + 's' }"></div>
      </div>
    </div>
    
    <!-- Фоновые анимированные элементы -->
    <div class="bg-elements">
      <div class="bg-circle" v-for="i in 5" :key="i" 
           :style="{ 
             animationDelay: i * 0.5 + 's',
             left: Math.random() * 100 + '%',
             top: Math.random() * 100 + '%'
           }"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isLoading = ref(true)
const progress = ref(0)

const emit = defineEmits(['loaded'])

onMounted(() => {
  // Симуляция загрузки с анимированным прогрессом
  const interval = setInterval(() => {
    progress.value += Math.random() * 15 + 5
    
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
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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
}

.logo-container {
  margin-bottom: 2rem;
}

.logo-text {
  font-size: 3rem;
  font-weight: bold;
  color: white;
  margin-bottom: 0.5rem;
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
}

.logo-subtitle {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  letter-spacing: 2px;
}

.progress-container {
  margin-bottom: 2rem;
}

.progress-bar {
  width: 300px;
  height: 4px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 2px;
  overflow: hidden;
  margin: 0 auto 1rem;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #fff, #f0f8ff);
  border-radius: 2px;
  transition: width 0.3s ease;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}

.progress-text {
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.9rem;
}

.loading-dots {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
}

.dot {
  width: 8px;
  height: 8px;
  background: white;
  border-radius: 50%;
  animation: bounce 1.4s infinite ease-in-out both;
}

.bg-elements {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.bg-circle {
  position: absolute;
  width: 20px;
  height: 20px;
  background: rgba(255, 255, 255, 0.1);
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
</style>