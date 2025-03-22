<script setup lang="ts">
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js'
import { computed } from 'vue'
import { useDataStore } from '../../stores/data'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const dataStore = useDataStore()

const weekdays: Record<string, string> = {
  1: 'Lundi',
  2: 'Mardi',
  3: 'Mercredi',
  4: 'Jeudi',
  5: 'Vendredi',
  6: 'Samedi',
  7: 'Dimanche',
}

const chartData = computed(() => ({
  labels: Object.keys(dataStore.data?.hourlyAveragesByWeekday || {}).map((day) => weekdays[day]),
  datasets: [
    {
      label: 'Moyenne par jour',
      backgroundColor: '#42b883',
      data: Object.values(dataStore.data?.hourlyAveragesByWeekday || {}),
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
        <Bar v-if="dataStore.data" :data="chartData" :options="chartOptions" />
        <p v-else-if="dataStore.loading">Chargement...</p>
        <p v-else-if="dataStore.error">Erreur : {{ dataStore.error.toString() }}</p>
      </div>
    </div>
  </div>
</template>
