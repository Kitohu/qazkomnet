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
          <a
            v-for="item in navItems"
            :key="item.href"
            :href="item.href"
            class="text-gray-700 hover:text-blue-600 transition-all duration-300 relative group"
          >
            {{ item.label }}
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <div class="flex items-center space-x-3 pl-6 border-l border-gray-200">
            <button
              type="button"
              class="relative flex items-center bg-gray-100 hover:bg-gray-200 transition-all duration-300 rounded-full px-3 py-1.5"
              role="switch"
              :aria-checked="isEnglish"
              @click="toggleLocale"
            >
              <span class="sr-only">{{ t('header.switch.label') }}</span>
              <span class="text-xs font-semibold tracking-wide" :class="isEnglish ? 'text-gray-500' : 'text-blue-600'">{{ t('header.switch.ru') }}</span>
              <span class="mx-2 h-5 w-10 bg-white rounded-full border border-gray-200 flex items-center transition-colors duration-300">
                <span
                  class="h-4 w-4 rounded-full bg-blue-600 shadow-sm transition-transform duration-300"
                  :style="{ transform: isEnglish ? 'translateX(20px)' : 'translateX(0)' }"
                ></span>
              </span>
              <span class="text-xs font-semibold tracking-wide" :class="isEnglish ? 'text-blue-600' : 'text-gray-500'">{{ t('header.switch.en') }}</span>
            </button>
          </div>
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
            <a
              v-for="item in navItems"
              :key="`mobile-${item.href}`"
              :href="item.href"
              class="text-gray-700 hover:text-blue-600 transition-all duration-300 py-2 px-4 rounded-lg hover:bg-blue-50 transform hover:translate-x-2"
            >
              {{ item.label }}
            </a>
          </nav>

          <div class="flex items-center justify-between px-4 pt-4 border-t border-gray-100">
            <span class="text-sm text-gray-500">{{ t('header.switch.label') }}</span>
            <button
              type="button"
              class="relative flex items-center bg-gray-100 hover:bg-gray-200 transition-all duration-300 rounded-full px-3 py-1.5"
              role="switch"
              :aria-checked="isEnglish"
              @click="toggleLocale"
            >
              <span class="sr-only">{{ t('header.switch.label') }}</span>
              <span class="text-xs font-semibold tracking-wide" :class="isEnglish ? 'text-gray-500' : 'text-blue-600'">{{ t('header.switch.ru') }}</span>
              <span class="mx-2 h-5 w-10 bg-white rounded-full border border-gray-200 flex items-center transition-colors duration-300">
                <span
                  class="h-4 w-4 rounded-full bg-blue-600 shadow-sm transition-transform duration-300"
                  :style="{ transform: isEnglish ? 'translateX(20px)' : 'translateX(0)' }"
                ></span>
              </span>
              <span class="text-xs font-semibold tracking-wide" :class="isEnglish ? 'text-blue-600' : 'text-gray-500'">{{ t('header.switch.en') }}</span>
            </button>
          </div>
        </div>
      </transition>
    </div>
  </header>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from '../composables/useI18n'

const mobileMenuOpen = ref(false)
const scrolled = ref(false)
const { t, locale, setLocale } = useI18n()

const navItems = computed(() => [
  { href: '#', label: t('header.nav.home') },
  { href: '#directions', label: t('header.nav.directions') },
  { href: '#about', label: t('header.nav.about') },
  { href: '#services', label: t('header.nav.services') },
  { href: '#contacts', label: t('header.nav.contacts') }
])

const isEnglish = computed(() => locale.value === 'en')

const toggleLocale = () => {
  setLocale(isEnglish.value ? 'ru' : 'en')
}

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