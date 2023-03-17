export default defineEventHandler(async event => {
  const { lat, lon } = event.context.params

  const result = await $fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${
      useRuntimeConfig().openWeatherApiToken
    }`
  )
  return result
})
