# Vocatask Task Management API 📝

API untuk manajemen task sederhana dengan fitur autentikasi. Dibuat pakai Express.js, MongoDB, dan Swagger docs.

## Tech Stack 🛠

- Node.js & Express.js
- MongoDB dengan Mongoose
- JWT untuk authentication
- Swagger untuk dokumentasi API
- Bcrypt untuk enkripsi password

## Cara Install & Setup 🔧

### 1. Clone Repository

```bash
# Clone repo ini
git clone <url-repo-ini>
```

### 2. Masuk kedalam folder Backend

#### Install Dependencies
```bash
# Masuk ke folder project Backend
cd vocasia-voca-task-be

# Install dependencies yang dibutuhin
npm install
```

#### Setup Environment Variables

Bikin file `.env` di folder vocasia-voca-task-be (Backend). Bisa copy dari `.env.example` terus sesuaiin isinya:

```env
PORT=8080
MONGODB_URI=mongodb://localhost:27017/task_management
JWT_SECRET=rahasia_jwt_kamu  # Ganti dengan secret key yang aman
JWT_EXPIRES_IN=24h  # Token expired dalam 24 jam
```

Tips buat `JWT_SECRET`:
- Jangan pake yang gampang ditebak
- Minimal 32 karakter
- Bisa pake random string generator

#### Jalanin Database Seeder

(Disarankan) Kalo mau punya data awal buat testing, bisa jalanin seeder:

```bash
npm run seed
```

Ini bakal bikin:
- 2 user dummy (john@example.com dan jane@example.com)
- Beberapa task untuk masing-masing user
- Password default: `password123`

#### Jalanin Aplikasi Backend

```bash
# Mode development (pake nodemon)
npm run dev

# Mode production
npm start
```

### 3. Masuk ke dalam folder Frontend

```bash
# Clone repo ini
git clone <url-repo-ini>

# Masuk ke folder project Frontend
cd vocasia-voca-task

# Install dependencies yang dibutuhin
npm install
```
#### Jalanin Aplikasi Frontend

```bash
# Mode development (pake nodemon)
npm run dev
```

## Cara Pakai Website Vocatask Task

1. Buka Browser, ketik `http://localhost:5173/`
2. Login
    ```json
    {
    "email": "john@example.com",
    "password": "password123"
    }
    ```
3. Bikin Task Baru, Hapus Task, dan Done Task (`http://localhost:5173/task`)
4. Edit Profile, Ganti Foto, Nama, Email, maupun Password (`http://localhost:5173/profile`)

## Cara Pake Swagger UI  (Cek keberhasilan Backend)

1. Buka browser, ketik: `http://localhost:8080/docs`

2. Cara Authentication di Swagger:
   - Login dulu pake endpoint `/api/users/login`
   - Copy token dari response
   - Klik tombol "Authorize" (🔓) di bagian atas
   - Tulis: `<token>` yang kamu dapat dari login, di field `value` (kalo di swagger udah otomatis ditambahin `Bearer` utk prefix tokennya, kalo pake postman butuh ditambah manual)
   - Klik "Authorize"
   - Sekarang bisa akses endpoint yang butuh auth! 🎉

### Contoh Request di Swagger

#### Login
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

#### Bikin Task Baru
```json
{
  "title": "Bikin dokumentasi API"
}
```

## Endpoints API 🚀

### Users
- `POST /api/users/login` - Login user
- `GET /api/users/profile` - Ambil detail user yang login
- `PUT /api/users/profile` - Update profile user

### Tasks
- `POST /api/tasks` - Bikin task baru
- `GET /api/tasks` - Ambil semua task user yang login
- `PATCH /api/tasks/:id/done` - Update task jadi selesai
- `DELETE /api/tasks/:id` - Hapus task

## Tips Penggunaan 💡

1. **Testing API:**
   - Bisa pake Swagger UI (recommended buat yang baru mulai)
   - Bisa juga pake Postman
   - Jangan lupa selalu pake token di header: `Authorization: Bearer <token>`

2. **Troubleshooting:**
   - Kalau ada error "Unauthorized", cek tokennya:
     - Udah pake format "Bearer" belum?
     - Token masih valid ga? (expired setelah 24 jam)
     - Token udah bener belum formatnya?
   
   - Kalau MongoDB error:
     - MongoDB udah jalan belum di local?
     - URI di .env udah bener?

3. **Best Practices:**
   - Jangan share JWT_SECRET ke siapa-siapa
   - Ganti password default dari seeder
   - Test dulu di Swagger sebelum integrasi ke frontend

---

# Reference
**https://github.com/indraahmadfirdaus/vocasia-voca-task-be**