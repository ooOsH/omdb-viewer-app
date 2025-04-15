<script setup lang="ts">
const showMenu = ref(false)
</script>

<template>
  <header class="w-full fixed top-0 z-50 bg-black">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <nav class="flex items-center justify-between">
        <NuxtLink
          to="/"
          title="OMDB Viewer App"
          class="text-white hover:text-slate-400"
        >
          OMDB Viewer App
        </NuxtLink>
        <div class="hidden md:flex">
          <NuxtLink
            to="/movies"
            title="Movies - OMDB Viewer App"
            class="text-white hover:text-slate-400 text-sm mr-4"
          >
            Movies
          </NuxtLink>
          <NuxtLink
            to="/series"
            title="Series - OMDB Viewer App"
            class="text-white hover:text-slate-400 text-sm mr-4"
          >
            Series
          </NuxtLink>
          <NuxtLink
            to="/recently-viewed"
            title="Recently Viewed - OMDB Viewer App"
            class="text-white hover:text-slate-400 text-sm mr-4"
          >
            Recently Viewed
          </NuxtLink>
          <NuxtLink
            to="/contact"
            title="Contact - OMDB Viewer App"
            class="text-white hover:text-slate-400 text-sm"
          >
            Contact
          </NuxtLink>
        </div>
        <button
          class="md:hidden text-white hover:text-slate-400"
          @click.prevent="showMenu = !showMenu"
        >
          Menu
        </button>
      </nav>
    </div>
    <transition name="expand">
      <div
        v-show="showMenu"
        class="container mx-auto p-8 bg-slate-100 md:hidden"
      >
        <nav class="flex flex-col">
          <NuxtLink
            to="/movies"
            title="Movies - OMDB Viewer App"
            class="text-black hover:text-slate-400 text-xl mb-6"
            @click.prevent="showMenu = !showMenu"
          >
            Movies
          </NuxtLink>
          <NuxtLink
            to="/series"
            title="Series - OMDB Viewer App"
            class="text-black hover:text-slate-400 text-xl mb-6"
            @click.prevent="showMenu = !showMenu"
          >
            Series
          </NuxtLink>
          <NuxtLink
            to="/recently-viewed"
            title="Recently Viewed - OMDB Viewer App"
            class="text-black hover:text-slate-400 text-xl mb-6"
            @click.prevent="showMenu = !showMenu"
          >
            Recently Viewed
          </NuxtLink>
          <NuxtLink
            to="/contact"
            title="Contact - OMDB Viewer App"
            class="text-black hover:text-slate-400 text-xl"
            @click.prevent="showMenu = !showMenu"
          >
            Contact
          </NuxtLink>
        </nav>
      </div>
    </transition>
  </header>
</template>

<style>
.expand-enter-active,
.expand-leave-active {
  transition:
    max-height 0.3s ease-in-out,
    opacity 0.3s ease-in-out;
  overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
  max-height: 0;
  opacity: 0;
}

.expand-enter-to,
.expand-leave-from {
  max-height: 300px;
  opacity: 1;
}
</style>
