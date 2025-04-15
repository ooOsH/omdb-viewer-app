<script setup lang="ts">
const { search } = useOMDB()

const query = ref('')
const movies = ref([])

onMounted(async () => {
  const movieResults = await search('easter', 'movie', '2024', 1)
  movies.value = movieResults ?? []
})

watch(query, async (newSearch) => {
  const results = await search(newSearch, 'movie', '', 1)
  movies.value = results ?? []
})
</script>

<template>
  <section class="container mx-auto px-4 sm:px-6 lg:px-8">
    <h1 class="text-3xl font-bold mb-5">Movies</h1>
    <input
      v-model="query"
      type="text"
      placeholder="Search movies..."
      class="shadow appearance-none border border-slate-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
    />
    {{ movies }}
  </section>
</template>
