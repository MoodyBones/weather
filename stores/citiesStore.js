import { defineStore } from 'pinia'

export const useCitiesStore = defineStore('cities', {
  state: () => ({
    lat: 0,
    lon: 0,
    country: '',
    city: {},
    cities: [],
  }),
})
