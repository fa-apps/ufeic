import { defineStore } from 'pinia'
import type { UnwrapRef } from 'vue'

interface LocalStorageState<T> {
  data: T | null
}

export const useLocalStorageStore = <T>(key: string, defaultValue: T | null) => {
  return defineStore(key, {
    state: (): LocalStorageState<T> => ({
      data: localStorage.getItem(key)
        ? JSON.parse(localStorage.getItem(key) as string)
        : defaultValue,
    }),
    actions: {
      setData(newData: T | null) {
        this.data = newData as UnwrapRef<T> | null
        localStorage.setItem(key, JSON.stringify(newData))
      },
      clearData() {
        this.data = null
        localStorage.removeItem(key)
      },
    },
  })
}
