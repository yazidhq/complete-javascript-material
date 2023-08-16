// // MANIPULATION DOM

// // innerHTML
// // const judul = document.getElementById('judul')
// // judul.innerHTML = 'Judul'
// // const sectionA = document.querySelector('#a')
// // sectionA.innerHTML= 'Hello World'

// // style css
// // const judul = document.querySelector('#judul')
// // judul.style.color = 'green'
// // judul.style.backgroundColor = 'green'

// // manipulasi attribut
// // const judul = document.querySelector('#judul')
// // judul.setAttribute('name', 'judul')
// // judul.setAttribute('class', 'judul')
// // let name = judul.getAttribute('name')
// // console.log(name)
// // judul.removeAttribute('class')

// // class list attribut
// // const p2 = document.querySelector('.p2')
// // p2.classList.add('label') //menambah class
// // p2.classList.remove('label) //menghapus class

// // const judul = document.querySelector('#judul')
// // const btn = document.querySelector('#button')
// // btn.addEventListener('click', function(){
// //     judul.classList.toggle('biru-muda') //true jika tidak ada class, false jika sudah ada (menambah dan menghilangkan sesuai kondisi ada atau tidak)
// // })

// // console.log(p2.classList.item(1)) //memanggil class urutan ke 1 (index dari 0)
// // console.log(p2.classList.contains('label')) //cek apakah ada class label

// // p2.classList.replace('label', 'labels') //menggantikan class label menjadi labels


// // DOM MANIPULATION : 2

// // membuat elemen node
// const pBaru = document.createElement('p') //membuat elemen
// const textPBaru = document.createTextNode('Paragraf Baru') //membuat text
// // menyimpan textpbaru ke pbaru (menyimpan node ke dalam node)
// pBaru.appendChild(textPBaru)
// // menyimpan pbaru ke akhir section A
// const sectionA = document.querySelector('#a')
// sectionA.appendChild(pBaru)

// // membuat item baru ditengah tengah item lainnya pada section B
// const liBaru = document.createElement('li')
// const textLiBaru = document.createTextNode('Item Baru')
// liBaru.appendChild(textLiBaru)
// const ul = document.querySelector('#b ul')
// const li2 = ul.querySelector('li:nth-child(2)')
// ul.insertBefore(liBaru, li2) //parent.meth od(nodeBaru, disimpanSebelumNodeIni)

// // menghapus child atau anak elemen (cari parent terlebih dahulu kemudian seleksi yang ingin dihapus)
// const p1 = document.querySelector('.p1')
// sectionA.removeChild(p1)

// // menggantikan node menjadi node baru
// const sectionB = document.querySelector('#b')
// const p4 = sectionB.querySelector('p')

// const h1Baru = document.createElement('h1')
// const textH1Baru = document.createTextNode('Judul Baru')
// h1Baru.appendChild(textH1Baru)

// sectionB.replaceChild(h1Baru, p4) //parent.method(nodeBaru, nodeLama)