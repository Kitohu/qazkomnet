<template>
  <section class="py-8 sm:py-10 md:py-12 bg-white border-y relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-6 sm:mb-8" data-aos="fade-up">
        <h2 class="text-xl sm:text-2xl font-semibold text-gray-700 mb-3 sm:mb-4 px-4">{{ t('hero.title') }}</h2>
      </div>
      <div class="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-12">
        <div v-for="(partner, index) in partners" 
             :key="index" 
             class="transition-all duration-500 opacity-70 hover:opacity-100 active:opacity-100"
             :data-aos="'fade-up'"
             :data-aos-delay="index * 100">
    <img :src="partner.src" 
      :alt="partner.alt" 
      class="h-10 sm:h-12 w-auto partner-logo"
      loading="lazy" decoding="async" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()

const partners = [
  {
    src: '/EFLgrjH8x89Q6VxGNZmLtZ7Y3Dy46H76-partners-cmggwkq.png',
    alt: 'Partner 1'
  },
  {
    src: '/hhqTPLbmNhzqQ62mr743AcQP43NzHd43-partners-cmggwkq.png',
    alt: 'Partner 2'
  },
  {
    src: '/MRnMUiYhEQHyJj6VxDeiezBhFRH8ikNd-partners-cmggwkq.png',
    alt: 'Partner 3'
  },
  {
    src: '/QmCMQnf2ZNtqA2GdFcnRprcwrwWwHB3M-partners-cmggwkq.png',
    alt: 'Partner 4'
  },
  {
    src: '/qQUDMWk2JBhefpxzJV6dffZj47TgAEh3-partners-cmggwkq.png',
    alt: 'Partner 5'
  },
  {
    src: '/yfG6yjPr8YBcXTZAxeFADb6RT44hNFiH-partners-cmggwkq.png',
    alt: 'Partner 6'
  }
]
</script>