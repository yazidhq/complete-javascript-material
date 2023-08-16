const bg = document.querySelector('.bg')
bg.addEventListener('click', function(){
    // document.body.style.backgroundColor = 'salmon'
    // document.body.setAttribute('class', 'salmon')
    document.body.classList.toggle('salmon')
})

// membuat tombol baru dan disimpan setelah tombol bg
const acakWarna = document.createElement('button')
const textAcakWarna = document.createTextNode('Acak warna')
acakWarna.appendChild(textAcakWarna)
bg.after(acakWarna)

acakWarna.addEventListener('click', function(){
    const r = Math.floor(Math.random() * 255 + 1)
    const g = Math.floor(Math.random() * 255 + 1)
    const b = Math.floor(Math.random() * 255 + 1)
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
})

// warna dengan slider
const red = document.querySelector('input[name=red]')
const green = document.querySelector('input[name=green]')
const blue = document.querySelector('input[name=blue]')
red.setAttribute('min', '0')
red.setAttribute('max', '255')
green.setAttribute('min', '0')
green.setAttribute('max', '255')
blue.setAttribute('min', '0')
blue.setAttribute('max', '255')
red.addEventListener('input', function(){
    document.body.style.backgroundColor = `rgb(${red.value}, ${green.value}, ${blue.value})`
})
green.addEventListener('input', function(){
    document.body.style.backgroundColor = `rgb(${red.value}, ${green.value}, ${blue.value})`
})
blue.addEventListener('input', function(){
    document.body.style.backgroundColor = `rgb(${red.value}, ${green.value}, ${blue.value})`
})