# CRUD API Manajemen To-Do List Posting Media Sosial

## 📌 Deskripsi Singkat
API ini memungkinkan pengguna untuk mengelola daftar to-do list posting media sosial dengan fitur CRUD. API ini dibuat menggunakan **Express.js** dan **PostgreSQL dengan Sequelize** sebagai ORM.

---

## 🚀 Fitur Utama
- ✅ **Manajemen Postingan** (Tambah, Baca, Edit, Hapus)
- ✅ **Manajemen Platform** (Tambah, Baca, Edit, Hapus)
- ✅ **Manajemen Status** (Baca)
- ✅ **Swagger API Documentation**

---

## 🛠 Teknologi yang Digunakan
- **Backend:** Express.js
- **Database:** PostgreSQL
- **ORM:** Sequelize
- **API Documentation:** Swagger

---

## ⚙️ Persyaratan (Requirements)
Pastikan Anda telah menginstal:
- [Node.js](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [NPM](https://www.npmjs.com/) atau [Yarn](https://yarnpkg.com/)

---

## 🔧 Instalasi & Menjalankan Proyek
```sh
# 1. Clone Repository
$ git clone hhttps://github.com/sanatanadhrm/Management-Posts.git
$ cd Management-Posts

# 2. Install Dependencies
$ npm install

# 3. Konfigurasi Environment Variables
Buat file `.env` di root project dan isi dengan contoh di bawah ini.

# 5. Jalankan Server
$ npm run start
```
Server akan berjalan di `http://localhost:3000` (sesuai konfigurasi Anda).

---

## 🌍 Environment Variables (.env)
```env
PORT=3000
DB_HOST=localhost
DB_USER=postgres
DB_PASS=yourpassword
DB_NAME=todo_list
DB_PORT=5432
```

---

## 📜 Dokumentasi API & Endpoint
📌 **Swagger Documentation:** Setelah server berjalan, buka `http://localhost:3000/api-docs`.

### **📝 Daftar Endpoint Utama**
| Metode | Endpoint | Deskripsi |
|--------|----------|------------|
| **POST** | `/post/add` | Tambah postingan baru |
| **GET** | `/post` | Ambil semua postingan |
| **GET** | `/post/:id` | Ambil postingan berdasarkan ID |
| **PUT** | `/post/update/:id` | Perbarui postingan |
| **DELETE** | `/post/delete/:id` | Hapus postingan |

### **📌 Contoh Request & Response**
#### **1. Menambahkan Postingan Baru**
**Request:**
```sh
curl -X POST "http://localhost:3000/post/add" \
     -H "Content-Type: application/json" \
     -d '{
         "title": "Hello World",
         "platformId": 1,
         "brand": "Brand A",
         "due_date": "2025-12-31",
         "statusId": 1,
         "payment": 100000
     }'
```
**Response (201 Created):**
```json
{
  "status": "success",
  "data": {
    "id": 1,
    "title": "Hello World",
    "platformId": 1,
    "status": "Pending"
  },
  "message": "Postingan berhasil ditambahkan"
}
```

---

## 📂 Struktur Folder
```sh
📦 nama-proyek
├── 📂 src
│   ├── 📂 Applications # menangani bisnis logic per usecase
│   │   ├── 📂 usecase
│   │   │   ├── 📂 platformUseCase
│   │   │   ├── 📂 postUseCase
│   │   │   ├── 📂 statusUseCase
│   ├── 📂 Commons
│   │   ├── 📂 exceptions
│   ├── 📂 config # Konfigurasi Swagger
│   ├── 📂 Domains # menangani validasi input/output
│   │   ├── 📂 platform\entities
│   │   ├── 📂 post\entities
│   │   ├── 📂 status\entities
│   ├── 📂 Infrastructures # konfigurasi framewrok dan database
│   │   ├── 📂 database
│   │   ├── 📂 http
│   │   ├── 📂 models\sequelize
│   │   ├── 📂 repository\postgre
│   ├── 📂 Interfaces # konfigurasi handler dan route seriap case
│   │   ├── 📂 http\api
│   │   │   ├── 📂 platform
│   │   │   ├── 📂 post
│   │   │   ├── 📂 status
│   ├── app.ts # Entry point aplikasi
├── .env # Konfigurasi lingkungan
├── package.json # Dependencies
├── README.md # Dokumentasi proyek
├── tsconfig.json # Konfigurasi TypeScript
```

---



