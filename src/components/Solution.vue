<template>
  <div class="bg-white p-4 rounded shadow-md mt-4">
    <h2 class="text-xl font-semibold mb-4">Hasil Diagnosa</h2>
    <ul class="list-disc list-inside">
      <li v-for="solusi in solutions" :key="solusi">{{ solusi }}</li>
    </ul>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  solution: Array
})

const solutions = computed(() => {
  const dataSolutions = {
    K1: 'Kerusakaan pada baterai atau aki kendaraan listrik',
    K2: 'Kerusakan pada dinamo atau motor kendaraan listrik',
    K3: 'Kerusakan pada kelistrikan kendaraan listrik'
  }

  return props.solution.map((solusi) => dataSolutions[solusi])
})
</script>
