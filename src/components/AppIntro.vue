<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 ...">
    <div class="space-y-2 text-center sm:text-left">
      <div class="space-y-0.5">
        <p class="text-4xl font-semibold text-black">{{ t('message.appTitle') }}</p>
        <p class="font-medium text-gray-500">{{ t('message.appDesc') }}</p>
      </div>
      <button
        type="button"
        class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Purple to Blue
      </button>
      <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div class="bg-blue-600 h-2.5 rounded-full" style="width: 45%"></div>
      </div>
    </div>
  </div>
</template>
