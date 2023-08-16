// // Higher Order Function
// // Function yang beroperasi pada function lain.
// // Baik itu digunakan dalam argument, maupun sebagai return value

// // JS memperlaukan function sebagai object

// // Contoh Sederhana
// // Function yang disimpan didalam argument disebut CallBack
// // function yang memiliki callback disebut Higher Order Function
// // function kerjakanTugas(matkul, selesai){
// //     console.log(`Mulai mengerjakan tugas ${matkul}`)
// //     selesai()
// // }
// // function selesai(){
// //     console.log('Selesai mengerjakan tugas')
// // }
// // kerjakanTugas(`B.Indonesia`, selesai)

// // Contoh Higher Order Function yang sering digunakan
// // Array.prototype.filter() -> memfilter
// // Array.prototype.map() -> memetakan elemen ke fungsi array baru
// // Array.prototype.reduce() -> melakukan sesuatu terhadap seluruh elemen

// const angka = [-1, 2, 8, 9, -5, 3. -2, 7, -1, 4]

// // mencari angka >= 3 menggunakan for (manual)
// // const newAngka = []
// // for(let i = 0; i <= angka.length; i++){
// //     if(angka[i] >= 3){
// //         newAngka.push(angka[i])
// //     }
// // }
// // console.log(newAngka.sort())

// // menggunakan HOF Array.prototype.filter() mencari angka >= 3
// const newAngka = angka.filter(e => e >= 3)
// console.log(newAngka)

// // Array.prototype.map() => mengalikan semua angka dengan 2
// const newAngka2 = angka.map(e => e >= 3 ? e * 2 : e)
// console.log(newAngka2)

// // Array.prototype.reduce() => menjumlahkan seluruh elemen
// // reduce memiliki 2 argument yaitu (akumulasi, element array yang sedang di looping)
// const newAngka3 = angka.reduce((accumulator, curentValue) => accumulator + curentValue)
// console.log(newAngka3)

// // Method Chaining -> menggabungkan semua fungsi diatas kedalam 1 eksekusi
// // cari angka <= 5
// // kalikan 3
// // jumlah semua elemen
// const hasil = angka.filter(e => e > 5).map(e => e * 3).reduce((x, y) => x + y)
// console.log(hasil) 