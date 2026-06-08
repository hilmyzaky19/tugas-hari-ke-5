// soal ke satu

// 5 x 2= 10 + 10 =20 
console.log(10 + 5 * 2)

// (10 + 5)*2 = 30 
console.log(10 +5) *2

// 20 / 2 + 3 = 13
console.log(20/2 + 3)

// 20 / (2+3) =4
console.log(20 / (2+3))

// 10 % 3 = 1
console.log(10%3) 

// soal ke dua//

let a = 15;
let b = 20;
let c = 15;
// jawaban nya false karna 15 g sama dengan 20
console.log (a==b);

// jawaban nya true karna 15 sama-sama 15
console.log(a==c);

// jawaban nya true karna emang 15 g sama denngan 20
console.log(a!=b);

//jawaban nya false karna 15 itu lebih kecil dari pada 20
console.log(a>b);

// jawaban nya benar karna <= itu lebuh kecil atau sama dengan maka 15 dan 15 samaa
console.log(a<=c);

// soal ke 3 //
let umur = 19;
console.log(umur >= 17);

let username = "HilmyZakyRamadhan";
let password = "HilmyGanteng123";
console.log(username == "HilmyZakyRamadhan" && password == "HilmyGanteng123");

// soal nomor 4 //
let admin = true;
let user = false;
console.log("Akses diterima:", admin || user);

// soal ke 5 //
let MieAyam = false;
let NasiGoreng =true;
console.log(MieAyam || NasiGoreng);

// soal nomor 6//
let SudahBayar = true;
let SudahDaftar = true;
console.log(SudahBayar&&SudahDaftar);

let AyamGoreng =true;
let IkanGoreng = false;
console.log(AyamGoreng && IkanGoreng);

let Americano = false;
let Mocaccino = true;
console.log(Americano || Mocaccino);

let jengkol = false;
let petai = false;
console.log(jengkol || petai);

let Eca =true;
console.log(!Eca);

let Hilmy =true;
console.log(!Hilmy);

// soal nomor 7//

let x = 8;
let y = 12;
let z = 5; 
console.log(x > y || x > z);

console.log(x < y && x > z);

console.log(x == 8 || y == 10);

// soal nomor 8 //

let  nilai = 85;
let kehadiran = 90;
let tugas = 70;

console.log(nilai >= 80 && kehadiran >= 80 && tugas >= 70);
console.log(kehadiran >= 90 || tugas >= 80);
console.log(tugas >= 80 || nilai >= 90);

// soal nomor 9 //
let pizza = 10;
let burger = 5;
let pasta = 8;
console.log(pizza > burger && pizza > pasta);
console.log(burger > pizza || burger > pasta);
console.log(pizza > burger && pizza > pasta);

// tugas nomor 10//
let Asus = 6;
let Lenovo = 2;

console.log((Asus * 2 > 10) && (Lenovo % 2 == 0)); 

let xiomi = 8;
let samsung = 10;

console.log((xiomi * 2 > 10) && (samsung % 2 == 0));

let nokia = 15;
let mito = 4;

console.log((nokia * 2 > 10) && (mito % 2 == 0)); 