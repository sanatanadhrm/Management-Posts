import { Router } from "express";
import PlatformHandler from "./handler";

/**
 * @swagger
 * tags:
 *   name: Platforms
 *   description: Manajemen platform untuk postingan media sosial
 */

/**
 * @swagger
 * /platform/add:
 *   post:
 *     summary: Menambahkan platform baru
 *     tags: [Platforms]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nama platform
 *                 example: "Instagram"
 *     responses:
 *       201:
 *         description: Platform berhasil ditambahkan
 *         content:
 *           application/json:
 *             example:
 *               status: "success"
 *               data:
 *                 id: 1
 *                 name: "Instagram"
 *               message: "Platform added successfully"
 *       400:
 *          description: Gagal menambah platform baru karena kesalahan validasi atau data tidak valid
 *          content:
 *           application/json:
 *             example:
 *               FieldKosong:
 *                  status: "fail"
 *                  message: "tidak dapat membuat platform baru karena properti yang dibutuhkan tidak ada"
 *               TipeDataSalah:
 *                  status: "fail"
 *                  message: "tidak dapat membuat platform baru karena tipe data tidak sesuai"
 *               PlatformSudahAda:
 *                 status: "fail"
 *                 message: "platform sudah ada"
 *          
 */

/**
 * @swagger
 * /platform:
 *   get:
 *     summary: Mendapatkan semua platform
 *     tags: [Platforms]
 *     responses:
 *       200:
 *         description: Daftar semua platform
 *         content:
 *           application/json:
 *             example:
 *               status: "success"
 *               data:
 *                 - id: 1
 *                   name: "Instagram"
 *                   created_at: "2021-01-01T00:00:00.000Z"
 *                   updated_at: "2021-01-01T00:00:00.000Z"
 *                 - id: 2
 *                   name: "Facebook"
 *                   created_at: "2021-01-01T00:00:00.000Z"
 *                   updated_at: "2021-01-01T00:00:00.000Z"
 *               message: "Platform fetched successfully"
 */
/**
 * @swagger
 * /platform/update:
 *   put:
 *     summary: Memperbarui platform berdasarkan ID
 *     tags: [Platforms]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: number
 *                 description: ID platform
 *                 example: 1
 *               name:
 *                 type: string
 *                 description: Nama platform
 *                 example: "Updated Platform"
 *     responses:
 *       200:
 *         description: Platform berhasil diperbarui
 *         content:
 *           application/json:
 *             example:
 *               status: "success"
 *               data:
 *                 id: 1
 *                 name: "Updated Platform"
 *             message: "Platform updated successfully"
 *       404:
 *        description: Platform tidak ditemukan
 *        content:
 *          application/json:
 *           example:
 *             status: "fail"
 *             message: "platform tidak ditemukan"
 *       400:
 *         description: Gagal memperbarui platform
 *         content:
 *           application/json:
 *              example:
 *                TipeDataSalah:
 *                  status: "fail"
 *                  message: "tidak dapat memperbarui platform karena tipe data tidak sesuai"
 *                FieldKosong:
 *                  status: "fail"
 *                  message: "tidak dapat memperbarui platform karena properti yang dibutuhkan tidak ada"
 */

/**
 * @swagger
 * /platform/delete:
 *   delete:
 *     summary: Menghapus platform berdasarkan ID
 *     tags: [Platforms]
 *     requestBody:
 *      required: true
 *     content:
 *      application/json:
 *      schema:
 *        type: object
 *        properties:
 *          id:
 *            type: number
 *            description: ID platform
 *            example: 1
 *     responses:
 *       200:
 *         description: Platform berhasil dihapus
 *         content:
 *           application/json:
 *             example:
 *               status: "success"
 *               message: "Platform deleted successfully"
 *       404:
 *         description: Platform tidak ditemukan
 *         content:
 *          application/json:
 *           example:
 *            status: "fail"
 *            message: "platform tidak ditemukan"
 *       400:
 *         description: Gagal menghapus platform variable tidak tepat
 *         content:
 *          application/json:
 *           example:
 *            TipeDataSalah:
 *              status: "fail"
 *              message: "tidak dapat menghapus platform karena tipe data tidak sesuai"
 *            FieldKosong:
 *              status: "fail"
 *              message: "tidak dapat menghapus platform karena properti yang dibutuhkan tidak ada"
 * 
 */
const routes = (router: Router, handler: PlatformHandler) => {
    router.post('/add', handler.postPlatformHandler);
    router.put('/update', handler.putPlatformHandler);
    router.delete('/delete', handler.deletePlatformHandler);
    router.get('/', handler.getPlatformHandler);
  };
  
export default routes;