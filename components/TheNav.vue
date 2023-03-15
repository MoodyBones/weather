<script setup>
import logo from '@/public/favicon.ico'
const appConfig = useAppConfig()
</script>

<template>
  <nav>
    <ul>
      <li>
        <h1><img :src="logo" alt="logo" width="50" /> {{ appConfig.title }}</h1>
      </li>
    </ul>
  </nav>
</template>
