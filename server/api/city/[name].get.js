export default defineEventHandler(async event => {
  const city = getRouterParam(event, 'name')

  const result = await $fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
      useRuntimeConfig().openWeatherApiToken
    }`
  )
  return result
})
