<script setup>
import { useCityStore } from '@/stores/cityStore'

const cityStore = useCityStore()
const showCurrent = ref(false)

watchEffect(() => {
  // has the lat or lon changed?
  if (cityStore.lat || cityStore.lon) {
    console.log(`lat: ${cityStore.lat} or lon: ${cityStore.lon} has changed`)

    // is the city valid?
    if (cityStore.isCityValid) {
      console.log('city is valid')
      showCurrent.value = true
    }
  }
})
</script>

<template>
  <div>
    <SearchForm />
    <WeatherCurrentCard v-if="showCurrent" />
  </div>
</template>
