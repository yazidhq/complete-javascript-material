// const coba = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("selesai");
//   }, 2000);
// });
// console.log(coba);
// coba.then(() => console.log(coba));

// menerapkan async await
function cobaPromise() {
  return new Promise((resolve, reject) => {
    const waktu = 2000;
    if (waktu < 1000) {
      setTimeout(() => {
        resolve("selesai");
      }, waktu);
    } else {
      reject("kelamaan");
    }
  });
}

// const coba = cobaPromise();
// error handling pada promise
// coba.then(() => console.log(coba)).catch(() => console.log(coba));

async function cobaAsync() {
  // error handling pada async await
  try {
    const coba = await cobaPromise();
    console.log(coba);
  } catch (err) {
    console.error(err);
  }
}
cobaAsync();

// error handling pada fetch: fetch didalamnya merupakan promise
// fetch adalah api atau fungsi yang sudah ada pada js
