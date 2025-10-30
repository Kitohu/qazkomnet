<template>
  <section id="partners" class="py-8 sm:py-10 md:py-12 bg-white border-y relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-6 sm:mb-8" data-aos="fade-up">
        <h2 class="text-xl sm:text-2xl font-semibold text-gray-700 mb-3 sm:mb-4 px-4">{{ t('hero.title') }}</h2>
      </div>
      <div class="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-12">
        <div
          v-for="(partner, index) in partners"
          :key="partner.src"
          class="transition-all duration-500 opacity-70 hover:opacity-100 active:opacity-100"
          :data-aos="'fade-up'"
          :data-aos-delay="index * 100"
        >
          <img
            :src="partner.src"
            :alt="partner.alt"
            class="h-10 sm:h-12 w-auto partner-logo partners-gallery-logo"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()

const imageFiles = [
  '2560px-Lenovo_Global.png.webp',
  '3485564.png.webp',
  'Cloudflare_Logosvg.png.webp',
  'Fortinet_logo.svg',
  'Hewlett_Packard_Ente.svg',
  'images_1.png.webp',
  'Juniper_Networks_log.png.webp',
  'Kaspersky_logosvg.png.webp',
  'Poly_Inc_Logosvg.png.webp'
]

const readableAlt = (name) => name.replace(/[-_\d]+/g, ' ').replace(/\.(png|webp|svg|jpg|jpeg)$/i, '').trim()

const partners = imageFiles.map((file) => ({
  src: `/Partners/${file}`,
  alt: readableAlt(file)
}))
</script>

<style scoped>
.partners-gallery-logo {
  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.1)) !important;
}

.partners-gallery-logo:hover {
  filter: drop-shadow(0 8px 20px rgba(0, 0, 0, 0.2)) !important;
}
</style>
