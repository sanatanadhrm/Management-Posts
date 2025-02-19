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