<script>
import { useCityStore } from '@/stores/cityStore'

const cityStore = useCityStore()
const current = ref(null)

async function fetchCurrentWeather() {
  const { pending, data, error } = useLazyFetch('/api/current', {
    query: {
      lat: cityStore.city.geolocation.lat,
      lon: cityStore.city.geolocation.lon,
    },
    pick: ['name', 'main', 'wind', 'sys'],
  })

  current.value = await data.value
  if (error) console.log('error', error)
  if (pending) console.log('pending', pending)
}

onServerPrefetch(async () => {
  // component is rendered as part of the initial request
  // pre-fetch data on server as it is faster than on the client
  current.value = await fetchCurrentWeather()
})

onMounted(async () => {
  if (!current.value) {
    // if current is null on mount, it means the component
    // is dynamically rendered on the client. Perform a
    // client-side fetch instead.
    current.value = await fetchCurrentWeather()
  }
})
</script>

<template>
  <article>
    <div v-if="pending?.length">
      {{ error }}
    </div>
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
