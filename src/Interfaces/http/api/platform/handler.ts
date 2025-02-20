import { NextFunction, Request, Response } from "express";
import platform from "../../../../Infrastructures/models/sequelieze/PlatformModel";
import PlatformRepositoryPostgreSQL from "../../../../Infrastructures/repository/postgre/PlatformRepositoryPostgreSQL";
import AddPlatformUseCase from "../../../../Applications/usecase/platformUseCase/AddPlatformUseCase";
import GetPlatformUseCase from "../../../../Applications/usecase/platformUseCase/GetPlatformUseCase";
import PutPlatformUseCase from "../../../../Applications/usecase/platformUseCase/PutPlatformUseCase";
import DeletePlatformUseCase from "../../../../Applications/usecase/platformUseCase/DeletePlatformUseCase";

class PlatformHandler {
    constructor(){
        this.postPlatformHandler = this.postPlatformHandler.bind(this);
        this.getPlatformHandler = this.getPlatformHandler.bind(this);
        this.putPlatformHandler = this.putPlatformHandler.bind(this);
    }

    async postPlatformHandler(req: Request, res: Response, next: NextFunction){
        try {
           
            const platformRepository = new PlatformRepositoryPostgreSQL(platform);
            const addPlatformUseCase = new AddPlatformUseCase({
                platformRepository
            });
            const addedPlatform = await addPlatformUseCase.execute(req.body);
            res.status(201).json({
                status: 'success',
                data: addedPlatform,
                message: 'Platform added successfully',
              });
        } catch (error) {
            next(error);
        }
    }

    async getPlatformHandler(req: Request, res: Response, next: NextFunction){
        try {
            const platformRepository = new PlatformRepositoryPostgreSQL(platform);
            const getPlatformUseCase = new GetPlatformUseCase({
                platformRepository
            });
            const getPlatform = await getPlatformUseCase.execute();
            res.status(200).json({
                status: 'success',
                data: getPlatform,
                message: 'Platform fetched successfully',
              });
        } catch (error) {
            next(error);
        }
    }

    async putPlatformHandler(req: Request, res: Response, next: NextFunction){
        try {
            const platformRepository = new PlatformRepositoryPostgreSQL(platform);
            const putPlatformUseCase = new PutPlatformUseCase({
                platformRepository
            });
            const putPlatform = await putPlatformUseCase.execute(req.body);
            res.status(200).json({
                status: 'success',
                data: putPlatform,
                message: 'Platform updated successfully',
              });
        } catch (error) {
            next(error);
        }
    }

    async deletePlatformHandler(req: Request, res: Response, next: NextFunction){
        try {
            const platformRepository = new PlatformRepositoryPostgreSQL(platform);
            const deletePlatformUseCase = new DeletePlatformUseCase({
                platformRepository
            });
            await deletePlatformUseCase.execute(req.body);
            res.status(200).json({
                status: 'success',
                message: 'Platform deleted successfully',
              });
        } catch (error) {
            next(error);
        }
    }
}
export default PlatformHandler;