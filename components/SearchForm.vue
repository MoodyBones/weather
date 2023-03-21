<script setup>
import { useCityStore } from '@/stores/cityStore'

const cityStore = useCityStore()

const inputRef = ref(null)
const selectRef = ref(null)

const newCityInput = ref('')
const err = ref(null)
const cityOptions = ref(null)
const selectedCity = ref(null)

onMounted(() => {
  inputRef.value.focus()
})

function resetForm() {
  err.value = null
  cityOptions.value = null
}

watchEffect(newCityInput, () => {
  resetForm()
})

async function fetchData() {
  try {
    // check input is not empty
    if (!newCityInput.value) {
      cityOptions.value = null
      inputRef.value.focus()
      throw createError('Please enter a city name')
    }

    // Fetch weather by city name
    // const { data, error } = await useFetch(`/api/city/${newCityInput.value}`, {
    //   pick: ['name', 'main', 'wind', 'sys'],
    // })

    // Fetch lat & lon by city name
    // use this to validate the city name
    // then fetch weather by lat & lon

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

    if (!cities.value.length) {
      inputRef.value.focus()
    } else if (cities.value.length === 1) {
      cityStore.setCity(cities.value[0])
    } else {
      cityOptions.value = cities.value
      nextTick(() => selectRef.value.focus())
    }
  } catch (error) {
    // log errors to console
    err.value = error
    console.error(error)
    clearError()
  }
}

watchEffect(() => {
  // this effect will run immediately and then
  // re-run whenever selectedCity.value changes
  if (!selectedCity.value) return
  cityStore.previousCities(selectedCity.value)
  cityStore.setCity(selectedCity.value)
})
</script>

<template>
  <article data-theme="dark">
    <form @submit.prevent="fetchData">
      <label for="newCityInput">Search City</label>
      <input ref="inputRef" v-model.trim="newCityInput" />
      <button type="submit">Enter</button>
    </form>
    <div v-if="err && !cityOptions">Not found, please try again.</div>
    <div v-if="cityOptions?.length">
      <label>Select you city:</label>
      <select ref="selectRef" v-model="selectedCity">
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
