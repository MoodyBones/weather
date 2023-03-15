export default defineEventHandler(async event => {

  let lat = 52.36
  let lon = 4.90
  
  // Nuxt helper $fetch https://nuxt.com/docs/api/utils/dollarfetch#fetch
  // fetch external data=
  const result = await $fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${useRuntimeConfig().openWeatherApiToken}`
  )
  return result
})
