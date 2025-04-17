<script setup lang="ts">
const contactForm = reactive({
  fullname: '',
  email: '',
  message: '',
})

const errors = ref({
  fullname: '',
  email: '',
  message: '',
})

const valid = ref(false)
const submitted = ref(false)

const validateEmail = (value: string) => {
  const emRg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emRg.test(value)
}

const onSubmit = () => {
  // Reset
  valid.value = true
  errors.value = { fullname: '', email: '', message: '' }

  // Validate
  if (!contactForm.fullname.trim()) {
    errors.value.fullname = 'Full name is required.'
    valid.value = false
  } else if (!contactForm.email) {
    errors.value.email = 'Email is required.'
    valid.value = false
  } else if (!validateEmail(contactForm.email)) {
    errors.value.email = 'Email is invalid.'
    valid.value = false
  } else if (!contactForm.message.trim()) {
    errors.value.message = 'Message is required.'
    valid.value = false
  }

  // Submit
  if (valid.value) {
    submitted.value = true
    contactForm.fullname = ''
    contactForm.email = ''
    contactForm.message = ''
  }
}
</script>

<template>
  <section class="container mx-auto px-4 sm:px-6 lg:px-8">
    <h1 class="text-3xl font-bold mb-5">Contact</h1>
    <form
      class="space-y-4 w-full lg:w-1/2 mb-8"
      novalidate
      @submit.prevent="onSubmit"
    >
      <div>
        <div v-if="submitted" class="text-green-500 mb-5">Message sent!</div>
        <label for="">Full name</label>
        <input
          v-model="contactForm.fullname"
          type="text"
          name="fullname"
          class="shadow appearance-none border border-slate-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        />
        <div v-if="errors.fullname" class="text-red-500">
          {{ errors.fullname }}
        </div>
      </div>
      <div>
        <label for="email">Email</label>
        <input
          v-model="contactForm.email"
          type="email"
          name="email"
          class="shadow appearance-none border border-slate-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        />
        <div v-if="errors.email" class="text-red-500">
          {{ errors.email }}
        </div>
      </div>
      <div>
        <label for="">Message</label>
        <textarea
          v-model="contactForm.message"
          name="message"
          rows="10"
          class="shadow appearance-none border border-slate-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        ></textarea>
        <div v-if="errors.message" class="text-red-500">
          {{ errors.message }}
        </div>
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
