<script setup lang="ts">
const route = useRoute()
const { getItem } = useOMDB()

const movie = ref({})
onMounted(async () => {
  const id = route.params.id as string
  const movieResult = await getItem(id)
  movie.value = movieResult ?? {}
})
</script>

<template>
  <section class="container mx-auto px-4 sm:px-6 lg:px-8">
    <h1 class="text-3xl font-bold mb-5">Movies</h1>
    {{ movie }}
  </section>
</template>
