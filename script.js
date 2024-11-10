// Javasript Fundamentals
// 1. Number
let hargaMieInstan = 3500;
let ratingMieGoreng = 4.5;
console.log(hargaMieInstan,ratingMieGoreng);

// 2. String
let namaMie = "Mie Goreng Spesial";
let deskripsi = '/Mie goreng dengan bumbu khas Indonesia';
console.log(namaMie+deskripsi);

// 3. Boolean 
// let tersedia = true;
// let stokHabis = false;
// alert(stokHabis);

// 4. Undefined
let tanggalKadaluarsa;
console.log(tanggalKadaluarsa);

// 5. Null
let diskon = null;
console.log(diskon);

// 6. Object 
let mieGoreng = {
    nama: "Mie Goreng Special",
    harga: 15000,
    tersedia: true,
    toping: ["telur", "ayam", "sayur"]
};
console.log(mieGoreng);

// 7. Array 
let daftarMie = [
    "Mie Goreng",
    "Mie Kuah",
    "Mie Rebus",
    "Mie Pangsit"
];
console.log(daftarMie);

// 8. Symbol
let idMieGoreng = Symbol("MG001");
console.log(idMieGoreng);

// 9. BigInt
let totalPenjualanTahunan = 9007199254740991n;
let targetPenjualan = BigInt(9007199254740991);

let penjualanBulanDepan = 1234567890n;
let proyeksiTotal = totalPenjualanTahunan + penjualanBulanDepan;

console.log("Total Penjualan Tahunan:", totalPenjualanTahunan);
console.log("Proyeksi Total:", proyeksiTotal);

// 10. Operator typeof
let hargaMie = 15000;
let namaMakanan = "Mie Goreng Special";
let tersedia = true;
let daftarMenu = ["Mie Goreng", "Mie Kuah"];
let detailMie = {
    nama: "Mie Goreng",
    harga: 15000
};
let tidakAda;
let kosong = null;
let idProduk = Symbol("MG001");
let omzetHarian = 9007199254740991n;

function cekTipeData() {
    console.log("\n=== Pengecekan Tipe Data ===");
    console.log("typeof hargaMie:", typeof hargaMie);          
    console.log("typeof namaMakanan:", typeof namaMakanan);   
    console.log("typeof tersedia:", typeof tersedia);         
    console.log("typeof daftarMenu:", typeof daftarMenu);      
    console.log("typeof detailMie:", typeof detailMie);        
    console.log("typeof tidakAda:", typeof tidakAda);          
    console.log("typeof kosong:", typeof kosong);              
    console.log("typeof idProduk:", typeof idProduk);         
    console.log("typeof omzetHarian:", typeof omzetHarian);    
    
    console.log("\n=== Pengecekan Array ===");
    console.log("Array.isArray(daftarMenu):", Array.isArray(daftarMenu));     // true
    console.log("Array.isArray(detailMie):", Array.isArray(detailMie));       // false
    
    console.log("\n=== Pengecekan Null ===");
    console.log("kosong === null:", kosong === null);          // true
}

cekTipeData();
try {
    console.log("\n=== Contoh Perhitungan ===");
    console.log("Total:", hitungTotal(15000, 2));          // Works: 30000
    console.log("Total:", hitungTotal("15000", 2));        // Error: bukan number
} catch (error) {
    console.log("Error:", error.message);
}

// Javascript Function
// 1. Define Practice
function printHeart() {
  console.log("<3");
}

printHeart(); 

// 2. Return Value Practice
function multiply(a, b) {
  return a * b;
}

console.log(multiply(2, 3)); 
console.log(multiply(9, 9)); 
console.log(multiply(5, 4)); 

// 3. Scope Practice
// A.
let animal = "Giant Pacific Octopus";
function observe() {
  let animal = "Pajama Squid";
  console.log(animal);
}
observe();
console.log(animal);

// B.
let deadlyAnimal = "Blue-Ringed Octopus";
function handleAnimal() {
  let deadlyAnimal = "Scorpionfish";
  console.log(deadlyAnimal);
}
handleAnimal();
console.log(deadlyAnimal);

// 4. Arrow Function Exercise
const sayHello = (name) => {
  return `Hello ${name}!`;
}

console.log(sayHello("Hagrid")); 
console.log(sayHello("Luna")); 

// Javascript Exception
// 1. Callback
function greetUser(name, callback) {
    let greeting = `Hello, ${name}!`;
    callback(greeting);
  }
  
  function printGreeting(message) {
    console.log(message);
  }
  
  greetUser('Clara', printGreeting);

// 2. setTimeout
function greetUser(name) {
    console.log(`Hello, ${name}!`);
  }
  
  setTimeout(function() {
    greetUser("Putri");
  }, 3000);

// 3. setInterval
let count = 0;

function incrementAndPrint() {
  count++;
  console.log("Count:", count);
}

let intervalId = setInterval(incrementAndPrint, 2000);

setTimeout(function() {
  clearInterval(intervalId);
  console.log("Interval stopped.");
}, 10000);

// 4. Try/Catch&Throw
function divideBySeven(num) {
    try {
      if (num === 0) {
        throw new Error("Cannot divide by zero");
      }
      let result = 7 / num;
      return result;
    } catch (error) {
      console.log(error.message);
      return "Error occurred";
    }
  }
  
  console.log(divideBySeven(2)); 
  console.log(divideBySeven(0)); 
  console.log(divideBySeven(7)); 