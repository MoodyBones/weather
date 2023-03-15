<script setup>
const { data: current } = await useFetch('/api/forecasts', {
  pick: ['name', 'main', 'wind', 'sys'],
})
</script>

<template>
  <div>
    <article data-theme="dark">
      <label for="city">Search</label>
      <input type="text" name="city" placeholder="City" />
    </article>
    <article>
      <h2>
        Current weather for {{ current.name }},
        {{ current.sys.country }}
      </h2>
      <h3>Temperature</h3>
      <ul>
        <li v-for="(value, key, index) in current.main" :key="index">
          {{ key }}: {{ value }}
        </li>
      </ul>
      <h3>Wind</h3>
      <ul>
        <li v-for="(value, key, index) in current.wind" :key="index">
          {{ key }}: {{ value }}
        </li>
      </ul>
    </article>
  </div>
</template>
