import { Router } from "express";
import PostHandler from "./handler";

const routes = (router: Router, handler: PostHandler) => {
    router.post('/add', handler.postPlatformHandler);
    router.get('/', handler.getPostHandler);
    router.get('/:id', handler.getPostByIdHandler);
    router.put('/update/:id', handler.putPostHandler);
    router.delete('/delete/:id', handler.deletePostHandler);
}

export default routes;

/**
 * @swagger
 * tags:
 *   name: Posts
 *   description: Manajemen postingan media sosial
 */

/**
 * @swagger
 * /post/add:
 *   post:
 *     summary: Menambahkan postingan baru
 *     tags: [Posts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - platformId
 *               - brand
 *               - due_date
 *               - statusId
 *               - payment
 *             properties:
 *               title:
 *                 type: string
 *                 description: Judul postingan
 *                 example: "Hello World"
 *               platformId:
 *                 type: integer
 *                 description: ID platform
 *                 example: 1
 *               brand:
 *                 type: string
 *                 description: Nama brand
 *                 example: "Brand A"
 *               due_date:
 *                 type: string
 *                 format: date
 *                 description: Tanggal jatuh tempo postingan (format YYYY-MM-DD)
 *                 example: "2025-12-31"
 *               statusId:
 *                 type: integer
 *                 description: ID status postingan
 *                 example: 1
 *               payment:
 *                 type: integer
 *                 description: Jumlah pembayaran
 *                 example: 100000
 *     responses:
 *       201:
 *         description: Postingan berhasil ditambahkan
 *         content:
 *           application/json:
 *             example:
 *               status: "success"
 *               data:
 *                 id: 1
 *                 title: "Hello World"
 *                 platform: "Instagram"
 *                 status: "Pending"
 *               message: "Post added successfully"
 *       400:
 *          description: Gagal membuat post baru karena kesalahan validasi atau data tidak valid
 *          content:
 *           application/json:
 *             example:
 *               FieldKosong:
 *                  status: "fail"
 *                  message: "tidak dapat membuat post baru karena properti yang dibutuhkan tidak ada"
 *               TipeDataSalah:
 *                  status: "fail"
 *                  message: "tidak dapat membuat post baru karena tipe data tidak sesuai"
 *               PlatformIdTidakAda:
 *                 status: "fail"
 *                 message: "platform tidak ditemukan"
 *               StatusIdTidakAda:
 *                 status: "fail"
 *                 message: "status tidak ditemukan"
 *          
 */

/**
 * @swagger
 * /post:
 *   get:
 *     summary: Mendapatkan semua postingan
 *     tags: [Posts]
 *     responses:
 *       200:
 *         description: Daftar semua postingan
 *         content:
 *           application/json:
 *             example:
 *               status: "success"
 *               data:
 *                 - id: 1
 *                   title: "Hello World"
 *                   platform: "Instagram"
 *                   status: "Pending"
 *                   payment: 100000
 *                   due_date: "2025-02-18T16:25:21.414Z"
 *                   brand: "Brand A"
 *                   created_at: "2025-02-18T16:25:21.414Z"
 *                   updated_at: "2025-02-18T16:25:21.414Z"
 *                 - id: 2
 *                   title: "Hello World 2"
 *                   platform: "Facebook"
 *                   status: "Approved"
 *                   payment: 200000
 *                   due_date: "2025-02-18T16:25:21.414Z"
 *                   brand: "Brand B"
 *                   created_at: "2025-02-18T16:25:21.414Z"
 *                   updated_at: "2025-02-18T16:25:21.414Z"
 *               message: "Post fetched successfully"
 */

/**
 * @swagger
 * /post/{id}:
 *   get:
 *     summary: Mendapatkan postingan berdasarkan ID
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID postingan yang ingin dicari
 *     responses:
 *       200:
 *         description: Detail postingan yang ditemukan
 *         content:
 *           application/json:
 *             example:
 *               status: "success"
 *               data:
 *                 id: 1
 *                 title: "Hello World"
 *                 platform: "Instagram"
 *                 status: "Pending"
 *                 payment: 100000
 *                 due_date: "2025-02-18T16:25:21.414Z"
 *                 brand: "Brand A"
 *                 created_at: "2025-02-18T16:25:21.414Z"
 *                 updated_at: "2025-02-18T16:25:21.414Z"
 *               message: "Post fetched successfully"
 *       404:
 *         description: Postingan tidak ditemukan
 *         content:
 *           application/json:
 *             example:
 *               Postingan tidak ditemukan:
 *                  status: "fail"
 *                  message: "Post tidak ditemukan"
 */

/**
 * @swagger
 * /post/update/{id}:
 *   put:
 *     summary: Memperbarui postingan berdasarkan ID
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID postingan yang ingin diperbarui
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Updated Post"
 *               statusId:
 *                 type: integer
 *                 example: 2
 *               payment:
 *                 type: integer
 *                 example: 200000
 *               due_date:
 *                 type: string
 *                 format: date
 *                 example: "2025-02-18T16:25:21.414Z"
 *               brand:
 *                 type: string
 *                 example: "Brand B"
 *     responses:
 *       200:
 *         description: Postingan berhasil diperbarui
 *         content:
 *           application/json:
 *             example:
 *               status: "success"
 *               data:
 *                 id: 1
 *                 title: "Hello World"
 *                 platform: "Instagram"
 *                 status: "Published"
 *                 payment: 100000
 *                 due_date: "2025-02-18T16:25:21.414Z"
 *                 brand: "Brand A"
 *                 updated_at: "2025-02-18T16:25:21.414Z"
 *                 message: "Post fetched successfully"
 *       404:
 *        description: Postingan tidak ditemukan
 *        content:
 *          application/json:
 *           example:
 *             status: "fail"
 *             message: "post tidak ditemukan"
 *       400:
 *         description: Gagal memperbarui postingan
 *         content:
 *           application/json:
 *              example:
 *                TipeDataSalah:
 *                  status: "fail"
 *                  message: "tidak dapat memperbarui post karena tipe data tidak sesuai"
 *                PostTidakAda:
 *                  status: "fail"
 *                  message: "post tidak ditemukan"
 *                PlatformIdTidakAda:
 *                  status: "fail"
 *                  message: "platform tidak ditemukan"
 *                StatusIdTidakAda:
 *                  status: "fail"
 *                  message: "status tidak ditemukan"
 *                FieldKosong:
 *                  status: "fail"
 *                  message: "tidak dapat memperbarui post karena properti yang dibutuhkan tidak ada"
 */

/**
 * @swagger
 * /post/delete/{id}:
 *   delete:
 *     summary: Menghapus postingan berdasarkan ID
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID postingan yang ingin dihapus
 *     responses:
 *       200:
 *         description: Postingan berhasil dihapus
 *         content:
 *           application/json:
 *             example:
 *               status: "success"
 *               message: "Post deleted successfully"
 *       404:
 *         description: Postingan tidak ditemukan
 *         content:
 *          application/json:
 *           example:
 *            status: "fail"
 *            message: "post tidak ditemukan"
 *       400:
 *         description: Gagal menghapus postingan variable tidak tepat
 *         content:
 *          application/json:
 *           example:
 *            status: "fail"
 *            message: "tidak dapat menghapus post karena tipe data tidak sesuai"
 * 
 */

