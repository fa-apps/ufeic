<script setup lang="ts">
import HourlyAveragesChart from '../components/charts/HourlyAveragesChart.vue'
import WeekdayAveragesChart from '../components/charts/WeekdayAveragesChart.vue'
import WeekAverages from '../components/kpis/WeekAverages.vue'
import { useDataStore } from '../stores/data'
import { onMounted } from 'vue'
import { ChartPieIcon } from '@heroicons/vue/24/solid'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const dataStore = useDataStore()

onMounted(() => {
  dataStore.fetchData()
})
</script>

<template>
  <div v-if="dataStore.data">
    <header>
      <div class="my-6 flex items-start font-normal text-gray-500 lg:text-xl dark:text-gray-400">
        <ChartPieIcon
          class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
        />
        <h1 class="flex-1 ms-3 whitespace-nowrap">{{ t('label.dashboard') }}</h1>
      </div>
    </header>
    <main>
      <div class="flex flex-col gap-6">
        <div class="">
          <h1
            class="mb-3 text-lg border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
          >
            {{ t('label.hourlyCharts') }}
          </h1>
          <div class="flex flex-col md:flex-row gap-3">
            <HourlyAveragesChart />
            <WeekdayAveragesChart />
          </div>
        </div>
        <div class="">
          <h1
            class="mb-3 text-lg border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
          >
            {{ t('label.weekAverages') }}
          </h1>
          <div class="flex flex-col md:flex-row gap-3">
            <WeekAverages />
          </div>
        </div>
      </div>
    </main>
  </div>
  <div v-else>No Data</div>
</template>
