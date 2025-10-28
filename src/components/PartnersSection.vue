<template>
  <section id="directions" class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-4xl font-bold text-center text-gray-900 mb-4">
        {{ t('expertise.title') }}
      </h2>
      <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        {{ t('expertise.description') }}
      </p>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="direction in directions"
          :key="direction.title"
          class="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-shadow cursor-pointer group"
        >
          <div class="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
            <component :is="direction.icon" class="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">{{ direction.title }}</h3>
          <p class="text-gray-600 leading-relaxed">{{ direction.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { Server, Code, Shield, Cloud, Database, Network } from 'lucide-vue-next'
import { useI18n } from '../composables/useI18n'

const icons = [Server, Code, Shield, Cloud, Database, Network]
const { t } = useI18n()

const directions = computed(() => {
  const cards = t('expertise.cards')

  return cards.map((card, index) => ({
    ...card,
    icon: icons[index] || Server
  }))
})
</script>