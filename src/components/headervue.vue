<template>
  <nav class="bg-white fixed w-full z-20 px-6 py-4 shadow">
    <div class="lg:items-center lg:justify-between lg:flex">
      <div class="flex items-center justify-between">
        <router-link to="/" class="mx-auto">
          <img class="w-auto h-14 sm:h-16" src="../assets/png/logo-MERAH-1.png" alt="" />
        </router-link>

        <!-- Mobile menu button -->
        <div class="lg:hidden">
          <button
            @click="toggleMenu"
            type="button"
            class="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
            aria-label="toggle menu"
          >
            <svg
              v-if="!isOpen"
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
            </svg>

            <svg
              v-if="isOpen"
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <div
        :class="[isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full']"
        class="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white shadow-md lg:bg-transparent lg:shadow-none lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center"
      >
        <router-link
          to="/"
          class="block px-3 py-2 text-gray-600 rounded-lg hover:bg-gray-100 lg:mx-2"
          >Home</router-link
        >
        <router-link
          to="/diagnose"
          class="block px-3 py-2 text-gray-600 rounded-lg hover:bg-gray-100 lg:mx-2"
          >Diagnosa</router-link
        >
        <a href="#" class="block px-3 py-2 text-gray-600 rounded-lg hover:bg-gray-100 lg:mx-2"
          >Contact</a
        >
      </div>
    </div>
  </nav>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const isOpen = ref(false)

    const toggleMenu = () => {
      isOpen.value = !isOpen.value
    }

    return {
      isOpen,
      toggleMenu
    }
  }
}
</script>

<style scoped>
/* Sesuaikan dengan kebutuhan styling */
</style>
