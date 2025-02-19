import { Router } from 'express';
import PlatformHandler from './handler';
import routes from './routes';



const router = Router();

const platformHandler = new PlatformHandler();

routes(router, platformHandler);

export default router;