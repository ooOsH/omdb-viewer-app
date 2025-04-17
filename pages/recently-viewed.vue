<script setup lang="ts">
import type { Item } from '~/types/omdb'
const store = useRecentlyViewedStore()

const viewed = ref<Item[]>([])
const showLoading = ref(true)

onMounted(async () => {
  viewed.value = store.data
  showLoading.value = false
})

useHead({
  title: 'Recently Viewed - OMDB Viewer App',
})
</script>

<template>
  <section class="container mx-auto px-4 sm:px-6 lg:px-8">
    <h1 class="text-3xl font-bold mb-5">Recently Viewed</h1>
    <div v-if="showLoading" class="text-lg text-gray-500">Loading...</div>
    <div
      v-if="viewed.length"
      class="grid grid-cols-2 md:grid-cols-5 gap-4 mb-10"
    >
      <div v-for="item in viewed" :key="item.imdbID" class="md:hover:scale-105">
        <NuxtLink
          :to="`/${item?.Type === 'movie' ? 'movies' : item?.Type}/${item?.imdbID}`"
        >
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
