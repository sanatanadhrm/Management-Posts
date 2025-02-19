import { Router } from "express";
import StatusHandler from "./handler";

const routes = (router: Router, handler: StatusHandler) => {
    router.get('/', handler.getStatusHandler);
}

export default routes;