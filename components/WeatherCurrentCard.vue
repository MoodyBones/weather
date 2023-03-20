<script>
import { useCityStore } from '@/stores/cityStore'

const cityStore = useCityStore()

// destructure & make them reactive

if (cityStore.isCityValid) {
  const {
    data: current,
    error,
    pending,
  } = await useFetch('/api/current', {
    query: { lat: cityStore.lat, lon: cityStore.lon },
    pick: ['name', 'main', 'wind', 'sys'],
  })
  current.value = data
  if (error) console.log('error', error)
  if (pending) console.log('pending', pending)
}
</script>

<template>
  <article>
    <div v-if="error?.length">
      {{ error }}
    </div>
    <div v-if="current?.length">
      {{ current }}
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
