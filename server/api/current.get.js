export default defineEventHandler(async event => {
  const query = getQuery(event)
  // server util docs
  // https://nuxt.com/docs/guide/directory-structure/server#handling-requests-with-query-parameters

  const result = await $fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${query.lat}&lon=${
      query.lon
    }&appid=${useRuntimeConfig().openWeatherApiToken}`
  )
  return result
})
