# Rangkuman JavaScript Dasar

## 1. Pengertian String

String adalah tipe data yang digunakan untuk menyimpan teks atau kumpulan karakter.

Contoh:

```javascript
const namaAplikasi = "TokoBuku";
```

```javascript
let namaLengkap = "Budi Santoso";
```

---

## 2. Pengertian Tipe Data

Tipe data adalah jenis nilai yang disimpan dalam sebuah variabel.

### String

```javascript
const namaProduk = "Sepatu Lari";
```

### Number

```javascript
const hargaSatuan = 350000;
const TARIF_PAJAK = 0.11;
```

```javascript
let jumlahDibeli = 2;
```

### Boolean

Contoh Boolean tidak dibahas pada materi ini, tetapi Boolean memiliki nilai `true` atau `false`.

```javascript
let lulus = true;
```

### Undefined

Variabel yang belum memiliki nilai.

```javascript
let alamat;
```

### Null

Nilai kosong yang sengaja diberikan.

```javascript
let data = null;
```

---

## 3. Pengertian Syntax

Syntax adalah aturan penulisan kode agar dapat dipahami dan dijalankan oleh JavaScript.

Contoh syntax yang benar:

```javascript
let skorPemain = 0;

skorPemain = 50;

console.log(skorPemain);
```

---

## 4. Pengertian Statement

Statement adalah instruksi atau perintah yang dijalankan oleh JavaScript.

Contoh:

```javascript
let jumlahItem = 0;
jumlahItem = jumlahItem + 1;

console.log(jumlahItem);
```

Statement pada kode di atas:

1. `let jumlahItem = 0;`
2. `jumlahItem = jumlahItem + 1;`
3. `console.log(jumlahItem);`

---

## 5. Pengertian Variable

Variable adalah wadah untuk menyimpan data sementara di dalam memori komputer agar dapat digunakan kembali dalam program.

Contoh:

```javascript
let namaLengkap = "Budi Santoso";
```

### let

Digunakan jika nilai variabel dapat berubah.

```javascript
let skorPemain = 0;

skorPemain = 50;
```

### const

Digunakan jika nilai variabel tidak berubah.

```javascript
const nilaiPhi = 3.14;
const TARIF_PAJAK = 0.11;
```

### var

Merupakan cara lama untuk membuat variabel dan sudah tidak direkomendasikan.

```javascript
var email = "budi@email.com";
var email = "ani@email.com";
```

