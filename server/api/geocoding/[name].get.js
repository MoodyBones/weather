export default defineEventHandler(async event => {
  const city = getRouterParam(event, 'name')
  const result = await $fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=6&appid=${
      useRuntimeConfig().openWeatherApiToken
    }`
  )
  return result
})
