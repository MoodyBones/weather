<script setup>
const cityInput = ref(null)
const newCityInput = ref('')
const weather = ref(null)

onMounted(() => {
  cityInput.value.focus()
})

async function fetchData() {
  try {
    const { data } = await useFetch(`/api/city/${newCityInput.value}`, {
      pick: ['name', 'main', 'wind', 'sys'],
    })
    weather.value = data
  } catch (error) {
    console.log(error)
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
    <div v-if="weather">
      {{ weather }}
    </div>
  </article>
</template>
