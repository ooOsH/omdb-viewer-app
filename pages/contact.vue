<script setup lang="ts">
const contactForm = ref({
  fullname: '',
  email: '',
  message: '',
})

const onSubmit = () => {
  console.log('Form submitted')
}
</script>

<template>
  <section class="container mx-auto px-4 sm:px-6 lg:px-8">
    <h1 class="text-3xl font-bold mb-5">Contact</h1>
    <form class="space-y-4 w-full lg:w-1/2 mb-8" @submit.prevent="onSubmit">
      <div>
        <label for="">Full name</label>
        <input
          v-model="contactForm.fullname"
          type="text"
          name="fullname"
          class="shadow appearance-none border border-slate-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div>
        <label for="email">Email</label>
        <input
          v-model="contactForm.email"
          type="email"
          name="email"
          class="shadow appearance-none border border-slate-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div>
        <label for="">Message</label>
        <textarea
          v-model="contactForm.message"
          name="message"
          rows="10"
          class="shadow appearance-none border border-slate-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        ></textarea>
      </div>
      <button
        type="submit"
        class="shadow appearance-none rounded py-2 px-6 text-white bg-black hover:bg-slate-800 active:bg-slate-600 mb-3 focus:outline-none focus:shadow-outline"
      >
        Send
      </button>
    </form>
  </section>
</template>
