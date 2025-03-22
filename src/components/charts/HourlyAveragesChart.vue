<script setup lang="ts">
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
} from 'chart.js'
import { computed } from 'vue'
import { useDataStore } from '../../stores/data'

ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale)

const dataStore = useDataStore()

const chartData = computed(() => ({
  labels: Object.keys(dataStore.data?.hourlyAverages || {}),
  datasets: [
    {
      label: 'Moyenne horaire',
      backgroundColor: '#f87979',
      data: Object.values(dataStore.data?.hourlyAverages || {}),
    },
  ],
}))

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
}
</script>

<template>
  <div class="container mx-auto p-4">
    <div class="grid grid-cols-1 md:grid-cols-1 gap-4">
      <div class="bg-white rounded-lg shadow-md p-6 flex items-center">
        <Line v-if="dataStore.data" :data="chartData" :options="chartOptions" />
        <p v-else-if="dataStore.loading">Chargement...</p>
        <p v-else-if="dataStore.error">Erreur : {{ dataStore.error.toString() }}</p>
      </div>
    </div>
  </div>
</template>
