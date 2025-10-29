<template>
  <div>
    <!-- Загрузочный экран -->
    <LoadingScreen v-if="!appLoaded" @loaded="onLoaded" />
    
    <!-- Основное приложение -->
    <transition 
      name="fade-app"
      enter-active-class="transition duration-1000 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100">
      <div v-if="appLoaded" class="min-h-screen bg-gray-50">
        <Header />
        <main>
          <HeroSection />
          <ScrollingBanner />
          <DirectionsSection />
         
          <ServicesSection />
          <PartnersSection />
          <ContactsSection />
          <Footer />
          
        </main>
         <AboutSection />
        
        <!-- Кнопка "наверх" -->
        <ScrollToTop />
      </div>
    </transition>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import LoadingScreen from './components/LoadingScreen.vue'
import Header from './components/Header.vue'
import HeroSection from './components/HeroSection.vue'
import ScrollingBanner from './components/ScrollingBanner.vue'
import DirectionsSection from './components/DirectionsSection.vue'
import AboutSection from './components/AboutSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import PartnersSection from './components/PartnersSection.vue'
import ContactsSection from './components/ContactsSection.vue'
import Footer from './components/Footer.vue'
import ScrollToTop from './components/ScrollToTop.vue'
import { createI18n, provideI18n } from './composables/useI18n'
import { messages } from './locales'

const appLoaded = ref(false)

const i18n = createI18n(messages)
provideI18n(i18n)

onMounted(() => {
  if (typeof window !== 'undefined') {
    const savedLocale = window.localStorage.getItem('qazkomnet:locale')

    if (savedLocale) {
      i18n.setLocale(savedLocale)
    }
  }
})

watch(
  i18n.locale,
  (value) => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('qazkomnet:locale', value)
    }

    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('lang', value)
    }
  },
  { immediate: true }
)

const onLoaded = () => {
  appLoaded.value = true
}
</script>

<style>
.fade-app-enter-active {
  transition: opacity 1s ease-out;
}

.fade-app-enter-from {
  opacity: 0;
}
</style>