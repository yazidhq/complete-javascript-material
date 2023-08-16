// Pembuatan Object pada JS


// Objeck Literal -> kalo mau buat instansiasi objek baru harus dicopas
// problem : tidak efektif untuk objek yang banyak
let mhs1 = {
    nama: 'Yazid',
    energi : 10,
    makan: function(porsiMakan){
        this.energi += porsiMakan
        console.log(`Energimu ${this.nama} sekarang sebanyak ${this.energi}`)
    }
}
let mhs2 = {
    nama: 'Dhiaulhaq',
    energi : 5,
    makan: function(porsiMakan){
        this.energi += porsiMakan
        console.log(`Energimu ${this.nama} sekarang sebanyak ${this.energi}`)
    }
}


// Function Declaration -> tidak perlu mengulang fucntin, instansiasi baru tinggal buat nama
// problem : terjadi perulangan atau duplikat pada objek pada memori belakang layar
// solusi : buat objek diluar function dan panggil property pada objek ke function
// problem dari solusi: ketika ditambahkan property pada object, harus ditambahin juga di function, jadi 2x pengerjaan
// solusi dari problem diatas : gunakan object.create untuk otomatis membaca object kepemilikan function yang dibuat
function Mhs(nama, energi){
    let mahasiswa = {}
    mahasiswa.nama = nama
    mahasiswa.energi = energi
    mahasiswa.makan = function(porsiMakan){
        this.energi += porsiMakan
        console.log(`Selamat makan ${this.nama} sekarang sebanyak ${this.energi}`)
    }
    mahasiswa.main = function(jamMain){
        this.energi -= jamMain
        console.log(`Selamat main ${this.nama} sekarang sebanyak ${this.energi}`)
    }
    return mahasiswa;
}
let mhs3 = Mhs('Deni', 10)
let mhs4 = Mhs('Dodi', 15)


// Constructor Function -> sama seperti function declaration tapi tidak perlu membuat variabel object dan return, tetapi gunakan new saat instansiasi
function Mahasiswa(nama, energi){
    // default constructor function, jadi tidak perlu ditulis 
    // let this = Object.create(MhsPro.prototype)
    // let this = {}
    this.nama = nama
    this.energi = energi
    this.makan = function(porsiMakan){
        this.energi += porsiMakan
        console.log(`Selamat makan ${this.nama} sekarang sebanyak ${this.energi}`)
    }
    this.main = function(jamMain){
        this.energi -= jamMain
        console.log(`Selamat main ${this.nama} sekarang sebanyak ${this.energi}`)
    }
    // return this
}
let mhs5 = new Mhs('Santi', 10)
let mhs6 = new Mhs('Eka', 15)


// Object.create -> solusi untuk function declaration yang memiliki method property object yang dipisah agar otomatis function yang dibuat kepemilikan object yang dibuat
// problem : kerja 2x yaitu membuat 2 object
const methodMhs = {
    makan: function(porsiMakan){
        this.energi += porsiMakan
        console.log(`Selamat makan ${this.nama} energimu sekarang sebanyak ${this.energi}`)
    },
    main: function(jamMain){
        this.energi -= jamMain
        console.log(`Selamat main ${this.nama} energimu sekarang sebanyak ${this.energi}`)
    },
    tidur: function(jamTidur){
        this.energi += jamTidur * 2
        console.log(`Selamat tidur ${this.nama} energimu sekarang sebanyak ${this.energi}`)
    }
}
function MhsObj(nama, energi){
    let mahasiswa = Object.create(methodMhs) //digunakan untuk menghubungkan objeck ke objeck lain yang menjadi parent object
    mahasiswa.nama = nama
    mahasiswa.energi = energi
    // harus ditambah ketika method ditambah pada object. Maka, gunakan object.create untuk otomatis
    // mahasiswa.makan = methodMhs.makan
    // mahasiswa.main = methodMhs.main
    // mahasiswa.tidur = methodMhs.tidur
    return mahasiswa;
}
let mhs7 = MhsObj('Sumanto', 10)
let mhs8 = MhsObj('Danang', 15)


// prototype -> solusi dari problem pada object.create
function MhsPro(nama, energi){
    this.nama = nama
    this.energi = energi
}
MhsPro.prototype.makan = function(porsiMakan){
    this.energi += porsiMakan
    return console.log(`Selamat makan ${this.nama}, energimu sekarang sebanyak ${this.energi}`)
}
MhsPro.prototype.main = function(jamMain){
    this.energi += jamMain
    return console.log(`Selamat main ${this.nama}, energimu sekarang sebanyak ${this.energi}`)
}
MhsPro.prototype.tidur = function(jamTidur){
    this.energi += jamTidur
    return console.log(`Selamat tidur ${this.nama}, energimu sekarang sebanyak ${this.energi}`)
}
let mhs9 = new MhsPro('Sukro', 15)


// JS pada object awalnya tidak memiliki class seperti pemograman object umumnya, tapi JS menggunakan prototype inheritance
// Tapi bisa juga membuat class pada JS
// Versi Class Pada JS
class MhsClass {
    constructor(nama, energi){
        this.nama = nama
        this.energi = energi
    }
    makan(porsiMakan){
        this.energi += porsiMakan
    return console.log(`Selamat makan ${this.nama}, energimu sekarang sebanyak ${this.energi}`)
    }
    main(jamMain){
        this.energi += jamMain
        return console.log(`Selamat main ${this.nama}, energimu sekarang sebanyak ${this.energi}`)
    }
    tidur(){
        this.energi += jamTidur
        return console.log(`Selamat tidur ${this.nama}, energimu sekarang sebanyak ${this.energi}`)
    }
}
let mhs10 = new MhsClass('Kinara', 5)