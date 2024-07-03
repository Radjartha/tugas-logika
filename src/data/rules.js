export const data = {
  gejala: [
    { kode: 'G1', uraian: 'Baterai atau aki cepat habis atau boros' },
    { kode: 'G2', uraian: 'Baterai berkurang sendiri pada saat kendaraan tidak digunakan' },
    { kode: 'G3', uraian: 'Usia baterai berkisar 10 Tahun atau lebih' },
    { kode: 'G4', uraian: 'Pengisian baterai dilakukan ketika baterai kurang dari 20%' },
    { kode: 'G5', uraian: 'Laju kendaraan terasa terhambat' },
    { kode: 'G6', uraian: 'Dinamo berkarat' },
    { kode: 'G7', uraian: 'Kendaraan berbunyi tidak seperti biasanya' },
    { kode: 'G8', uraian: 'Kendaraan belum dilakukan service/perawatan selama 3 bulan terakhir' },
    { kode: 'G9', uraian: 'Lampu utama kendaraan mati' },
    { kode: 'G10', uraian: 'Lampu speedometer kendaraan mati' },
    { kode: 'G11', uraian: 'Lampu pada stoplamp mati' }
  ],
  kerusakan: [
    { kode: 'K1', uraian: 'Kerusakaan pada baterai atau aki kendaraan listrik' },
    { kode: 'K2', uraian: 'Kerusakan pada dinamo atau motor kendaraan listrik' },
    { kode: 'K3', uraian: 'Kerusakan pada kelistrikan kendaraan listrik' }
  ],
  solusi: [
    { kode: 'S1', uraian: 'Tidak melibas banjir' },
    { kode: 'S2', uraian: 'Tidak melakukan modifikasi di bagian elektrikal sembarangan' },
    { kode: 'S3', uraian: 'Menggunakan baterai sesuai dengan spesifikasi yang dibutuhkan' },
    { kode: 'S4', uraian: 'Saat pengisian baterai, jangan sampai overcharge' },
    { kode: 'S5', uraian: 'Hindari kubangan air atau cuaca curah hujan ekstrim' },
    { kode: 'S6', uraian: 'Melakukan servis atau perawatan rutin 3 bulan sekali pada kendaraan' },
    { kode: 'S7', uraian: 'Tidak melakukan pengisian baterai sebelum baterai dibawah 20%' },
    { kode: 'S8', uraian: 'Periksa kabel-kabel pada kendaraan jika ada yang putus' },
    { kode: 'S9', uraian: 'Ganti ke baterai baru' },
    { kode: 'S10', uraian: 'Lakukan pembersihan pada dinamo kendaraan' }
  ],
  aturan: [
    { kerusakan: 'K1', gejala: ['G1'], solusi: ['S4'] },
    { kerusakan: 'K1', gejala: ['G2'], solusi: ['S7'] },
    { kerusakan: 'K1', gejala: ['G3'], solusi: ['S9'] },
    { kerusakan: 'K1', gejala: ['G4'], solusi: ['S7'] },
    { kerusakan: 'K1', gejala: ['G5'], solusi: ['S6', 'S3'] },
    { kerusakan: 'K2', gejala: ['G6'], solusi: ['S1', 'S5'] },
    { kerusakan: 'K2', gejala: ['G7'], solusi: ['S6'] },
    { kerusakan: 'K2', gejala: ['G8'], solusi: ['S6'] },
    { kerusakan: 'K3', gejala: ['G9'], solusi: ['S8', 'S2'] },
    { kerusakan: 'K3', gejala: ['G10'], solusi: ['S8', 'S2'] },
    { kerusakan: 'K3', gejala: ['G11'], solusi: ['S8'] }
  ]
}
