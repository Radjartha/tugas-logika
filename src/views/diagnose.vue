<template>
  <div class="min-h-screen bg-gray-100 p-4">
    <h1 class="text-3xl font-bold mb-6 text-center">Sistem Pakar Diagnosa Kendaraan Listrik</h1>
    <DiagnosisForm @diagnosis="handleDiagnosis" />
    <Solution v-if="solution" :solution="solution" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import DiagnosisForm from '../components/DiagnosisForm.vue'
import Solution from '../components/Solution.vue'

const solution = ref(null)

function handleDiagnosis(result) {
  solution.value = result
}
</script>
