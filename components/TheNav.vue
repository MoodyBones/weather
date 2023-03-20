<script setup>
const appConfig = useAppConfig()
</script>

<template>
  <nav>
    <ul>
      <li>
        <h1>
          <NuxtLink to="/" class="flex">
            <img src="/logo.png" :alt="`${appConfig.title} logo`" width="50" />
            {{ appConfig.title }}
          </NuxtLink>
        </h1>
      </li>
    </ul>
  </nav>
</template>
