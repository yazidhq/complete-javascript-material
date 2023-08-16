// Method pada array

// Join
// let arr = ['yazid', 'dhialhaq', 'ismail']
// console.log(arr.join('-')) // defaultnya (,)

// push & pop (belakang)
// arr.push('deni', 'andi', 'santi') // bisa 1 atau lebih
// arr.pop() // satu persatu
// console.log(arr.join(', '))

// unshift(menambah) & shift(mengurangi) (depan)
// arr.unshift('deni', 'santi') // 1 atau lebih
// arr.shift() //satu persatu
// console.log(arr.join(', '))

// splice -> splice(indexAwal, mauHapusBerapa, elemen1, elemen2, ..)
// let arr = ['yazid', 'dhialhaq', 'ismail']
// arr.splice(2, 1, 'Deni', 'Santi') // 1 atau lebih
// console.log(arr.join(', '))

// slice -> slice(awalIndex, akhir)
// let arr = ['yazid', 'dhialhaq', 'ismail', 'deni', 'santi']
// let arr2 = arr.slice(2, 4)
// console.log(arr2.join(', '))

// foreach (perulangan menampilkan array) (tidak dalam bentuk array)
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let arr = ['yazid', 'dhialhaq', 'ismail']
// // num.forEach(function(e){
// //     console.log(e)
// // })
// //function(isi array, index array)
// arr.forEach(function(e, i){ 
//     console.log('ke-' + (i+1) + ' adalah ' + e)
// })

// map (mengembalikan dalam bentuk array)
// let num = [1, 6, 2, 7,8, 4, 5, 9, 3, 5]
// let num2 = num.map(function(e){
//     return e;
// })
// console.log(num2)
// console.log(num2.join())

// sort (mengurutkan)
// let num = [1, 6, 2, 10, 20, 25, 7,8, 4, 5, 9, 3, 5]
// num.sort()
// let num2 = [1, 6, 2, 10, 20, 25, 7,8, 4, 5, 9, 3, 5]
// num2.sort(function(a,b){
//     return a-b
// })
// console.log(num.join())
// console.log(num2.join())

// filter (mencari nilai array dan mengembalikan dalam bentuk array) -> bisa banyak isi array
// let num = [1, 6, 2, 10, 20, 25, 7,8, 4, 5, 9, 3, 5]
// let num2 = num.filter(function(e){
//     return e > 7
// })
// console.log(num2)

// find (mengembalikan dalam bentuk nilai, bukan array) -> hanya 1 isi array yang pertama
let num = [1, 6, 2, 10, 20, 25, 7,8, 4, 5, 9, 3, 5]
let num2 = num.find(function(e){
    return e > 7
})
console.log(num2)