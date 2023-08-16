// Ambil semua elemen video
const videos = Array.from(document.querySelectorAll('[data-duration]'))

// Pilih hanya yang teknik
let teknik =  videos.filter(e => e.innerHTML.includes('Teknik'))

// Ambil durasi masing masing video
.map(e => e.dataset.duration)

// Ubah durasi menjadi float dan ubah menit menjadi detik
// 10:30 -> [10, 30] (split) => * nilai ke 0 ditambah nilai ke 1
.map(e => parseFloat(e.split(':')[0] * 60 + [1]))

// Jumlah semua detik
.reduce((x, y) => x + y)

// Ubah detik menjadi jam menit detik
const jam = Math.floor(teknik / 3600)
teknik = teknik - jam * 3600
const menit = Math.floor(teknik / 60)
const detik = teknik - menit * 60

// simpan di DOM
const durasi = document.querySelector(`.total-durasi`)
const jmlVideo = document.querySelector(`.jumlah-video`)
const banyakVideo = videos.filter(e => e.innerHTML.includes('Teknik')).length
durasi.innerHTML = `${jam}:${menit}:${detik}`
jmlVideo.innerHTML= `${banyakVideo} videos`