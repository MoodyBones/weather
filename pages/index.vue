<script setup>
import { useCityStore } from '~/stores/cityStore'

const cityStore = useCityStore()
const showCurrent = ref(false)

watchEffect(() => {
  if (cityStore.city) {
    showCurrent.value = true
  }
})
</script>

<template>
  <div>
    <SearchForm />
    <WeatherCurrentCard v-if="showCurrent" />
  </div>
</template>
