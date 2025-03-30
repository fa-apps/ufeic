<script setup lang="ts">
/* import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite' */
import {
  MapIcon,
  ChartPieIcon,
  InformationCircleIcon,
  Cog8ToothIcon,
  Bars3BottomLeftIcon,
} from '@heroicons/vue/24/solid'
import { useI18n } from 'vue-i18n'
//import { useDataStore } from '../stores/data'
import { RouterLink } from 'vue-router'

const { t } = useI18n()
//const dataStore = useDataStore()

const isMobile = () => window.innerWidth < 768
/*
onMounted(() => {
  dataStore.fetchData()
  initFlowbite()
}) */
</script>

<template>
  <div class="flex justify-between sm:hidden p-2">
    <button
      data-drawer-target="default-sidebar"
      data-drawer-toggle="default-sidebar"
      aria-controls="default-sidebar"
      class="inline-flex items-center px-3 text-gray-500 border-2 border-indigo-400 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
    >
      <Bars3BottomLeftIcon
        class="w-6 h-6 text-indigo-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
      />
    </button>
    <div class="flex gap-2 m-1">
      <div class="flex flex-col justify-center">
        <span class="text-indigo-700 font-bold">{{ t('title.appTitle') }}</span>
      </div>
      <img alt="App logo" class="h-12 w-12" src="@/assets/logo.png" />
    </div>
  </div>

  <aside
    id="default-sidebar"
    class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
    aria-label="Sidebar"
    ref="sideBar"
  >
    <div
      class="h-full px-3 py-4 overflow-y-auto bg-gray-200 dark:bg-gray-800 flex flex-col justify-between"
    >
      <div>
        <RouterLink
          :data-drawer-toggle="isMobile() ? 'default-sidebar' : null"
          to="/"
          class="ps-2.5 mb-5 flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          <div class="flex gap-2">
            <img alt="App logo" class="logo h-12 w-12" src="@/assets/logo.png" />
            <div class="flex flex-col justify-center">
              <span class="text-indigo-700 font-bold">{{ t('title.appTitle') }}</span>
            </div>
          </div>
        </RouterLink>

        <ul class="space-y-2 font-medium">
          <li>
            <RouterLink
              :data-drawer-toggle="isMobile() ? 'default-sidebar' : null"
              to="/"
              class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <ChartPieIcon
                class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              />
              <span class="ms-3">{{ t('label.dashboard') }}</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink
              :data-drawer-toggle="isMobile() ? 'default-sidebar' : null"
              to="/maps"
              class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <MapIcon
                class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              />
              <span class="ms-3">{{ t('label.maps') }}</span>
            </RouterLink>
          </li>
        </ul>
      </div>
      <ul>
        <li>
          <RouterLink
            :data-drawer-toggle="isMobile() ? 'default-sidebar' : null"
            to="/settings"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <Cog8ToothIcon
              class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
            />
            <span class="flex-1 ms-3 whitespace-nowrap">{{ t('label.settings') }}</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink
            :data-drawer-toggle="isMobile() ? 'default-sidebar' : null"
            to="/about"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <InformationCircleIcon
              class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
            />
            <span class="flex-1 ms-3 whitespace-nowrap">{{ t('label.about') }}</span>
          </RouterLink>
        </li>
      </ul>
    </div>
  </aside>
  <div class="p-4 sm:ml-64 bg-gray-50">
    <RouterView />
  </div>
</template>
