// decisionTree.js

const decisionTree = {
  K1: {
    gejalas: {
      G1: 'Baterai atau aki cepat habis atau boros',
      G2: 'Baterai berkurang sendiri pada saat kendaraan tidak digunakan',
      G3: 'Usia baterai berkisar 10 Tahun atau lebih',
      G4: 'Pengisian baterai dilakukan ketika baterai kurang dari 20%',
      G5: 'Laju kendaraan terasa terhambat'
    },
    solutions: {
      G1: ['S4'],
      G2: ['S7'],
      G3: ['S9'],
      G4: ['S7'],
      G5: ['S6', 'S3']
    }
  },
  K2: {
    gejalas: {
      G6: 'Dinamo berkarat',
      G7: 'Kendaraan berbunyi tidak seperti biasanya',
      G8: 'Kendaraan belum dilakukan service/perawatan selama 3 bulan terakhir'
    },
    solutions: {
      G6: ['S1', 'S5'],
      G7: ['S6'],
      G8: ['S6']
    }
  },
  K3: {
    gejalas: {
      G9: 'Lampu utama kendaraan mati',
      G10: 'Lampu speedometer kendaraan mati',
      G11: 'Lampu pada stoplamp mati'
    },
    solutions: {
      G9: ['S8', 'S2'],
      G10: ['S8', 'S2'],
      G11: ['S8', 'S2']
    }
  }
}

export default decisionTree
