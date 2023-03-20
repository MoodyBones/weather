<script setup>
import { useCityStore } from '@/stores/cityStore'

const cityStore = useCityStore()
const showCurrent = ref(false)

watchEffect(() => {
  if (cityStore.lat || cityStore.lon) {
    console.log(`lat ${cityStore.lat} or ${cityStore.lon} changed`)

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
    <!-- <WeatherCurrentCard v-if="showCurrent" /> -->
  </div>
</template>
