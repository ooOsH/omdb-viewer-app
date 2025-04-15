<script setup lang="ts">
const { search } = useOMDB()

const movies = ref([])
const series = ref([])

onMounted(async () => {
  const movieResults = await search('easter', 'movie', '2024', 1)
  const seriesResults = await search('summer', 'series', '2024', 1)
  movies.value = movieResults ?? []
  series.value = seriesResults ?? []
})
</script>

<template>
  <section class="container mx-auto px-4 sm:px-6 lg:px-8">
    <h1 class="text-3xl font-bold mb-5">OMDB Viewer</h1>
    <h2 class="text-3xl font-bold mb-5">Featured Movies</h2>
    {{ movies }}
    <h2 class="text-3xl font-bold mb-5">Featured Series</h2>
    {{ series }}
  </section>
</template>
