<template>
  <div class="bg-white p-4 rounded shadow-md">
    <h2 class="text-xl font-semibold mb-4">Formulir Diagnosa</h2>
    <form @submit.prevent="diagnose">
      <div class="mb-4" v-for="gejala in gejalas" :key="gejala.code">
        <label class="block text-gray-700">
          <input type="checkbox" v-model="selectedGejalas" :value="gejala.code" />
          {{ gejala.description }}
        </label>
      </div>
      <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded">Diagnosa</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const gejalas = ref([
  { code: 'G1', description: 'Baterai atau aki cepat habis atau boros' },
  { code: 'G2', description: 'Baterai berkurang sendiri pada saat kendaraan tidak digunakan' },
  { code: 'G3', description: 'Usia baterai berkisar 10 Tahun atau lebih' },
  { code: 'G4', description: 'Pengisian baterai dilakukan ketika baterai kurang dari 20%' },
  { code: 'G5', description: 'Laju kendaraan terasa terhambat' },
  { code: 'G6', description: 'Dinamo berkarat' },
  { code: 'G7', description: 'Kendaraan berbunyi tidak seperti biasanya' },
  {
    code: 'G8',
    description: 'Kendaraan belum dilakukan service/perawatan selama 3 bulan terakhir'
  },
  { code: 'G9', description: 'Lampu utama kendaraan mati' },
  { code: 'G10', description: 'Lampu speedometer kendaraan mati' },
  { code: 'G11', description: 'Lampu pada stoplamp mati' }
])

const selectedGejalas = ref([])
const emit = defineEmits(['diagnosis'])

function diagnose() {
  const rules = [
    { conditions: ['G1'], solutions: ['K1'] },
    { conditions: ['G2'], solutions: ['K1'] },
    { conditions: ['G3'], solutions: ['K1'] },
    { conditions: ['G4'], solutions: ['K1'] },
    { conditions: ['G5'], solutions: ['K1'] },
    { conditions: ['G6'], solutions: ['K2'] },
    { conditions: ['G7'], solutions: ['K2'] },
    { conditions: ['G8'], solutions: ['K2'] },
    { conditions: ['G9'], solutions: ['K3'] },
    { conditions: ['G10'], solutions: ['K3'] },
    { conditions: ['G11'], solutions: ['K3'] }
  ]

  const matchedRules = rules.filter((rule) =>
    rule.conditions.every((condition) => selectedGejalas.value.includes(condition))
  )

  const solutions = matchedRules.flatMap((rule) => rule.solutions)
  const uniqueSolutions = [...new Set(solutions)]
  emit('diagnosis', uniqueSolutions)
}
</script>
