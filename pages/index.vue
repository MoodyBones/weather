<script setup>
import { useCityStore } from '@/stores/cityStore'

const cityStore = useCityStore()

watchEffect(() => {
  if (cityStore.validCity) {
    cityStore.fetchWeatherCurrent()
  }
})
// const { data: current } = await useFetch('/api/forecasts', {
//   pick: ['name', 'main', 'wind', 'sys'],
// })
</script>

<template>
  <div>
    <SearchForm />
    <WeatherCurrentCard v-if="cityStore.validCity" />
  </div>
</template>
