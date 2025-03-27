<script setup lang="ts">
import { useDataStore } from '../../stores/data'
import { useI18n } from 'vue-i18n'
import VueApexCharts from 'vue3-apexcharts'
import { ref } from 'vue'
import type { ApexOptions } from 'apexcharts'

const dataStore = useDataStore()
const { t } = useI18n()

const weekdays: Record<string, string> = {
  1: t('label.monday'),
  2: t('label.tuesday'),
  3: t('label.wednesday'),
  4: t('label.thursday'),
  5: t('label.friday'),
  6: t('label.saturday'),
  7: t('label.sunday'),
}

const hourlyAveragesByWeekday = dataStore.data?.hourlyAveragesByWeekday || {}
const apexChartOptions = ref<ApexOptions>({
  chart: {
    id: 'hourly-averages_by_weekday',
  },
  xaxis: {
    categories: Object.keys(hourlyAveragesByWeekday).map((day) => weekdays[day]),
    title: {
      text: t('label.dayOfWeek'),
    },
  },
  dataLabels: {
    enabled: false,
  },
  yaxis: {
    title: {
      text: t('label.averageValues'),
    },
  },
  fill: {
    type: 'gradient',
    colors: ['#6875F5'],
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      stops: [0, 90, 100],
    },
  },
})

const series = ref([
  {
    name: t('label.average'),
    data: Object.values(hourlyAveragesByWeekday),
  },
])
</script>

<template>
  <div class="container md:p-2 p-0 max-w-[450px]">
    <div class="border border-gray-200 bg-white rounded-lg p-6">
      <h2 class="font-semibold mb-4">{{ t('title.hourlyAveragesByWeekday') }}</h2>
      <VueApexCharts
        v-if="dataStore.data"
        type="area"
        :options="apexChartOptions"
        :series="series"
        height="320"
      />
      <p v-else-if="dataStore.loading">{{ t('message.loading') }}</p>
      <p v-else-if="dataStore.error">{{ t('label.error') }} : {{ dataStore.error.toString() }}</p>
    </div>
  </div>
</template>
