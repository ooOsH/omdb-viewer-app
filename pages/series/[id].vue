<script setup lang="ts">
const route = useRoute()
const store = useRecentlyViewedStore()
const { getItem } = useOMDB()

const series = ref({})

onMounted(async () => {
  const id = route.params.id as string
  const seriesResult = await getItem(id)
  series.value = seriesResult ?? {}
  if (series.value) store.setRecentlyViewed(series.value)
})
</script>

<template>
  <section class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div v-if="series" class="max-w-4xl mx-auto p-4 space-y-4">
      <div class="flex flex-col md:flex-row gap-4">
        <img
          :src="
            series?.Poster !== 'N/A'
              ? series?.Poster
              : 'https://picsum.photos/300/450'
          "
          :alt="series?.Title"
          class="w-full md:w-1/3 rounded mr-5"
        />
        <div>
          <h1 class="text-3xl font-bold mb-2">{{ series?.Title }}</h1>
          <p v-if="series?.Year || series?.Genre" class="text-lg mb-2">
            {{ series?.Year }} {{ series?.Genre }}
          </p>
          <p class="mb-2">{{ series?.Plot }}</p>
          <p class="mb-2"><strong>Director:</strong> {{ series?.Director }}</p>
          <p class="mb-2"><strong>Cast:</strong> {{ series?.Actors }}</p>
          <p class="mb-2">
            <strong>IMDb Rating:</strong> {{ series?.imdbRating }}
          </p>
        </div>
      </div>
    </div>
    <div v-else class="text-lg text-gray-500">Loading...</div>
  </section>
</template>
