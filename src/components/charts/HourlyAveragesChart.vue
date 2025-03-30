<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import VueApexCharts from 'vue3-apexcharts'
import { ref, defineProps, watch } from 'vue'
import type { ApexOptions } from 'apexcharts'
const { t } = useI18n()

interface HourlyAverages {
  [hour: string]: number
}

interface Props {
  hourlyAverages: HourlyAverages
  overallHourlyAverage: number
}

const props = defineProps<Props>()

console.log(props)

const apexChartOptions = ref<ApexOptions>({
  chart: {
    id: 'hourly-averages',
  },
  xaxis: {
    categories: Object.keys(props.hourlyAverages),
    title: {
      text: t('label.hours'),
    },
  },
  yaxis: {
    title: {
      text: t('label.averageValues'),
    },
  },
  colors: ['#6875F5', '#B4C6FC'],
})

const series = ref([
  {
    name: t('label.hourlyAverage'),
    data: Object.values(props.hourlyAverages),
  },
  {
    name: t('label.overallMean'),
    data: Object.keys(props.hourlyAverages).map(() => props.overallHourlyAverage),
  },
])

watch(
  () => props.hourlyAverages,
  (newHourlyAverages) => {
    series.value[0].data = Object.values(newHourlyAverages)
    if (apexChartOptions.value.xaxis) {
      apexChartOptions.value.xaxis.categories = Object.keys(newHourlyAverages)
    }
    series.value[1].data = Object.keys(newHourlyAverages).map(() => props.overallHourlyAverage)
  },
  { deep: true },
)
</script>

<template>
  <div class="container md:p-2 p-0 max-w-[450px]">
    <div class="border border-gray-200 bg-white rounded-lg p-6">
      <h2 class="font-semibold mb-4">{{ t('title.hourlyAverages') }}</h2>
      <VueApexCharts
        v-if="props"
        type="line"
        :options="apexChartOptions"
        :series="series"
        height="320"
      />
    </div>
  </div>
</template>
