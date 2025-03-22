import { defineStore } from 'pinia'
import axios from 'axios'

export const useApiStore = defineStore('api', {
  state: () => ({
    data: null,
    loading: false,
    error: null,
  }),
  actions: {
    async fetchData(url) {
      this.loading = true
      this.error = null
      try {
        const response = await axios.get(url)
        this.data = response.data
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    },
    async postData(url, payload) {
      this.loading = true
      this.error = null
      try {
        const response = await axios.post(url, payload)
        this.data = response.data
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    },
  },
})
