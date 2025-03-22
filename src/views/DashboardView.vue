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
  <div>
    <h2>Moyennes horaires</h2>
    <HourlyAveragesChart />

    <h2>Moyennes par jour de la semaine</h2>
    <WeekdayAveragesChart />

    <h2>Valeurs extrêmes</h2>
    <ExtremeValues />
  </div>
</template>
