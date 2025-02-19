import { Router } from "express";
import StatusHandler from "./handler";
import routes from "./routes";

const router = Router();

const statusHandler = new StatusHandler();

routes(router, statusHandler);

export default router;