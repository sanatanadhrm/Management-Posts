import { Router } from "express";
import StatusHandler from "./handler";

/**
 * @swagger
 * tags:
 *   name: Status
 *   description: Manajemen status untuk postingan media sosial
 */
/**
 * @swagger
 * /status:
 *   get:
 *     summary: Mendapatkan semua status
 *     tags: [Status]
 *     responses:
 *       200:
 *         description: Daftar semua status
 *         content:
 *           application/json:
 *             example:
 *               status: "success"
 *               data:
 *                 - id: 1
 *                   name: "Pending"
 *                   created_at: "2025-02-18T16:25:21.414Z"
 *                   updated_at: "2025-02-18T16:25:21.414Z"
 *                 - id: 2
 *                   name: "Published"
 *                   created_at: "2025-02-18T16:25:21.414Z"
 *                   updated_at: "2025-02-18T16:25:21.414Z"
 *                 - id: 3
 *                   name: "Canceled"
 *                   created_at: "2025-02-18T16:25:21.414Z"
 *                   updated_at: "2025-02-18T16:25:21.414Z"
 *               message: "Status fetched successfully"
 */
const routes = (router: Router, handler: StatusHandler) => {
    router.get('/', handler.getStatusHandler);
}

export default routes;