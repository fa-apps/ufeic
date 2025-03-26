<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useLocalStorageStore } from '../stores/local-storage-store'
import { computed } from 'vue'

const { locale } = useI18n()
const useLocaleStore = useLocalStorageStore<string>('locale', null)
const localeStore = useLocaleStore()
const { t } = useI18n()
const languageText = computed(() => (locale.value == 'fr' ? 'Français' : 'English'))

const changeLocale = (lang: string) => {
  locale.value = lang
  localeStore.setData(lang)
}
</script>
<template>
  <div class="flex flex-nowrap gap-4">
    <div>{{ t('label.currentLanguage') }}:</div>
    <div class="text-indigo-500 font-bold">{{ languageText }}</div>
    <div class="flex items-center gap-1">
      <button @click="changeLocale('en')">
        <img
          src="../assets/en.png"
          alt="English"
          class="mr-2 cursor-pointer border border-indigo-500 rounded"
          :class="locale === 'en' ? 'w-8 h-6' : 'w-6 h-4 '"
        />
      </button>
      <button @click="changeLocale('fr')">
        <img
          src="../assets/fr.png"
          alt="Français"
          class="mr-2 cursor-pointer border-indigo-500 rounded"
          :class="locale === 'fr' ? 'w-8 h-6' : 'w-6 h-4 '"
        />
      </button>
    </div>
  </div>
</template>
<style scoped></style>
