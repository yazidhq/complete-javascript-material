// // jquery
// $.ajax({
//   url: "../callback/data/mahasiswa.json",
//   success: (result) => console.log(result),
// });

// // vanilla js
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
//   xhr.open("get", "../callback/data/mahasiswa.json");
//   xhr.send();
// }
// getDataMhs(
//   "data/mahasiswa.json",
//   (results) => {
//     console.log(results);
//   },
//   () => {}
// );

// // fetch
// fetch("../callback/data/mahasiswa.json")
//   .then((response) => response.json())
//   .then((response) => console.log(response));

// PROMISE
// objek yang mempresentasikan keberhasilan/ kegagalan dari sebuah event yang asynchronous
// janji (terpenuhi/ingkar)
// states(fullfilled/rejected/pending)
// callback(resolve/reject/finally)
// aksi(then/catch)

// contoh 1
let ditepati = true;
const janji1 = new Promise((resolve, reject) => {
  if (ditepati) {
    resolve("janji telah ditepati");
  } else {
    reject("ingkar janji");
  }
});
// janji1
//   .then((response) => console.log("OK: " + response))
//   .catch((response) => console.log("NOT OK: " + response));

// contoh 2
const janji2 = new Promise((resolve, reject) => {
  if (ditepati) {
    setTimeout(() => {
      resolve("Ditepati setelah beberapa waktu");
    }, 2000);
  } else {
    setTimeout(() => {
      resolve("Tidak ditepati setelah beberapa waktu");
    }, 2000);
  }
});
// console.log("mulai");
// console.log(
//   janji2
//     .finally(() => console.log("selsai menunggu"))
//     .then((response) => console.log("OK: " + response))
//     .catch((response) => console.log("NOT OK: " + response))
// );
// console.log("selsai");

// Promise.all
const film = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        judul: "Avengers",
        sutradara: "Yazid",
        pemeran: "Andi",
      },
    ]);
  }, 1000);
});
const cuaca = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        kota: "Bekasi",
        temp: "20C",
        kondisi: "mendung",
      },
    ]);
  }, 500);
});
// film.then((response) => console.log(response));
// cuaca.then((response) => console.log(response));

Promise.all([film, cuaca])
  // .then((response) => console.log(response));
  .then((response) => {
    const [film, cuaca] = response;
    console.log(film);
    console.log(cuaca);
  });
