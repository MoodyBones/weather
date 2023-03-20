import { defineStore } from 'pinia'

export const useCityStore = defineStore('cityStore', {
  state: () => ({
    lat: 0,
    lon: 0,
    isCityValid: false,
    city: {},
    hasCityChanged: false,
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
    setCoordinates(lat, lon) {
      this.lat = lat
      this.lon = lon
    },

    async fetchWeatherCurrent() {
      try {
        if (this.lat === 0 || this.lon === 0) {
          return createError('No coordinates provided')
        }
        this.city = await useFetch('/api/current', {
          query: { lat: this.lat, lon: this.lon },
          pick: ['name', 'main', 'wind', 'sys'],
        })
        this.hasCityChanged = true
      } catch (error) {
        console.log(error)
        return clearError('/')
      }
    },
  },

  // getters are computed properties
})
