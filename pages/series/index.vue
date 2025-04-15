<script setup lang="ts">
const { search } = useOMDB()

const query = ref('')
const series = ref([])

onMounted(async () => {
  const seriesResults = await search('summer', 'series', '2024', 1)
  series.value = seriesResults ?? []
})

watch(query, async (newSearch) => {
  const results = await search(newSearch, 'series', '', 1)
  series.value = results ?? []
})
</script>

<template>
  <section class="container mx-auto px-4 sm:px-6 lg:px-8">
    <h1 class="text-3xl font-bold mb-5">Series</h1>
    <input
      v-model="query"
      type="text"
      placeholder="Search series..."
      class="shadow appearance-none border border-slate-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
    />
    {{ series }}
  </section>
</template>
