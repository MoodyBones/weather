import { defineStore } from 'pinia'

export const useCityStore = defineStore('cityStore', {
  state: () => ({
    city: {},
    cities: [],
    hasCityChanged: false,
  }),

  // mutate stores state with actions
  // actions are methods
  actions: {
    setCity(city) {
      this.city = city
    },
    previousCities(city) {
      return this.cities.push(city)
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
