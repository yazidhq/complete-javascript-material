// Rest Parameter
// mempresentasikan argumen pada function dengan jumlah yang tidak terbatas menjadi sebuah array

function myFunc(...myArgs) {
  return myArgs;
  //   return arguments;
  //   return Array.from(arguments);
  //   return [...arguments];
}
console.log(myFunc(1, 2, 3, 4, 5));

// jumlahkan
function jumlahkan(...angka) {
  //   let total = 0;
  //   for (const a of angka) {
  //     total += a;
  //   }
  //   return total;
  return angka.reduce((a, b) => a + b); //HOP
}
console.log(jumlahkan(1, 2, 3));

// array destructuring
const kelompok1 = ["Andi", "Dono", "Siti", "Aji"];
const [ketua, wakil, ...anggota] = kelompok1;
console.log(ketua);

// object destructuing
const tim = {
  pm: "Yazid",
  fe1: "Andi",
  fe2: "Dani",
  be: "Siti",
  uiux: "Sukarjo",
  do: "aji",
};
const { pm, ...myTim } = tim;
console.log(myTim);

// filtering
function filterBy(type, ...values) {
  return values.filter((v) => typeof v === type);
}
console.log(filterBy("number", 1, 3, "yazid", 10, true, false, 20, 15));
