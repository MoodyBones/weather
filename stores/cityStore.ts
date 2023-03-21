import { defineStore } from 'pinia'

interface CityInfo {
  name: string
  country: string
  geolocation: {
    lat: number
    lon: number
  }
}

export const useCityStore = defineStore('cityStore', {
  state: () => ({
    city: null as CityInfo | null,
    cities: [] as CityInfo[],
    hasUpdated: false as boolean,
  }),

  // actions are methods
  // mutate stores state with actions
  actions: {
    setCity(city: CityInfo) {
      this.city = city
    },
    previousCities(city: CityInfo) {
      return this.cities.push(city)
    },
  },

  // getters are computed properties
})
