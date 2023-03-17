import { defineStore } from 'pinia'

export const useCityStore = defineStore('cityStore', {
  state: () => ({
    lat: 0,
    lon: 0,
    city: {},
    hasChanged: true,
    cities: [],
    country: '',
  }),

  // mutate stores state with actions
  // actions are methods
  actions: {
    setLat(lat) {
      this.lat = lat
    },
    setLon(lon) {
      this.lon = lon
    },
    setCity(city) {
      this.city = city
    },
  },

  // getters are computed properties
})
