export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const query = getQuery(event)
  const res = await $fetch('https://www.omdbapi.com/', {
    params: {
      apikey: config.OMDB_API_KEY,
      ...query,
    },
  })
  return res
})
