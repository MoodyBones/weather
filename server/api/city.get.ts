export default defineCachedEventHandler(
  async event => {
    const city = 'Amsterdam'

    // Nuxt helper $fetch https://nuxt.com/docs/api/utils/dollarfetch#fetch
    // fetch external data

    const result = await $fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
        useRuntimeConfig().openWeatherApiToken
      }`
    )
    return result
  },
  { swr: true }
)
