<template>
  <transition
    name="scroll-to-top"
    enter-active-class="transition duration-300 ease-out"
    leave-active-class="transition duration-200 ease-in"
    enter-from-class="opacity-0 scale-75 translate-y-4"
    enter-to-class="opacity-100 scale-100 translate-y-0"
    leave-from-class="opacity-100 scale-100 translate-y-0"
    leave-to-class="opacity-0 scale-75 translate-y-4">
    <button
      v-if="showButton"
      @click="scrollToTop"
      class="scroll-to-top ripple"
      :aria-label="t('scrollToTop.aria')">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  </transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from '../composables/useI18n'

const showButton = ref(false)
const { t } = useI18n()

const handleScroll = () => {
  showButton.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>