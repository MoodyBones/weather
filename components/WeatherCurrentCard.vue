<script>
import { useCityStore } from '@/stores/cityStore'

const cityStore = useCityStore()

// not working
try {
  const { data, error } = await useAsyncData('current', () =>
    cityStore.fetchWeatherCurrent()
  )
} catch (error) {
  console.log(error)
  // return createError(error)
}
</script>

<template>
  <article>
    <div v-if="error">
      {{ error }}
    </div>
    <div v-else-if="data">
      {{ data?.city.data }}
    </div>
    <!-- TODO fill with data when working -->
    <!-- <h2>
      Current weather for {{ current.name }},
      {{ current.sys.country }}
    </h2>
    <div class="grid">
      <article data-theme="dark">
        <h3>Temperature</h3>
        <ul>
          <li v-for="(value, key, index) in current.main" :key="index">
            {{ key }}: {{ value }}
          </li>
        </ul>
      </article>
      <article data-theme="dark">
        <h3>Wind</h3>
        <ul>
          <li v-for="(value, key, index) in current.wind" :key="index">
            {{ key }}: {{ value }}
          </li>
        </ul>
      </article>
    </div> -->
  </article>
</template>
