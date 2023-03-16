<script setup>
const { data: current } = await useFetch('/api/forecasts', {
  pick: ['name', 'main', 'wind', 'sys'],
})
</script>

<template>
  <div>
    <SearchForm />
    <article>
      <h2>
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
      </div>
    </article>
  </div>
</template>
