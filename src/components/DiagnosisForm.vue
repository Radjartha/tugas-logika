<template>
  <div class="bg-white p-4 rounded shadow-md">
    <h2 class="text-xl font-semibold mb-4">Formulir Diagnosa</h2>
    <div v-if="!selectedK">
      <label class="block text-gray-700 mb-2">Pilih Kategori Kerusakan:</label>
      <select v-model="selectedK" class="block w-full border rounded px-3 py-2">
        <option value="" disabled>Pilih Kategori</option>
        <option v-for="(value, key) in decisionTree" :key="key" :value="key">{{ key }}</option>
      </select>
    </div>
    <div v-else>
      <div class="mb-4" v-for="(description, code) in gejalas" :key="code">
        <label class="block text-gray-700">
          <input type="checkbox" v-model="selectedGejalas" :value="code" />
          {{ description }}
        </label>
      </div>
      <button @click="diagnose" class="bg-blue-500 text-white py-2 px-4 rounded">Diagnosa</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import decisionTree from '../decisionTree'

const selectedK = ref('')
const selectedGejalas = ref([])
const emit = defineEmits(['diagnosis'])

const gejalas = computed(() => {
  return selectedK.value ? decisionTree[selectedK.value].gejalas : {}
})

function diagnose() {
  const solutions = []
  const selectedSolutions = decisionTree[selectedK.value].solutions

  selectedGejalas.value.forEach((gejala) => {
    solutions.push(...selectedSolutions[gejala])
  })

  emit('diagnosis', [...new Set(solutions)])
}
</script>
