import { Router } from "express";
import PlatformHandler from "./handler";

const routes = (router: Router, handler: PlatformHandler) => {
    router.post('/add', handler.postPlatformHandler);
    router.put('/update', handler.putPlatformHandler);
    router.delete('/delete', handler.deletePlatformHandler);
    router.get('/', handler.getPlatformHandler);
  };
  
export default routes;