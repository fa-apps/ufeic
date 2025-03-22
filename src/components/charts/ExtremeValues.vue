<script setup lang="ts">
import { useDataStore } from '../../stores/data'
import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/vue/24/outline'
import { format, parseISO, getHours, getMinutes } from 'date-fns'

const dataStore = useDataStore()

const formatDate = (dateString: string, formatString: string) => {
  const date = parseISO(dateString)
  return format(date, formatString)
}

const getHourAngle = (dateString: string) => {
  const date = parseISO(dateString)
  const hours = getHours(date)
  return (hours % 12) * 30 + getMinutes(date) * 0.5
}

const getMinuteAngle = (dateString: string) => {
  const date = parseISO(dateString)
  const minutes = getMinutes(date)
  return minutes * 6
}
</script>

<template>
  <div v-if="dataStore.data" class="container mx-auto p-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="bg-white rounded-lg shadow-md p-6 flex items-center">
        <ArrowUpIcon class="h-8 w-8 text-green-500 mr-4" />

        <div>
          <h2 class="text-xl font-semibold mb-4">Heure avec la moyenne la plus élevée</h2>
          <p class="text-lg">
            {{ dataStore.data.hourWithHighestAverage.time }} ({{
              dataStore.data.hourWithHighestAverage.value
            }})
          </p>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow-md p-6 flex items-center">
        <ArrowDownIcon class="h-8 w-8 text-red-500 mr-4" />

        <div>
          <h2 class="text-xl font-semibold mb-4">Heure avec la moyenne la plus basse</h2>
          <p class="text-lg">
            {{ dataStore.data.hourWithLowestAverage.time }} ({{
              dataStore.data.hourWithLowestAverage.value
            }})
          </p>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="bg-white rounded-lg shadow-md p-6 flex items-center">
        <div class="mr-4">
          <div class="text-xl font-semibold mb-2">Date</div>
          <div class="border p-2 rounded-md">
            {{ formatDate(dataStore.data.hourWithHighestAverage.time, 'dd') }}
            <span class="text-sm"
              >/{{ formatDate(dataStore.data.hourWithHighestAverage.time, 'MM') }}</span
            >
            <span class="text-sm"
              >/{{ formatDate(dataStore.data.hourWithHighestAverage.time, 'yyyy') }}</span
            >
          </div>
        </div>
        <div class="relative">
          <div class="text-xl font-semibold mb-2">Heure</div>
          <div class="w-12 h-12 rounded-full border border-gray-400 relative">
            <div
              class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              :style="{
                transform: `rotate(${getHourAngle(dataStore.data.hourWithHighestAverage.time)}deg)`,
              }"
            >
              <div class="w-0.5 h-4 bg-gray-800 origin-bottom"></div>
            </div>
            <div
              class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              :style="{
                transform: `rotate(${getMinuteAngle(dataStore.data.hourWithHighestAverage.time)}deg)`,
              }"
            >
              <div class="w-0.5 h-6 bg-gray-600 origin-bottom"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow-md p-6 flex items-center">
        <div class="mr-4">
          <div class="text-xl font-semibold mb-2">Date</div>
          <div class="border p-2 rounded-md">
            {{ formatDate(dataStore.data.hourWithLowestAverage.time, 'dd') }}
            <span class="text-sm"
              >/{{ formatDate(dataStore.data.hourWithLowestAverage.time, 'MM') }}</span
            >
            <span class="text-sm"
              >/{{ formatDate(dataStore.data.hourWithLowestAverage.time, 'yyyy') }}</span
            >
          </div>
        </div>
        <div class="relative">
          <div class="text-xl font-semibold mb-2">Heure</div>
          <div class="w-12 h-12 rounded-full border border-gray-400 relative">
            <div
              class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              :style="{
                transform: `rotate(${getHourAngle(dataStore.data.hourWithLowestAverage.time)}deg)`,
              }"
            >
              <div class="w-0.5 h-4 bg-gray-800 origin-bottom"></div>
            </div>
            <div
              class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              :style="{
                transform: `rotate(${getMinuteAngle(dataStore.data.hourWithLowestAverage.time)}deg)`,
              }"
            >
              <div class="w-0.5 h-6 bg-gray-600 origin-bottom"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <p v-else-if="dataStore.loading">Chargement...</p>
  <p v-else-if="dataStore.error">Erreur : {{ dataStore.error.toString() }}</p>
</template>
