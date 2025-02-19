import { Router } from "express";
import PostHandler from "./handler";
import routes from "./routes";

const router = Router();

const postHandler = new PostHandler();

routes(router, postHandler);

export default router;