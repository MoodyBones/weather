<script setup>
import { useCityStore } from '@/stores/cityStore'

const cityStore = useCityStore()

const cityInput = ref(null)
const newCityInput = ref('')
const cityOptions = ref(null)
const err = ref(null)
const selectedCity = ref(null)

onMounted(() => {
  cityInput.value.focus()
})

function resetForm() {
  err.value = null
  cityOptions.value = null
}

watchEffect(newCityInput, () => {
  resetForm()
})

function addValidCityToStore(lat, lon) {
  cityStore.setLat(lat)
  cityStore.setLon(lon)
  cityStore.isCityValid = true
}

async function fetchData() {
  try {
    // check input is not empty
    if (!newCityInput.value) {
      resetForm()
      cityInput.value.focus()
      cityStore.isCityValid = false
      throw createError('Please enter a city name')
    }

    // Fetch weather by city name
    // const { data, error } = await useFetch(`/api/city/${newCityInput.value}`, {
    //   pick: ['name', 'main', 'wind', 'sys'],
    // })

    // Fetch lat & lon by city name
    // TODO: use this to validate the city name
    // TODO: then fetch weather by lat & lon
    // Questions:
    // when should get the lat & lon?
    // what should I use the store for?
    // * I could store the lat & lon
    // * I could store the previous search results

    // How should I update the UI?
    // * if more than one city is found, show a list of cities
    // * i could use input radio
    // * i could use a dropdown
    // * what it there is more than one result
    // * what if there is only one result

    const { data: cities } = await useFetch(
      `/api/geocoding/${newCityInput.value}`,
      {
        transform: cities =>
          cities.map(city => ({
            name: city.name,
            country: city.country,
            geolocation: {
              lat: city.lat.toFixed(2),
              lon: city.lon.toFixed(2),
            },
          })),
      }
    )

    cityOptions.value = cities.value
  } catch (error) {
    // log errors to console
    err.value = error
    cityStore.isCityValid = false
    console.error(error)
    clearError()
  }
}

watchEffect(() => {
  if (selectedCity.value) {
    if (selectedCity.value.lat || selectedCity.value.lon) {
      console.log('selected')
      addValidCityToStore(selectedCity.value.lat, selectedCity.value.lon)
    }
  }
})
</script>

<template>
  <article data-theme="dark">
    <form @submit.prevent="fetchData">
      <label for="newCityInput">Search City</label>
      <input ref="cityInput" v-model.trim="newCityInput" />
      <button type="submit">Enter</button>
    </form>
    <div v-if="err">Not found, please try again.</div>
    <div v-if="cityOptions?.length">
      <label>Select you city:</label>
      <select v-model="selectedCity">
        <option
          v-for="(item, index) in cityOptions"
          :key="index + item.name"
          :value="item"
        >
          {{ item.country }}, {{ item.name }},
          <span>LAT: {{ item.geolocation.lat }}, </span>
          <span> LON: {{ item.geolocation.lon }} </span>
        </option>
      </select>
    </div>
  </article>
</template>
