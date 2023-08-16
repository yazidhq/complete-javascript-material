// Callback
// -function yang dikirimkan sebagai parameter pada funfction location
// -function yang dieksseskusi setelah function lain selesai dijalankan

// Synchronous Callback
function halo(nama) {
  alert(nama);
}
function tampilPesan(callBack) {
  const nama = prompt("Masukan nama");
  callBack(nama);
}
// tampilPesan(halo);

// jika tidak menggunakan asynchronous
// const mhs = [
//   {
//     nama: "Yazid",
//     npm: 31120174,
//     email: "yazid@Gmail.com",
//     jurusan: "manejemen",
//     idWali: 1,
//   },
//   {
//     nama: "Dono",
//     npm: 31120175,
//     email: "dono@Gmail.com",
//     jurusan: "manejemen",
//     idWali: 2,
//   },
//   {
//     nama: "Andi",
//     npm: 31120176,
//     email: "andi@Gmail.com",
//     jurusan: "manejemen",
//     idWali: 2,
//   },
// ];
// console.log("mulai");
// // lama dalam eksekusi
// mhs.forEach((m) => {
//   for (let i = 0; i < 10000000; i++) {
//     let date = new Date();
//   }
//   console.log(m.nama);
// });
// // harus menunggu eksekusi diatas selesai
// console.log("selesai");

// Asynchronous Callback (ajax dengan vanilla js)
// function getDataMhs(url, success, error) {
//   let xhr = new XMLHttpRequest();
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//       if (xhr.status === 200) {
//         success(xhr.response);
//       } else if (xhr.status === 404) {
//         error();
//       }
//     }
//   };

//   xhr.open("get", url);
//   xhr.send();
// }

// console.log("mulai");
// getDataMhs(
//   "data/mahasiswa.json",
//   (results) => {
//     const mhs = JSON.parse(results);
//     mhs.forEach((m) => console.log(m.nama));
//   },
//   () => {}
// );
// console.log("selesai");

// Asynchronous Callback (ajax dengan jquery)
console.log("mulai");
$.ajax({
  url: "data/mahasiswa.json",
  success: (mhs) => {
    mhs.forEach((m) => console.log(m.nama));
  },
  error: (e) => {
    console.log(e.responseText);
  },
});
console.log("selesai");
