import { computed, inject, provide, reactive } from 'vue'

const I18N_SYMBOL = Symbol('qazkomnet:i18n')

export const createI18n = (messages, defaultLocale = 'ru') => {
  const state = reactive({
    locale: messages[defaultLocale] ? defaultLocale : Object.keys(messages)[0]
  })

  const availableLocales = Object.keys(messages)

  const setLocale = (value) => {
    if (availableLocales.includes(value)) {
      state.locale = value
    }
  }

  const locale = computed({
    get: () => state.locale,
    set: setLocale
  })

  const t = (key) => {
    const segments = key.split('.')
    let current = messages[locale.value]

    for (const segment of segments) {
      if (current && Object.prototype.hasOwnProperty.call(current, segment)) {
        current = current[segment]
      } else {
        return key
      }
    }

    return current
  }

  return {
    locale,
    setLocale,
    availableLocales,
    t
  }
}

export const provideI18n = (instance) => {
  provide(I18N_SYMBOL, instance)
}

export const useI18n = () => {
  const instance = inject(I18N_SYMBOL)

  if (!instance) {
    throw new Error('i18n instance is not provided')
  }

  return instance
}
