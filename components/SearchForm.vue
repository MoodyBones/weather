<script setup>
const cityInput = ref(null)
const newCityInput = ref('')
const weather = ref(null)
const err = ref(null)

onMounted(() => {
  cityInput.value.focus()
})

function resetForm() {
  err.value = null
  weather.value = null
}

watchEffect(newCityInput, () => {
  resetForm()
})

async function fetchData() {
  try {
    // check input is not empty
    if (!newCityInput.value) {
      resetForm()
      cityInput.value.focus()
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

    const { data, error } = await useFetch(
      `/api/geocoding/${newCityInput.value}`,
      {
        transform: data => ({
          name: data[0].name,
          lat: data[0].lat,
          lon: data[0].lon,
          country: data[0].country,
        }),
      }
    )
    if (error.value) {
      err.value = error.value
      throw createError(error.value)
    }

    weather.value = data.value
    newCityInput.value = ''
  } catch (error) {
    // log errors to console
    console.error(error)
    clearError()
  }
}
</script>

<template>
  <article data-theme="dark">
    <form @submit.prevent="fetchData">
      <label for="newCityInput">Search City</label>
      <input ref="cityInput" v-model.trim="newCityInput" />
      <button type="submit">Enter</button>
    </form>
    <div v-if="err">Not found, please try again.</div>
    <div v-else-if="weather">
      {{ weather }}
    </div>
  </article>
</template>
