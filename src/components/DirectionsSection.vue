<template>
  <section id="directions" class="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 relative overflow-hidden">
    <!-- Система частиц -->
    <ParticleSystem class="absolute inset-0 opacity-30" />
    
    <!-- Фоновые анимированные элементы -->
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden">
      <div class="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-float"></div>
      <div class="absolute bottom-20 right-10 w-32 h-32 bg-purple-200 rounded-full opacity-20 animate-float" style="animation-delay: 1s;"></div>
      <div class="absolute top-1/2 left-1/4 w-16 h-16 bg-indigo-200 rounded-full opacity-20 animate-float" style="animation-delay: 2s;"></div>
    </div>
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div data-aos="fade-up" data-aos-duration="800">
          <h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span class="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-gradient">
              {{ t('directions.hero.line1') }}
            </span>
            <br />
            <span data-aos="fade-up" data-aos-delay="200">{{ t('directions.hero.line2') }}</span>
          </h1>
          <p class="text-xl text-gray-600 mb-8" data-aos="fade-up" data-aos-delay="300">
            {{ t('directions.hero.description') }}
          </p>
          <a href="https://wa.me/77076100951" target="_blank" rel="noopener noreferrer"
             class="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold btn-animated hover-glow shadow-lg transform transition-all duration-300 hover:scale-105 group"
             data-aos="fade-up"
             data-aos-delay="400"
             :aria-label="t('directions.hero.ctaAria')">
            <span class="flex items-center">
              {{ t('directions.hero.cta') }}
              <svg class="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>
        </div>
        <div class="flex justify-center" data-aos="fade-left" data-aos-delay="200">
          <div class="w-full max-w-md">
            <img src="/about-us_1_d4eqdc.svg" 
                 alt="IT Solutions" 
                 class="w-full h-auto animate-float server-image no-background" 
                 style="animation-duration: 4s;" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import ParticleSystem from './ParticleSystem.vue'
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()
</script>