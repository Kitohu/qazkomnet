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
          <AboutSection />
          <ServicesSection />
          <PartnersSection />
        </main>
        <Footer />
        
        <!-- Кнопка "наверх" -->
        <ScrollToTop />
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import LoadingScreen from './components/LoadingScreen.vue'
import Header from './components/Header.vue'
import HeroSection from './components/HeroSection.vue'
import ScrollingBanner from './components/ScrollingBanner.vue'
import DirectionsSection from './components/DirectionsSection.vue'
import AboutSection from './components/AboutSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import PartnersSection from './components/PartnersSection.vue'
import Footer from './components/Footer.vue'
import ScrollToTop from './components/ScrollToTop.vue'

const appLoaded = ref(false)

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