<script setup lang="ts">
import { useDataStore } from '../../stores/data'
import { useI18n } from 'vue-i18n'
import VueApexCharts from 'vue3-apexcharts'
import { ref } from 'vue'
import type { ApexOptions } from 'apexcharts'
const dataStore = useDataStore()
const { t } = useI18n()

const hourlyAverages = dataStore.data?.hourlyAverages || {}
const overallHourlyAverage = dataStore.data?.overallHourlyAverage || 0

const apexChartOptions = ref<ApexOptions>({
  chart: {
    id: 'hourly-averages',
  },
  xaxis: {
    categories: Object.keys(hourlyAverages),
    title: {
      text: t('label.hours'),
    },
  },
  yaxis: {
    title: {
      text: t('label.averageValues'),
    },
  },
  title: {
    text: t('title.hourlyAverages'),
  },
  colors: ['#6875F5', '#B4C6FC'],
})

const series = ref([
  {
    name: t('label.average'),
    data: Object.values(hourlyAverages),
  },
  {
    name: t('label.overallMean'),
    data: Object.keys(hourlyAverages).map(() => overallHourlyAverage),
  },
])
</script>

<template>
  <div class="container mx-auto md:p-2 p-0">
    <div class="border border-gray-100 bg-white rounded-lg shadow-md p-2">
      <vue-apex-charts
        v-if="dataStore.data"
        type="line"
        :options="apexChartOptions"
        :series="series"
        height="400"
      ></vue-apex-charts>
      <p v-else-if="dataStore.loading">{{ t('message.loading') }}</p>
      <p v-else-if="dataStore.error">{{ t('label.error') }} : {{ dataStore.error.toString() }}</p>
    </div>
  </div>
</template>
