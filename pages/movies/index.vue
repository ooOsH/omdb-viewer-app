<script setup lang="ts">
import type { Item } from '~/types/omdb'
const { search } = useOMDB()

const rawQuery = ref('')
const query = useDebouncedRef(rawQuery.value, 300)
const movies = ref<Item[]>([])
const showLoading = ref(false)
const displayErrorMessage = ref('')

onMounted(async () => {
  // Add some random results on load
  const movieResults = await search('easter', 'movie', '2024', 1)
  movies.value = movieResults ?? []
})

watch(query, async (newSearch) => {
  // Prevent noisy search
  if (newSearch.length < 3) return

  // Set loading, reset error
  showLoading.value = true
  displayErrorMessage.value = ''

  // Search query
  try {
    const results = await search(newSearch, 'movie', '', 1)
    movies.value = results ?? []
  } catch (error: any) {
    displayErrorMessage.value = error.value.message || 'No results...'
  } finally {
    showLoading.value = false
  }
})
</script>

<template>
  <section class="container mx-auto px-4 sm:px-6 lg:px-8">
    <h1 class="text-3xl font-bold mb-5">Movies</h1>
    <input
      v-model="query"
      type="text"
      placeholder="Search Movies..."
      class="shadow appearance-none border border-slate-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
    />
    <div v-if="displayErrorMessage" class="text-lg text-red-500">test</div>
    <div v-if="showLoading" class="text-lg text-gray-500">Loading...</div>
    <div
      v-if="movies.length"
      class="grid grid-cols-2 md:grid-cols-5 gap-4 mb-10"
    >
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
  </section>
</template>
