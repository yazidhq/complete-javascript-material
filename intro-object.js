// membuat objek

// object literal
let mhs1 = {
    nama: 'Yazid Dhiaulhaq Ismail',
    npm: '31120173',
    umur: '21',
    ips: [3.9, 4, 3.8, 4, 4],
    alamat: {
        tempat: 'Jl. baru',
        kota: 'Bekasi',
        provinsi: 'Jawa Barat'
    }
}
let mhs2 = {
    nama: 'Deni Sumirul',
    npm: '31120173',
    umur: '90',
    ips: [3.9, 4, 3.8, 4, 4],
    alamat: {
        tempat: 'Jl. baru',
        kota: 'Depok',
        provinsi: 'Jawa Barat'
    }
}
console.log(mhs1.nama)
console.log(mhs2.nama)

// function declaration
function buatObjectMhs(nama, npm, umur, ips, alamat){
    let mhs = {
        nama: nama,
        npm: npm,
        umur: umur,
        ips: ips,
        alamat: alamat
    }
    return mhs
}
let mhs3 = buatObjectMhs('Dono', '001', '100', [3.9, 4, 3.8, 4, 4], {tempat: 'Jl. baru', kota: 'Depok', provinsi: 'Jawa Barat'})
let mhs4 = buatObjectMhs('Sukardi', '002', '100', [3.9, 4, 3.8, 4, 4], {tempat: 'Jl. baru', kota: 'Depok', provinsi: 'Jawa Barat'})
console.log(mhs3.nama)
console.log(mhs4.nama)

// constructor function
function Mahasiswa(nama, npm, umur, ips, alamat){
    // let this = {}
    this.nama = nama
    this.npm = npm
    this.umur = umur
    this.ips = ips
    this.alamat = alamat
    // return this
}
let mhs5 = new Mahasiswa('Dananag', '3', '100', [3.9, 4, 3.8, 4, 4], {tempat: 'Jl. baru', kota: 'Depok', provinsi: 'Jawa Barat'})
console.log(mhs5.nama)

// Konsep THIS -> otomatis didefiniskan pada setiap function

// object literal -> this mengembalikan object yang bersangkutan atau object sendiri yaitu obj
let obj = {
    nama: 'yazid',
    umur: 21,
    halo: function(){
        console.log(this)
        console.log('halo')
    }
}
obj.halo()

// function declaration -> this mengembalikan object global (window)
function halo(){
    console.log(this)
    console.log('halo')
}
halo()

// constructor function -> mengembalikan object tapi bukan object yang bersangkutan tetapi membuat object yang baru dibuat
function Halo(){
    console.log(this)
    console.log('halo')
}
let obj1 = new Halo() //mengembalikan object baru yaitu obj1
let obj2 = new Halo() //mengembalikan object baru yaitu obj2
console.log(obj1)