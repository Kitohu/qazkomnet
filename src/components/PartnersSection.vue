<template>
  <section id="directions" class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-4xl font-bold text-center text-gray-900 mb-4">
        Основные направления
      </h2>
      <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Мы предлагаем широкий спектр IT-услуг для развития вашего бизнеса
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
import { Server, Code, Shield, Cloud, Database, Network } from 'lucide-vue-next'

const directions = [
  {
    title: 'Системная интеграция',
    description: 'Объединение различных IT-систем в единую инфраструктуру для эффективной работы',
    icon: Server
  },
  {
    title: 'Разработка ПО',
    description: 'Создание индивидуальных программных решений под задачи вашего бизнеса',
    icon: Code
  },
  {
    title: 'Информационная безопасность',
    description: 'Защита данных и IT-инфраструктуры от внешних и внутренних угроз',
    icon: Shield
  },
  {
    title: 'Облачные решения',
    description: 'Миграция и управление облачной инфраструктурой для масштабирования бизнеса',
    icon: Cloud
  },
  {
    title: 'Управление данными',
    description: 'Организация хранения, обработки и анализа больших объемов данных',
    icon: Database
  },
  {
    title: 'Сетевая инфраструктура',
    description: 'Проектирование и внедрение надежных сетевых решений',
    icon: Network
  }
]
</script>