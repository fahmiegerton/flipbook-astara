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
Terdapat dua file gambar, gambar utama dan gambar asli. 
- Gambar Utama (Wajib).
  Gambar utama terdapat di folder `src > assets > menus`. Disini Anda meletakkan semua gambar yang ingin ditaruh dalam flipbook. Aplikasi akan secara otomatis memasukkan semua gambar dalam folder ini kedalam flipbook.
   > Ingat! Dimensi file gambar harus sama pada semua file.

- Gambar Asli (Tidak wajib).
  Gambar asli merupakan file gambar asli dari gambar utama. Ini digunakan saat user akan memperbesar (zoom) file gambar utama sehingga tidak akan pecah. Kenapa ada opsi ini? Karena untuk mempercepat loading gambar utama sehingga ukuran gambar utama tidak perlu besar (kecil saja, biasanya 50KB-100KB).

### - Konfigurasi Flipbook
Untuk mengkonfigurasi flipbook, edit file `gambar.json` di folder `src > assets > gambar.json`. Berikut penjelasannya.

- `useSingleSource` (true/false, default: `false`) : Set true jika hanya ingin menggunakan gambar utama saja (walaupun jika Anda sudah mengisi gambar asli, jika Anda set true, maka gambar asli tidak akan digunakan/diload).
- `flipDuration` (default: `2000`, dalam ms) : Atur berapa lama waktu animasi flip buku (saat swipe buku).


## Menjalankan Secara Lokal
Untuk dapat menjalankan secara lokal, Anda dapat menjalankannya dengan perintah :
```bash
yarn preview
```

atau dengan npm
```bash
npm run preview
```