// event click

// inline html dengan onclick (event handeler)
const p3 = document.querySelector('.p3')
function ubahp3(){
    p3.style.backgroundColor = 'salmon'
}

// addEventListiner (event listener)
const p4 = document.querySelector('#b p')
p4.addEventListener('click', function() {
    const ul = document.querySelector('#b ul')

    iBaru = document.createElement('li')
    textIBaru = document.createTextNode('item baru')
    iBaru.appendChild(textIBaru)

    ul.appendChild(iBaru)
})

// perbedaan eventhandler dan eventlistiner
// event handler menimpa program sebelumnya
const p1 = document.querySelector('.p1')
p1.onclick = function() {
    p1.style.backgroundColor = 'green'
}
p1.onclick = function() { // yang jalan hanya ini dan memberhentikan event diatas
    p1.style.color = 'red'
}
// eventlistener -> kedua program dibawah jalan semua
const p2 = document.querySelector('.p2')
p2.addEventListener('click', function(){
    p2.style.backgroundColor = 'green'
})
p2.addEventListener('mouseenter', function(){
    p2.style.backgroundColor = 'blue'
})
p2.addEventListener('mouseleave', function(){
    p2.style.backgroundColor = 'red'
})