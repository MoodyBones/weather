<script setup>
const { data } = useFetch('/api/forecasts')
</script>

<template>
  <div>
    <article data-theme="dark">
      <label for="city">Search</label>
      <input type="text" name="city" placeholder="City" />
    </article>
    <article>
      <h2>Here is the current data for {{ data.name }}</h2>
      <ul>
        <li>{{ data.main.temp }}</li>
      </ul>
    </article>
  </div>
</template>
