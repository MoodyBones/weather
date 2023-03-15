export default defineEventHandler(async event => {
  const lat = 52.36
  const lon = 4.9

  // Nuxt helper $fetch https://nuxt.com/docs/api/utils/dollarfetch#fetch
  // fetch external data

  const result = await $fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${
      useRuntimeConfig().openWeatherApiToken
    }`
  )
  return result
})
