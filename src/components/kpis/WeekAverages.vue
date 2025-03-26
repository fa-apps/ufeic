<script setup lang="ts">
import { useDataStore } from '../../stores/data'
import { useI18n } from 'vue-i18n'
import { ArrowUpCircleIcon, ArrowDownCircleIcon } from '@heroicons/vue/24/outline'

const { t, d } = useI18n()
const dataStore = useDataStore()
const average = { time: '', value: 0 }
const lowestAverage = dataStore.data?.hourWithLowestAverage || average
const highestAverage = dataStore.data?.hourWithHighestAverage || average
</script>

<template>
  <div v-if="dataStore.data" class="container mx-auto md:p-2 p-0">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-7">
      <div
        class="border border-gray-100 bg-white rounded-lg shadow-md p-6 flex-col items-center gap-10"
      >
        <h2 class="text-xl font-bold mb-4">{{ t('title.highestAverage') }}</h2>
        <div class="flex flex-nowrap">
          <ArrowUpCircleIcon class="h-8 w-8 mx-auto" />
          <div class="mt-2 text-center">
            {{ highestAverage.value }}
          </div>
          <div class="text-center grow flex flex-col items-center justify-center">
            <div class="text-lg font-semi-bold px-5">
              {{ d(highestAverage.time, 'long') }}
            </div>
          </div>
        </div>
      </div>

      <div
        class="border border-gray-100 bg-white rounded-lg shadow-md p-6 flex-col items-center gap-10"
      >
        <h2 class="text-xl font-bold mb-4">{{ t('title.lowestAverage') }}</h2>
        <div class="flex flex-nowrap">
          <div
            class="block max-w-sm p-4 text-red-500 font-extrabold bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 w-[130px]"
          >
            <ArrowDownCircleIcon class="h-8 w-8 mx-auto" />
            <div class="mt-2 text-center">
              {{ lowestAverage.value }}
            </div>
          </div>
          <div class="text-center grow flex flex-col items-center justify-center">
            <div class="text-lg font-semi-bold px-5">
              {{ d(lowestAverage.time, 'long') }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <p v-else-if="dataStore.loading">{{ t('message.loading') }}</p>
  <p v-else-if="dataStore.error">{{ t('label.error') }} : {{ dataStore.error.toString() }}</p>
</template>
