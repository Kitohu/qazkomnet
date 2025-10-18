<template>
  <section id="services" class="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
    <!-- Фоновые элементы -->
    <div class="absolute inset-0">
      <div class="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-blue-300 to-purple-300 rounded-full opacity-20 animate-float"></div>
      <div class="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-r from-indigo-300 to-blue-300 rounded-full opacity-20 animate-float" style="animation-delay: 1s;"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div data-aos="fade-up">
        <h2 class="text-4xl font-bold text-center text-gray-900 mb-4">Услуги</h2>
        <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Полный спектр IT-услуг для вашего бизнеса
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-6">
        <div
          v-for="(service, index) in services"
          :key="service.title"
          class="bg-white rounded-xl p-8 shadow-sm hover:shadow-2xl card-hover cursor-pointer border-l-4 border-blue-600 group relative overflow-hidden"
          :data-aos="'fade-up'"
          :data-aos-delay="index * 100"
        >
          <!-- Hover effect background -->
          <div class="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          
          <div class="relative z-10">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path v-if="index === 0" fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                  <path v-else-if="index === 1" fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  <path v-else-if="index === 2" fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
                  <path v-else fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{{ service.title }}</h3>
            </div>
            
            <p class="text-gray-600 leading-relaxed mb-4">{{ service.description }}</p>
            <ul class="space-y-2">
              <li v-for="item in service.items" :key="item" class="flex items-start transform transition-transform duration-300 hover:translate-x-2">
                <svg class="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span class="text-gray-700">{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    title: 'Консалтинг',
    description: 'Профессиональная консультация по вопросам IT-инфраструктуры',
    items: [
      'Аудит IT-инфраструктуры',
      'Разработка IT-стратегии',
      'Оптимизация процессов'
    ]
  },
  {
    title: 'Внедрение решений',
    description: 'Комплексное внедрение IT-систем и решений',
    items: [
      'Установка и настройка',
      'Интеграция с существующими системами',
      'Обучение персонала'
    ]
  },
  {
    title: 'Техническая поддержка',
    description: 'Круглосуточная поддержка ваших IT-систем',
    items: [
      'Мониторинг 24/7',
      'Быстрое реагирование',
      'Профилактическое обслуживание'
    ]
  },
  {
    title: 'Аутсорсинг',
    description: 'Передача IT-функций на обслуживание специалистам',
    items: [
      'Управление инфраструктурой',
      'Администрирование систем',
      'Снижение затрат'
    ]
  }
]
</script>