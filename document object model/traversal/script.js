// event handler
// const card = document.querySelector('.card')
// const closes = document.querySelector('.close')
// closes.addEventListener('click', function(){
//     card.remove();
// })

// dom traversal -> menelusuri element lain
// const closes = document.querySelectorAll('.close')
// // for(let i = 0; closes.length; i++){
// //     closes[i].addEventListener('click', function(e){
// //         // closes[i].parentElement.remove() //menelusuri siapa parentnya dengan parentElement
// //         e.target.parentElement.remove() //menggunakan event untuk mendapatkan informasi pada element, contohnya target
// //     })
// // }
// // cara lain untuk looping nodelist
// // closes.forEach(function(e){
// //     e.addEventListener('click', function(e){
// //         e.target.parentElement.remove()
// //     })
// // })

// // beberapa metode menggunakan dom traversal
// // const nama = document.querySelector('.nama')
// // console.log(nama.parentElement) //mencari parent element
// // console.log(nama.parentNode) //mencari parent node
// // console.log(nama.nextElementSibling) //mencari sibling element berikutnya
// // console.log(nama.nextSibling) //mencari sibling node berikutnya 
// // console.log(nama.previousElementSibling) //mencari sibling element sebelumnya
// // console.log(nama.previousSibling) //mencari sibling node sebelumnya

// // prevent default : method yang ada didalam object event(e) -> menghentikan aksi default yang dilakukan sebuah element
// closes.forEach(function(e){
//     e.addEventListener('click', function(e){
//         e.target.parentElement.remove()
//         e.preventDefault() // cegah aksi default pada <anchor>
//         e.stopPropagation() // menghentikan event bubbling (langsung menjalankan ini)
//     })
// })

// // event bubbling : ketika punya event pada child, ketika jalankan event child maka parent akan dijalankan juga (menjalankan yang paling atas terlebih dahulu)
// const cards = document.querySelectorAll('.card')
// cards.forEach(function(card){
//     card.addEventListener('click', function(e){
//         alert(e.target)
//     })
// }) // program ini tidak dijalankan karna element child menggunakan stopPropagation

// mengatasi jika membuat card baru secara realtime di inspect elemen yang tidak berfungsi eventnya
const container = document.querySelector('.container')
container.addEventListener('click', function(e){
    if(e.target.className == 'close'){
        e.target.parentElement.remove()
    }
})