<script setup>
import logo from '@/favicon.ico'
const appConfig = useAppConfig()
</script>

<template>
  <nav>
    <ul>
      <li>
        <h1>
          <NuxtLink to="/">
            <img :src="logo" alt="logo" width="50" />
          </NuxtLink>
          {{ appConfig.title }}
        </h1>
      </li>
    </ul>
  </nav>
</template>
