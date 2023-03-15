<script setup>
import '@picocss/pico'
</script>

<template>
  <main class="container">
    <TheNav />
    <article data-theme="dark">
      <label for="city">Search</label>
      <input type="text" name="city" placeholder="City" />
    </article>
    <TheFooter />
  </main>
</template>
