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
    <div class="flex flex-wrap gap-7">
      <div class="border border-gray-200 bg-white rounded-lg p-6 flex-col">
        <h2 class="font-semibold mb-4">{{ t('title.highestAverage') }}</h2>
        <div class="flex flex-col gap-2">
          <div class="flex flex-nowrap text-green-600">
            <div class="flex flex-col justify-center">
              <div class="text-2xl font-extrabold w-[100px]">
                {{ highestAverage.value }}
              </div>
            </div>
            <ArrowUpCircleIcon class="h-12 w-12 mx-10" />
          </div>
          <div class="text-sm">
            {{ d(highestAverage.time, 'long') }}
          </div>
        </div>
      </div>

      <div class="border border-gray-200 bg-white rounded-lg p-6 flex-col">
        <h2 class="font-semibold mb-4">{{ t('title.lowestAverage') }}</h2>
        <div class="flex flex-col gap-2">
          <div class="flex flex-nowrap text-red-600">
            <div class="flex flex-col justify-center">
              <div class="text-2xl font-extrabold w-[100px]">
                {{ lowestAverage.value }}
              </div>
            </div>
            <ArrowDownCircleIcon class="h-12 w-12 mx-10" />
          </div>
          <div class="text-sm">
            {{ d(lowestAverage.time, 'long') }}
          </div>
        </div>
      </div>
    </div>
  </div>
  <p v-else-if="dataStore.loading">{{ t('message.loading') }}</p>
  <p v-else-if="dataStore.error">{{ t('label.error') }} : {{ dataStore.error.toString() }}</p>
</template>
