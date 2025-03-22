import { defineStore } from 'pinia'
import axios, { AxiosError } from 'axios'

interface Data {
  hourlyAverages: Record<string, number>
  hourlyAveragesByWeekday: Record<string, number>
  hourWithHighestAverage: { value: number; time: string }
  hourWithLowestAverage: { value: number; time: string }
}

interface DataState {
  data: Data | null
  loading: boolean
  error: AxiosError | null
}

interface ValidationError {
  message: string
  errors: Record<string, string[]>
}

export const useDataStore = defineStore('data', {
  state: (): DataState => ({
    data: null,
    loading: false,
    error: null,
  }),
  actions: {
    async fetchData() {
      this.loading = true
      this.error = null
      try {
        const response = await axios.get<Data>('http://localhost:3000/data')
        this.data = response.data
      } catch (error) {
        if (axios.isAxiosError<ValidationError, Record<string, unknown>>(error)) {
          console.log(error.status)
          console.error(error.response)
          this.error = error
        } else {
          console.error(error)
        }
      } finally {
        this.loading = false
      }
    },
  },
})
