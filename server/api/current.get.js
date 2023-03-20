export default defineEventHandler(async event => {
  console.log('event', event.context.query)
  // const lat = event.context.query.lat
  // const lon = event.context.query.lon

  const lat = 52.36
  const lon = 4.9

  const result = await $fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${
      useRuntimeConfig().openWeatherApiToken
    }`
  )
  return result
})
