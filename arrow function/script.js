// // Pembuatan arrow function

// // function declaration
// function nama(nama){
//     return console.log(`halo ${nama}`)
// }
// nama('yazid')

// // function expression
// let umur = function(umur){
//     return console.log(`umur kamu ${umur}`)
// }
// umur(21)

// // arrow function -> meringkas penulisan function
// let stats = stats => { //argument 1 tanpa kurung, jika tanpa parameter harus ditulis ()
//     return console.log(`status kamu ${stats}`)
// }
// stats('mahasiswa')

// let biodata = (nama, lahir) => {  //argument 2 tanpa kurung
//     return console.log(`nama: ${nama}. lahir: ${lahir}`)
// }
// biodata('yazid', 'bekasi')

// // lebih meringkas arrow function -> implisit return
// let biodata2 = (nama, lahir) => `nama: ${nama}. lahir: ${lahir}`
// console.log(biodata2('dodi', 'bogor'))


// // function map -> memetakan function kedalam array 
// // let mhs = ['yazid', 'dhiaulhaq', 'ismail']
// // let jmlhMhs = mhs.map((nama) => nama.length)
// // console.log(jmlhMhs)

// // jika ingin mengembalikan nilai object dari function diatas
// let mhs = ['yazid', 'dhiaulhaq', 'ismail']
// // nama: nama -> nama (jika property dan nilai sama, bisa tuliskan salah satunya)
// let jmlhMhs = mhs.map((nama) => ({nama, jmlhHuruf: nama.length}))
// console.table(jmlhMhs)



// konsep this pada arrow function

// constructor function
// const Mhs = function(){
//     this.nama = 'Yazid'
//     this.umur = 21
//     this.sayHello = function(){
//         console.log(`Saya ${this.nama}, ${this.umur} tahun`)
//     }
// }
// const yazid = new Mhs();

// arrow constructor function -> tidak bisa langsug menggunakan arrow karena arrow function tidak bisa menyimpan konteks this
// const Mhs = function(){
//     this.nama = 'Yazid'
//     this.umur = 21
//     this.sayHello = () => {
//         console.log(`Saya ${this.nama}, ${this.umur} tahun`)
//     }
// }
// const yazid = new Mhs();

// object literal
// const Mhs1 = {
//     nama: 'Yazid',
//     umur: 21,
//     sayHello: () => { // tidak akan membaca this seabgai object Mhs1, tetapi sebagai windows sehingga akan undefined
//         console.log(`Saya ${this.nama}, ${this.umur} tahun`)
//     }
// }

// arrow function tidak menyimpan konteks this, sehingga this pada arrow function sifatnya lexical scope atau mencari diluarnya tidak ke windows
// jika this pada function biasa, this bersifat windows.
// const Mhs = function(){
//     this.nama = 'Yazid'
//     this.umur = 21
//     this.sayHello = function() {
//         console.log(`Saya ${this.nama}, ${this.umur} tahun`)
//     }
//     setInterval(() => {
//         console.log(this.umur++)
//         // thisnya windows jika menggunakan function(){}
//         // thisnya lexical scope jika menggunakan arrow function, yaitu onject MHs
//     }, 500)
// }
// const yazid = new Mhs();


// Contoh Kasus penggunaan Arrow Function
const box = document.querySelector('.box')
box.addEventListener('click', function(){
    let satu = 'size'
    let dua = 'caption'

    if(this.classList.contains(satu)){
        [satu, dua] = [dua, satu]
    }

    this.classList.toggle(satu) // this disini bersifat lexical scope, maka this adalah box
    setTimeout(() => {
        this.classList.toggle(dua) 
    }, 600);
})