// Spread Operator
// operator yang memecah iterable menjadi single element

const mhs = ['Yazid', 'Dono', 'Siti']
console.log(...mhs)

// Menggabubgkan 2 array
const dosen = ['Andi', 'Budi']
const orang = [...mhs, 'Aji', ...dosen]
console.log(orang)

// Mengcopy array
const mhs1 = [...mhs]
mhs1[0] = 'Fajar'
console.log(mhs1)

// looping nodelist dengan spread operator
const liMhs = document.querySelectorAll('li')
const mahasiswa = [...liMhs].map(m => m.textContent)
console.log(mahasiswa)

// select single elemen dari h1 html
const namas = document.querySelector('.namas')
const huruf = [...namas.textContent].map(h => `<span>${h}</span>`).join('')
namas.innerHTML = huruf