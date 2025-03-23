<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import { useLocalStorageStore } from '../stores/local-storage-store'

const { locale } = useI18n()
const useLocaleStore = useLocalStorageStore<string>('locale', null)
const localeStore = useLocaleStore()

const changeLocale = (lang: string) => {
  locale.value = lang
  localeStore.setData(lang)
}
</script>
<template>
  <div class="flex items-center gap-1">
    <button @click="changeLocale('en')">
      <img
        src="../assets/en.png"
        alt="English"
        class="w-6 h-4 mr-2 cursor-pointer border border-teal-500 rounded"
      />
    </button>
    <button @click="changeLocale('fr')">
      <img
        src="../assets/fr.png"
        alt="Français"
        class="w-6 h-4 mr-2 cursor-pointer border-teal-500 rounded"
      />
    </button>
  </div>
</template>
<style scoped></style>
