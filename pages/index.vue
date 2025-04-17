<script setup lang="ts">
import type { Item } from '~/types/omdb'

const { search } = useOMDB()

const movies = ref<Item[]>([])
const series = ref<Item[]>([])

onMounted(async () => {
  // Add some random results on load
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
    <div class="grid grid-cols-2 md:grid-cols-5 gap-4 mb-10">
      <div v-for="item in movies" :key="item.imdbID" class="md:hover:scale-105">
        <NuxtLink :to="`/movies/${item?.imdbID}`">
          <img
            :src="
              item?.Poster !== 'N/A'
                ? item?.Poster
                : 'https://picsum.photos/300/450'
            "
            :alt="item?.Title"
            class="w-full h-auto rounded"
          />
          <h3>{{ item?.Title }}</h3>
        </NuxtLink>
      </div>
    </div>
    <h2 class="text-3xl font-bold mb-5">Featured Series</h2>
    <div class="grid grid-cols-2 md:grid-cols-5 gap-4 mb-10">
      <div v-for="item in series" :key="item.imdbID" class="md:hover:scale-105">
        <NuxtLink :to="`/series/${item?.imdbID}`">
          <img
            :src="
              item?.Poster !== 'N/A'
                ? item?.Poster
                : 'https://picsum.photos/300/450'
            "
            :alt="item?.Title"
            class="w-full h-auto rounded"
          />
          <h3>{{ item?.Title }}</h3>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
