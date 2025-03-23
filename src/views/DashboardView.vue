<script setup lang="ts">
import HourlyAveragesChart from '../components/charts/HourlyAveragesChart.vue'
import WeekdayAveragesChart from '../components/charts/WeekdayAveragesChart.vue'
import ExtremeValues from '../components/charts/ExtremeValues.vue'
import { useDataStore } from '../stores/data'
import { onMounted } from 'vue'

const dataStore = useDataStore()

onMounted(() => {
  dataStore.fetchData()
})
</script>

<template>
  <div v-if="dataStore.data">
    <HourlyAveragesChart />

    <WeekdayAveragesChart />

    <ExtremeValues />
  </div>
</template>
