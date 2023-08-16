// // DOM Selection

// // getElementById -> mengembalikan element
// // const judul = document.getElementById('judul')
// // judul.style.color = 'red'
// // judul.style.backgroundColor = 'aqua'
// // judul.innerHTML = 'Judul'

// // // getElementsByTagName() -> mengembalikan html collection
// // let p = document.getElementsByTagName('p')
// // // for(let i = 0; i <= p.length; i++){
// // //     p[i].style.backgroundColor = 'salmon'
// // // }
// // p[0].style.backgroundColor = 'salmon'
// // p[1].style.backgroundColor = 'salmon'
// // p[2].style.backgroundColor = 'salmon'
// // p[3].style.backgroundColor = 'salmon'

// // const h1 = document.getElementsByTagName('h1') // walaupun cuman 1 tetap html collection, harus pake index
// // h1[0].style.fontSize = '50px'

// // // getElementsByClassName -> mengembalikan html collection
// // const p1 = document.getElementsByClassName('p1')
// // p1[0].innerHTML = "Diubah dari JS"

// // querySelector -> mengembalikan elemen
// // const p4 = document.querySelector('#b p')
// // p4.style.color = 'green'
// // p4.style.fontSize = '30px'

// // const li2 = document.querySelector('section#b ul li:nth-child(2)')
// // li2.style.backgroundColor = 'orange'

// // // const p = document.querySelector('p') // hanya 1 element pertama
// // // p.innerHTML = 'Paragraf yang diubah'

// // // querySelectorAll -> mengembalikan nodelist (menggunakan angka index)
// // const p = document.querySelectorAll('p')
// // for(let i = 0; i < p.length; i++){
// //     p[i].style.backgroundColor = 'salmon'
// // }

// // MENGUBAH NODE ROOT
// const sectionB = document.getElementById('b')
// const p4 = sectionB.querySelector('p')
// p4.style.backgroundColor = 'salmon'