<template>
  <section class="py-8 sm:py-10 md:py-12 bg-white border-y relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-6 sm:mb-8" data-aos="fade-up">
        <h2 class="text-xl sm:text-2xl font-semibold text-gray-700 mb-3 sm:mb-4 px-4">{{ t('hero.title') }}</h2>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 sm:gap-6">
        <div
          v-for="(partner, index) in partners"
          :key="partner.src"
          class="transition-all duration-500"
          :data-aos="'fade-up'"
          :data-aos-delay="index * 80"
        >
          <a
            v-if="partner.url"
            :href="partner.url"
            target="_blank"
            rel="noopener noreferrer"
            class="group block h-full"
            :aria-label="partner.alt"
          >
            <div class="flex flex-col items-center text-center h-full p-5 sm:p-6 bg-white/95 border border-gray-100 rounded-2xl shadow hover:shadow-xl transition-all duration-300 opacity-95 group-hover:opacity-100">
              <img
                :src="partner.src"
                :alt="partner.alt"
                class="h-12 sm:h-16 w-auto partner-logo hero-logo-color"
                loading="lazy"
                decoding="async"
              />
              <span
                v-if="partner.showLabel"
                class="mt-4 text-xs sm:text-sm font-semibold tracking-tight text-gray-700 group-hover:text-gray-900 transition-colors"
              >
                {{ partner.name }}
              </span>
            </div>
          </a>
          <div
            v-else
            class="flex flex-col items-center text-center h-full p-5 sm:p-6 bg-white/95 border border-gray-100 rounded-2xl shadow hover:shadow-xl transition-all duration-300 opacity-95 hover:opacity-100"
          >
            <img
              :src="partner.src"
              :alt="partner.alt"
              class="h-12 sm:h-16 w-auto partner-logo hero-logo-color"
              loading="lazy"
              decoding="async"
            />
            <span
              v-if="partner.showLabel"
              class="mt-4 text-xs sm:text-sm font-semibold tracking-tight text-gray-700"
            >
              {{ partner.name }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()

/*
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
*/

const partnerEntries = [
  {
    name: 'Государственный фонд социального страхования',
    url: 'https://gfss.kz',
    file: 'gfss.kz.png'
  },
  {
    name: 'Министерство финансов Республики Казахстан',
    url: 'https://www.gov.kz/memleket/entities/minfin?lang=ru',
    file: 'www.gov.kz memleket minfin.png'
  },
  {
    name: 'Национальный научный центр развития здравоохранения им. Салидат Каирбековой',
    url: 'https://nrchd.kz/',
    file: 'nrchd.kz.png'
  },
  {
    name: 'РГП на ПХВ «Телерадиокомплекс Президента Республики Казахстан УДП РК»',
    url: 'https://ptrk.qr-pib.kz/ru/',
    file: 'ptrk.qr-pib.kz.png'
  },
  {
    name: 'АО «Социально-предпринимательская корпорация «Ертіс»',
    url: 'https://spkertis.kz/ru/',
    file: 'spkertis.kz.png'
  },
  {
    name: 'Бюро национальной статистики АСПР Республики Казахстан',
    url: 'https://stat.gov.kz/ru/',
    file: 'stat.gov.kz.png'
  },
  {
    name: 'Управление информатизации, оказания государственных услуг и архивов Карагандинской области',
    url: 'https://www.gov.kz/memleket/entities/karaganda-digital?lang=ru',
    file: 'www.gov.kz memleket karaganda.png'
  },
  {
    name: 'Министерство юстиции Республики Казахстан',
    url: 'https://www.gov.kz/memleket/entities/adilet',
    file: 'www.gov.kz memleket adilet.png'
  },
  {
    name: 'Министерство культуры и информации Республики Казахстан',
    url: 'https://www.gov.kz/memleket/entities/mam',
    file: 'www.gov.kz memleket main.png'
  },
  {
    name: 'Академия правосудия при Высшем Судебном Совете Республики Казахстан',
    url: 'https://sta.edu.kz/',
    file: 'sta.edu.kz.png'
  },
  {
    name: 'Национальный архив Республики Казахстан',
    url: 'https://www.ulttykarhiv.kz/ru/basshylyq/#',
    file: 'www.ulttykarhiv.kz.png'
  },
  {
    name: 'Целиноградская районная поликлиника',
    url: 'https://emhana-akmol.kz',
    file: 'emhana-akmol.kz.png'
  },
  {
    name: 'РГУ «Военный клинический госпиталь» Министерства обороны Республики Казахстан',
    url: null,
    file: 'РГУ Военный клинический госпиталь Министерства обороны Республики Казахстан.png'
  },
  {
    name: 'АО «Республиканская телерадиокорпорация «Казахстан»',
    url: 'https://rtrk.kz/ru/about/',
    file: 'rtrk.kz.png'
  },
  {
    name: 'ГКП на ПХВ «Городская недвижимость» акимата города Астаны',
    url: 'https://qjm.kz/',
    file: 'qjm.kz.png'
  },
  {
    name: 'Государственное учреждение «Аппарат акима города Астаны»',
    url: null,
    file: 'Государственное учреждение Аппарат акима города Астаны.png'
  },
  {
    name: 'Департамент государственных доходов по Северо-Казахстанской области',
    url: 'https://sko.kgd.gov.kz/ru',
    file: 'sko.kgd.gov.kz.png'
  }
]

const partners = partnerEntries.map(({ name, url, file, showLabel = true }) => ({
  name,
  src: encodeURI(`/${file}`),
  alt: name,
  url,
  showLabel
}))
</script>

<style scoped>
.hero-logo-color {
  filter: none !important;
}

.hero-logo-color:hover {
  filter: none !important;
}
</style>