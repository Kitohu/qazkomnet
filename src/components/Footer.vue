<template>
  <section class="py-8 bg-blue-600 overflow-hidden">
    <div class="flex animate-scroll whitespace-nowrap">
      <div v-for="i in 3" :key="i" class="flex items-center">
        <span v-for="(text, index) in texts" :key="`${i}-${index}`" class="text-white text-2xl font-bold mx-8">
          {{ text }}
        </span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()
const texts = computed(() => t('footerTicker.texts'))
</script>

<style scoped>
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-33.333%);
  }
}

.animate-scroll {
  animation: scroll 20s linear infinite;
}
</style>