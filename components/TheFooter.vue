<script setup>
const appConfig = useAppConfig()
</script>

<template>
  <nav>
    <ul>
      <li>
        Made by
        <NuxtLink :to="appConfig.github">
          {{ appConfig.author }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
