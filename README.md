# Menu Astara Hotel

Ini merupakan preview aplikasi menu astara hotel menggunakan vue 2+vite dan plugin flipbook-vue. PWA is supported but hasn't yet tested.

## Cara Penggunaan
1. Clone repository ini (optional, tapi recommended) dengan cara
   ```bash
	git clone https://github.com/fahmiegerton/flipbook-astara
	```
   atau download langsung dengan menekan tombol download.
2. Pastikan NodeJS sudah terinstall (minimum versi 14)
3. Install dependensi dengan cara, buka terminal/cmd dari folder project, lalu ketik :
   jikalau menggunakan yarn
   ```bash
	yarn
	```
   jikalau menggunakan npm (tidak ada yarn)
   ```bash
	npm install
	```
4. Lalu konfigurasi sesuai kebutuhan (Lihat bagian konfigurasi)
5. Jika telah selesai dikonfigurasi, build aplikasi dengan cara :
   ```bash
	yarn build
	```
6. Folder dist akan tergenerate. Taruh semua isi dalam folder dist ke hosting Anda.


## Konfigurasi
Terdapat beberapa konfigurasi sebelum membuild aplikasi ini.

### - File Gambar
File gambar yang hanya disupport saat ini hanya file dengan ekstensi `.jpg`. Pastikan seluruh file gambar ber-ekstensi tersebut. Untuk konfigurasi file gambarnya, terdapat dua file gambar, gambar utama dan gambar asli. 
- Gambar Utama (Wajib).
  Gambar utama terdapat di folder `src > assets > menus`. Disini Anda meletakkan semua gambar yang ingin ditaruh dalam flipbook. Aplikasi akan secara otomatis memasukkan semua gambar dalam folder ini kedalam flipbook.
   > Ingat! Dimensi file gambar harus sama pada semua file.

- Gambar Asli (Tidak wajib).
  Gambar asli merupakan file gambar asli dari gambar utama. Ini digunakan saat user akan memperbesar (zoom) file gambar utama sehingga tidak akan pecah. Kenapa ada opsi ini? Karena untuk mempercepat loading gambar utama sehingga ukuran gambar utama tidak perlu besar (kecil saja, biasanya 50KB-100KB). File gambar ini bisa ditemukan/ditaruh di dalam `src > assets > menusprev`.

### - Konfigurasi Flipbook
Untuk mengkonfigurasi flipbook, edit file `gambar.json` di folder `src > assets > gambar.json`. Berikut penjelasannya.

- `useSingleSource` (true/false, default: `false`) : Set true jika hanya ingin menggunakan gambar utama saja (walaupun jika Anda sudah mengisi gambar asli, jika Anda set true, maka gambar asli tidak akan digunakan/diload).
- `flipDuration` (default: `2000`, dalam ms) : Atur berapa lama waktu animasi flip buku (saat swipe buku).


## Menjalankan Secara Lokal
Untuk dapat menjalankan secara lokal, Anda dapat menjalankannya dengan perintah :
```bash
yarn dev
```

atau dengan npm
```bash
npm run dev
```

## Build Aplikasi
Untuk dapat menjalankannya pada hosting untuk produksi, cukup jalankan 
```bash
yarn build
```

atau jika tidak menggunakan yarn, bisa dengan npm dengan cara :
```bash
npm run build
```

### Memasukkan Aplikasi Dalam Hosting
Setelah build aplikasi sukses, maka akan ada folder bernama `dist`. Upload seluruh isi dist ke dalam folder `public_html` (atau folder `public` Anda). Namun, jika ingin menjalankan aplikasi yang sudah di build secara lokal, dapat menjalankan perintah dibawah ini.
```bash
yarn preview
```

atau dengan npm
```bash
npm run preview
```

#### Catatan untuk subfolder hosting
Untuk memasukkan folder dalam hosting yang memiliki subfolder (seperti http://mywebsite.domain/mytruewebsite), ada beberapa pengaturan yang harus disesuaikan. Anda hanya perlu menambahkan baris ini di dalam `vite.config.js` seperti ini:

```javascript
// isi file vite.config.js

import { defineConfig, loadEnv } from 'vite'
const { createVuePlugin } = require('vite-plugin-vue2');
import { VitePWA } from 'vite-plugin-pwa'

process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

// https://vitejs.dev/config/
export default defineConfig({
  base: '/mytruewebsite/', // tambahkan baris ini kedalam vite.config.js diatas baris plugins
  plugins: [createVuePlugin(), VitePWA({
    registerType: 'autoUpdate',
    manifest: {
      // .....
    }
  })],
})

```

Setelah itu, disimpan, lalu build ulang dan taruh seluruh isi `dist` ke dalam folder public di hosting Anda (contoh: `public_html`).