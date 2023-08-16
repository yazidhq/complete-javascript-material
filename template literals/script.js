// const nama = 'Yazid'
// const umur = 23
// console.log(`Nama saya ${nama}, umur ${umur}`)


// const mhs = {
//     nama: 'Yazid',
//     umur: 20,
//     npm: '31120183'
// }
// const el = `<div class="mhs">
// <h2>${mhs.nama}</h2>
// <h2>${mhs.umur}</h2>
// <h2>${mhs.npm}</h2>
// </div>`
// console.log(el)

// LATIHAN Looping
// let mhs = [
//     {
//         nama: 'yazid',
//         umur: 21
//     },
//     {
//         nama: 'doni',
//         umur: 18
//     },
//     {
//         nama: 'santi',
//         umur: 27
//     },
// ]
// const el = `<div class="mhs">
// ${mhs.map(m => `<ul>
// <li>${m.nama}</li>
// <li>${m.umur}</li>
// </ul>`).join('')}
// </div>`
// document.body.innerHTML = el

// Kondisi
// const lagu =[ 
//     {
//         judul: 'Kau adalah',
//         penyanyi: 'isyana',
//         feat: 'rayi'
//     },
//     {
//         judul: 'Tetap dalam jiwa',
//         penyanyi: 'isyana',
//     }
// ]
// const el = `<div class="lagu">
//  ${lagu.map(l => `<ul>
//     <li>${l.judul}</li>
//     <li>${l.penyanyi}</li>
//     ${l.feat ? `<li>feat. ${l.feat}</li>` : ''}
//  </ul>` ).join('')}
// </div>`
// document.body.innerHTML = el

// bersarang atau nested
// const mhs = {
//     nama: 'Yazid',
//     smt: 6,
//     matkul: ['indo', 'web', 'inggris'],
// }
// function cetakMatkul(matkul){
//     return `
//     <ol>
//         ${matkul.map(m => `<li>${m}</li>`).join('')}
//     </ol>
//     `
// }
// const el = `<div class="mhs">
// <h2>${mhs.nama}</h2>
// <span>semester : ${mhs.smt}</span>
// <h4 class="">Matakuliah</h4>
// ${cetakMatkul(mhs.matkul)}
// </div>`
// document.body.innerHTML = el

// TAGGED TEMPLATES
// const umur = 21
// const nama = 'Yazid Dhiaulhaq'
// function coba(strings, ...values){
//     // let result = ''
//     // strings.forEach((str, i) => {
//     //     result += `${str}${values[i] || ''}`
//     // })
//     // return result

//     // menggunakan reduce agar lebih singkat (HOP)
//     return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '')

// }
// const str = coba`Halo, saya ${nama}, berumur ${umur}`
// console.log(str)

// Contoh Highlight nama
const umur = 21
const nama = 'Yazid Dhiaulhaq'
const email = 'yazid@gmail.com'
function highlight(strings, ...values){
    return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ''}</span>`, '')
}
const str = highlight`Halo, saya ${nama}, berumur ${umur} dan email saya ${email}`
document.body.innerHTML = str