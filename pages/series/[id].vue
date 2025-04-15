<script setup lang="ts">
const route = useRoute()
const { getItem } = useOMDB()

const series = ref({})
onMounted(async () => {
  const id = route.params.id as string
  const seriesResult = await getItem(id)
  series.value = seriesResult ?? {}
})
</script>

<template>
  <section class="container mx-auto px-4 sm:px-6 lg:px-8">
    <h1 class="text-3xl font-bold mb-5">Series</h1>
    {{ series }}
  </section>
</template>
