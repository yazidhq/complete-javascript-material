// Destructuring Assignment
// Memecah atau unpack array atau object

// ARRAY
const perkenalan = ['Halo', 'nama', 'saya', 'Yazid'];
// const [a, b, c, d] = perkenalan

// skip items
const [a, , , d] = perkenalan;
console.log(a);
console.log(d);

// swap items
let x = 1;
let y = 2;
console.log(x);
console.log(y);
[x, y] = [y, x];
console.log(x);
console.log(y);

// return value pada function
function coba(){
    return [9, 10]
};
const [i, j] = coba();
console.log(i);

// Rest parameter
const [o, ...values] = [1,2,3,4,5,6,7];
console.log(values[0]);


// OBJECT
const mhs = {
    nama: 'Yazid',
    umur: 21
};
const {nama, umur} = mhs;
console.log(nama);

// assignment tanpa deklarasi objek
({ alamat, tahun } = { alamat: 'Bekasi', tahun: 21 });
console.log(tahun);

// assign ke variabel baru
const mhs3 = {
    nama: 'Yazid',
    umur: 21
};
const {nama: n, umur: u} = mhs3;
console.log(n);

// memberikan default value
const komik = {
    judul: 'nice',
    penerbit: 'globe'
};
let { judul, penerbit, thn = 200124 } = komik;
console.log(thn);

// memberi nilai default + assign ke variabel baru
const komik2 = {
    judul: 'nice',
    penerbit: 'globe'
};
let { judul:jd, penerbit:pn, thn:th = 200124 } = komik2;
console.log(pn);

// rest paramas
const komik3 = {
    juduls: 'nice',
    penerbit: 'globe',
    tahuns: 400
};
let { juduls, ...valuess} = komik3;
console.log(valuess);

// mengambil field pada object, setelah dikirim sebagai parameter untuk function
const cars = {
    id: 12,
    merk: 'Avanza',
    rilis: 1930
};
function getCarId({id, ...valuesss}){
    return valuesss;
}
console.log(getCarId(cars));


// DESTRUCTURING ADVANCED

// destructer function return value
function plusTimes(a, b){
    return [a + b, a * b];
}
const [jumlah, kali] = plusTimes(5,6);
console.log(jumlah);
console.log(kali);

// function kalkulasi dengan object
function kalkulasi(a, b){
    return {
        tambah: a + b,
        kurang: a - b,
        kalis: a * b,
        bagi: a / b
    }
}
const { bagi, kalis, kurang, tambah } = kalkulasi(3,7)
console.log(kalis)

// destructer function argument
// tanpa destructuring
const mahasiswa = {
    npm: 2352352,
    ayah: 'Dono',
    nilai: {
        tugas: 90,
        uts: 95,
        uas:100
    }
}
function cetakMhs1(mahasiswa1){
    return `Halo, npm saya ${mahasiswa1.npm}, nama ayah saya ${mahasiswa1.ayah}`
}
console.log(cetakMhs1(mahasiswa))

// dengan destructuring
function cetakMhs2({npm, ayah, nilai:{tugas, uts, uas}}){
    return `Halo, npm saya ${npm}, nama ayah saya ${ayah}. Nilai tugas saya ${tugas}`
}
console.log(cetakMhs2(mahasiswa))