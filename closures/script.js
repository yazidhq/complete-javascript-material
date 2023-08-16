// Pengantar closure : Execution Context, Hoisting, Scope

// Execution Context -> memiliki 2 fase yaitu: Creation dan Execution
console.log(nama)
var nama = 'yazid'

// creation phase pada GLobal Context
// pertama mencari apakah ada variabel atau tidak, jika ada seperti var diatas maka var nama akan diisi undefinde (var nama = undefined)
// jika function, maka function  = fn()
// variable atau function akan dinaikkan keatas (hoisting)
// konsep diatas disebut hoisting
// selain var dan function yang didefinisikan ada hal lain yaitu:
// window = global object
// this = window

// execution phase -> eksekusi program dari atas kebawah
// setelah creation phase didefinisikan, variabel nama berisi undefined, kemudian dijalankan console.log(nama), maka hasilnya undefined karena dijalankan dulu console.log baru nama didefinisikan yazid.
// console.log(sayHello()) // jika console disini maka nama dan umur undefnied
let nama2 = 'dhiaulhaq'
let umur = 21
console.log(sayHello())
function sayHello(){
    return `Halo ${nama}, umur ${umur}`
}
// setiap pemanggilan function, function membuat lokal execution context yang didalamnya terdapat fase creation dan execution
// kalo local execution context selain bisa akses window, bisa juga akses ke arguments
// didalamya juga ada hoisting, hoisting lokal

// scope mencari terlebih dahulu variabel lokal atau terdekat baru mendari keluar scope

// Closure -> function yang dapat mengakses function parentscopenya/ function yang menggunaka lexical scope/ disebut closure karna membutuhkan variabel nama dari parent
function init(){
    let nama = 'Yazid' // local variable 
    function tampilNama(){ // inner function (closure)
        console.log(nama) // akses ke parent variabel
    }
    tampilNama()
}
init()

// Kenapa menggunakan closure?
// - membuat function factories
// - membuat private method

// function factory
function init2(){
    return function(nama){
        console.log(nama) 
    }
}
let panggil = init2()
panggil('dhiaulhaq')

function ucapSalamm(waktu){
    return function(nama){
        console.log(`Halo ${nama}, selamat ${waktu}`)
    }
}
let pagi = ucapSalamm('Pagi')
let siang = ucapSalamm('Siang')
let malam = ucapSalamm('Malam')
pagi('ismail')

// membuat private method
let add = (function(){ //imediately revoke function -> langsung menjalankan function dengan menutup kurung function dan ditambah () diakhir untuk dijalankan
    let counter = 0 // private tanpa diakses dari luar dan nilai tetap tidak bisa diubah
    return function(){
        return ++counter
    }
})();
console.log(add())
console.log(add())
console.log(add())