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

    // Fetch data
    const { data, error } = await useFetch(`/api/city/${newCityInput.value}`, {
      pick: ['name', 'main', 'wind', 'sys'],
    })
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
