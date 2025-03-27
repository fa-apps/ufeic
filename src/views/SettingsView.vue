<script setup lang="ts">
import LocaleSwitcher from '@/components/LocaleSwitcher.vue'
import { Cog8ToothIcon } from '@heroicons/vue/24/solid'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <header>
    <div class="my-6 flex items-start font-normal text-gray-500 lg:text-xl dark:text-gray-400">
      <Cog8ToothIcon
        class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
      />
      <h1 class="flex-1 ms-3 whitespace-nowrap">{{ t('label.settings') }}</h1>
    </div>
  </header>
  <main>
    <div class="flex flex-col flex-wrap gap-4">
      <div class="">
        <h1
          class="text-lg border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
        >
          {{ t('label.languageSettings') }}
        </h1>
        <LocaleSwitcher class="my-3" />
      </div>
    </div>
  </main>
</template>
