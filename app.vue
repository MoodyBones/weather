<script setup>
import '@picocss/pico'
const appConfig = useAppConfig()

useHead({
  title: appConfig.title,
  meta: [
    {
      name: 'description',
      content: appConfig.description,
    },
  ],
})
</script>

<template>
  <main class="container">
    <TheNav />
    <NuxtPage />
    <TheFooter />
  </main>
</template>
