<script setup lang="ts">
import type { Item } from '~/types/omdb'
const route = useRoute()
const store = useRecentlyViewedStore()
const { getItem } = useOMDB()

const movie = ref<Item | null>(null)

onMounted(async () => {
  const id = route.params.id as string
  const movieResult = await getItem(id)
  movie.value = movieResult ?? null
  if (movie.value) store.setRecentlyViewed(movie.value)

  useHead({
    title: `${movie.value?.Title} - OMDB Viewer App`,
  })
})
</script>

<template>
  <section class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div v-if="movie" class="max-w-4xl mx-auto p-4 space-y-4">
      <div class="flex flex-col md:flex-row gap-4">
        <img
          :src="
            movie?.Poster !== 'N/A'
              ? movie?.Poster
              : 'https://picsum.photos/300/450'
          "
          :alt="movie?.Title"
          class="w-full md:w-1/3 rounded mr-5"
        />
        <div class="space-y-2">
          <h1 class="text-3xl font-bold mb-2">{{ movie?.Title }}</h1>
          <p v-if="movie?.Year || movie?.Genre" class="text-lg mb-2">
            {{ movie?.Year }} {{ movie?.Genre }}
          </p>
          <p>{{ movie?.Plot }}</p>
          <p><strong>Director:</strong> {{ movie?.Director }}</p>
          <p><strong>Cast:</strong> {{ movie?.Actors }}</p>
          <p><strong>IMDb Rating:</strong> {{ movie?.imdbRating }}</p>
        </div>
      </div>
    </div>
    <div v-else class="text-lg text-gray-500">Loading...</div>
  </section>
</template>
