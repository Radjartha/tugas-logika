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
    S1: 'Tidak melibas banjir',
    S2: 'Tidak melakukan modifikasi di bagian elektrikal sembarangan',
    S3: 'Menggunakan baterai sesuai dengan spesifikasi yang dibutuhkan',
    S4: 'Saat pengisian baterai, jangan sampai overcharge',
    S5: 'Hindari kubangan air atau cuaca curah hujan ekstrim',
    S6: 'Melakukan servis atau perawatan rutin 3 bulan sekali pada kendaraan',
    S7: 'Tidak melakukan pengisian baterai sebelum baterai di bawah 20%',
    S8: 'Periksa kabel-kabel pada kendaraan jika ada yang putus',
    S9: 'Ganti ke baterai baru',
    S10: 'Lakukan pembersihan pada dinamo kendaraan'
  }

  return props.solution.map((solusi) => dataSolutions[solusi])
})
</script>
