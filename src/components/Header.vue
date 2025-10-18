<template>
  <header class="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 transition-all duration-300" 
          :class="{ 'bg-white shadow-lg': scrolled }">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div class="flex items-center justify-between h-24">
        <!-- Logo -->
        <a href="#" class="flex items-center" data-aos="fade-right">
          <img src="/qazkomnet_nobg_2.png" alt="QAZKOMNET" class="h-[72px] w-auto drop-shadow-lg select-none" />
        </a>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center space-x-8" data-aos="fade-left">
          <a href="#" class="text-gray-700 hover:text-blue-600 transition-all duration-300 relative group">
            Главная
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#directions" class="text-gray-700 hover:text-blue-600 transition-all duration-300 relative group">
            Направления
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#about" class="text-gray-700 hover:text-blue-600 transition-all duration-300 relative group">
            О Компании
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#services" class="text-gray-700 hover:text-blue-600 transition-all duration-300 relative group">
            Услуги
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#contacts" class="text-gray-700 hover:text-blue-600 transition-all duration-300 relative group">
            Контакты
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </nav>

        <!-- Mobile Menu Button -->
        <button @click="mobileMenuOpen = !mobileMenuOpen" 
                class="md:hidden p-2 hover-scale rounded-lg hover:bg-gray-100 transition-all duration-300">
          <svg class="w-6 h-6 transition-transform duration-300" 
               :class="{ 'rotate-90': mobileMenuOpen }"
               fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  :d="mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'" />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <transition 
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="transform -translate-y-full opacity-0"
        enter-to-class="transform translate-y-0 opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="transform translate-y-0 opacity-100"
        leave-to-class="transform -translate-y-full opacity-0">
        <div v-if="mobileMenuOpen" class="md:hidden py-4 border-t bg-white/95 backdrop-blur-md">
          <nav class="flex flex-col space-y-4">
            <a href="#" class="text-gray-700 hover:text-blue-600 transition-all duration-300 py-2 px-4 rounded-lg hover:bg-blue-50 transform hover:translate-x-2">
              Главная
            </a>
            <a href="#directions" class="text-gray-700 hover:text-blue-600 transition-all duration-300 py-2 px-4 rounded-lg hover:bg-blue-50 transform hover:translate-x-2">
              Направления
            </a>
            <a href="#about" class="text-gray-700 hover:text-blue-600 transition-all duration-300 py-2 px-4 rounded-lg hover:bg-blue-50 transform hover:translate-x-2">
              О Компании
            </a>
            <a href="#services" class="text-gray-700 hover:text-blue-600 transition-all duration-300 py-2 px-4 rounded-lg hover:bg-blue-50 transform hover:translate-x-2">
              Услуги
            </a>
            <a href="#contacts" class="text-gray-700 hover:text-blue-600 transition-all duration-300 py-2 px-4 rounded-lg hover:bg-blue-50 transform hover:translate-x-2">
              Контакты
            </a>
          </nav>
        </div>
      </transition>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const mobileMenuOpen = ref(false)
const scrolled = ref(false)

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>