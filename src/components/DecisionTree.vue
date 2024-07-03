<template>
  <div class="container mx-auto justify-between items-center text-center">
    <div v-if="question">
      <p class="text-lg mb-4">{{ question.text }}</p>
      <button @click="answer(true)" class="bg-blue-500 text-white px-4 py-2 mr-2">Yes</button>
      <button @click="answer(false)" class="bg-red-500 text-white px-4 py-2">No</button>
    </div>
    <div v-else>
      <p class="text-lg mb-4">{{ result }}</p>
      <div class="history mb-4">
        <h2 class="text-xl font-bold mb-2">History:</h2>
        <ul>
          <li v-for="(item, index) in history" :key="index">
            {{ item.question }} - <strong>{{ item.answer }}</strong>
          </li>
        </ul>
      </div>
      <button @click="reset" class="bg-green-500 text-white px-4 py-2">Restart</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentQuestion: null,
      question: null,
      result: null,
      history: [],
      questions: {
        G1: {
          text: 'Motor listrik tidak berfungsi sebagai mesti nya, Apakah kelistrikannya aman?',
          yes: 'G2',
          no: 'G3'
        },
        G2: {
          text: 'Apakah Ketika mengisi daya, arus nya terisi atau tidak?',
          yes: 'G4',
          no: 'S1'
        },
        G3: { text: 'Apakah Mesin Bekerja sebagai mesti nya?', yes: 'G5', no: 'G6' },
        G4: { text: 'Apakah Kabel Konektor dirasa aman?', yes: 'S2', no: 'S3' },
        G5: { text: 'Apakah Penggunaan Sudah lebih dari 5.000Km?', yes: 'G7', no: 'G8' },
        G6: { text: 'Apakah menimbulkan bising?', yes: 'S4', no: 'S5' },
        G7: { text: 'Apakah Performa nya melambat?', yes: 'S1', no: 'S3' },
        G8: { text: 'Apakah motor terasa tidak responsif?', yes: 'S6', no: 'S3' }
      },
      solutions: {
        S1: 'Mengganti Baterai atau menggunakan charger lain',
        S2: 'Kencangkan Kembali Konektor',
        S3: 'Bawa Ke Service Center',
        S4: 'Dinamo Kotor',
        S5: 'Perawatan Mesin',
        S6: 'Penggantian Suku Cadang Controller'
      }
    }
  },
  methods: {
    start() {
      this.currentQuestion = 'G1'
      this.question = this.questions[this.currentQuestion]
      this.result = null
      this.history = []
    },
    answer(isYes) {
      const nextStep = isYes ? this.question.yes : this.question.no
      this.history.push({
        question: this.question.text,
        answer: isYes ? 'Yes' : 'No'
      })
      if (this.solutions[nextStep]) {
        this.result = this.solutions[nextStep]
        this.question = null
      } else {
        this.currentQuestion = nextStep
        this.question = this.questions[this.currentQuestion]
      }
    },
    reset() {
      this.start()
    }
  },
  mounted() {
    this.start()
  }
}
</script>
