<template>
  <section id="contacts" class="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
    <div class="container mx-auto px-4">
      <!-- Заголовок -->
      <div class="text-center mb-16" data-aos="fade-up">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {{ t('contacts.contactsTitle') }}
        </h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          {{ t('contacts.tagline') }}
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
        <!-- Контактная информация -->
        <div class="space-y-8" data-aos="fade-right">
          <!-- Название компании -->
          <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ t('contacts.companyTitle') }}</h3>
                <p class="text-gray-700 text-lg font-medium">{{ t('contacts.companyName') }}</p>
              </div>
            </div>
          </div>

          <!-- Адрес -->
          <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ currentLocale === 'ru' ? 'Адрес' : 'Address' }}</h3>
                <p class="text-gray-700">{{ t('contacts.address') }}</p>
              </div>
            </div>
          </div>

          <!-- Телефон -->
          <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ currentLocale === 'ru' ? 'Телефон' : 'Phone' }}</h3>
                <a :href="`tel:${t('contacts.phone').replace(/[^\d+]/g, '')}`" class="text-gray-700 hover:text-blue-600 transition-colors text-lg">
                  {{ t('contacts.phone') }}
                </a>
              </div>
            </div>
          </div>

          <!-- Email -->
          <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                <a :href="`mailto:${t('contacts.email')}`" class="text-gray-700 hover:text-blue-600 transition-colors text-lg">
                  {{ t('contacts.email') }}
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Карта -->
        <div class="lg:sticky lg:top-24" data-aos="fade-left">
          <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div class="p-6 bg-gradient-to-r from-blue-600 to-blue-700">
              <h3 class="text-2xl font-bold text-white mb-2">{{ t('contacts.mapTitle') }}</h3>
              <p class="text-blue-100">{{ t('contacts.address') }}</p>
            </div>
            
            <!-- Интерактивная карта -->
            <div class="relative group cursor-pointer" @click="openInMaps">
              <div class="aspect-[4/3] bg-gradient-to-br from-blue-50 to-blue-100 relative overflow-hidden">
                <!-- Встраиваемая карта OpenStreetMap -->
                <iframe
                  width="100%"
                  height="100%"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=71.33089900%2C51.19483900%2C71.34089900%2C51.20283900&layer=mapnik&marker=51.198839%2C71.335899"
                  style="border: 0; pointer-events: none;"
                  class="transition-transform duration-300 group-hover:scale-105"
                ></iframe>
                
                <!-- Оверлей при наведении -->
                <div class="absolute inset-0 bg-blue-900 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center pointer-events-none">
                  <div class="bg-white rounded-full p-4 transform scale-0 group-hover:scale-100 transition-transform duration-300 shadow-2xl">
                    <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Декоративные элементы -->
    <div class="absolute top-20 right-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
    <div class="absolute bottom-20 left-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from '../composables/useI18n'

const { t, locale } = useI18n()
const currentLocale = computed(() => locale.value)

const openInMaps = () => {
  // Координаты офиса
  const lat = 51.198839
  const lng = 71.335899
  
  // Определяем, какое приложение доступно
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
  
  if (isMobile) {
    // На мобильных устройствах пробуем открыть 2GIS, затем Google Maps
    window.open(`https://2gis.kz/astana/geo/9570784863338074?m=${lng}%2C${lat}%2F19.36`, '_blank')
  } else {
    // На десктопе открываем 2GIS в веб-версии
    window.open(`https://2gis.kz/astana/geo/9570784863338074?m=${lng}%2C${lat}%2F19.36`, '_blank')
  }
}
</script>

<style scoped>
@keyframes blob {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}
</style>
