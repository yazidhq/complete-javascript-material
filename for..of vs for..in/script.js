// For..of Array
const mhs = ['Dono', 'Siti', 'Andi']

// for biasa
// for(let i = 0; i < mhs.length; i++){
//     console.log(mhs[i])
// }

// forEach
// mhs.forEach(m => console.log(m))

// for..of
// for(const m of mhs){
//     console.log(m)
// }


// For..of String
const nama = 'Yazid'
for( const n of nama ){
    console.log(n)
}

for(const [i, m] of mhs.entries()){
    console.log(`${m} adalah mahasiswa ke-${i}`)
}

// For..of NodeList
const liNama = document.querySelectorAll('.nama')

// forEach
liNama.forEach(n => console.log(n.innerHTML))

// for..of
for(n of liNama){
    console.log(n.innerHTML)
}

// For..of Arguments
function jumlahAngka(){
    let jumlah = 0
    for(a of arguments){
        jumlah += a
    }
    return jumlah
}
console.log(jumlahAngka(1, 3, 5, 7, 9))


// For..in : untuk property pada objek
const mahasiswa = {
    nama: 'Yazid',
    umur: 21,
    email: 'yazid@gmail.com'
}
for(m in mahasiswa){
    console.log(mahasiswa[m])
}