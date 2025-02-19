import { NextFunction, Request, Response } from "express";
import StatusRepositoryPostgreSQL from "../../../../Infrastructures/repository/postgre/StatusRepositoryPostgreSQL";
import Status from "../../../../Infrastructures/models/sequelieze/StatusModel";
import GetStatusUseCase from "../../../../Applications/usecase/statusUseCase/getStatusUseCase";
class StatusHandler {
    constructor(){
        this.getStatusHandler = this.getStatusHandler.bind(this);
    }

    async getStatusHandler(req: Request, res:Response, next:NextFunction){
        try {
            const statusRepository = new StatusRepositoryPostgreSQL(Status);
            const getStatusUseCase = new GetStatusUseCase({
                statusRepository
            });
            const getStatus = await getStatusUseCase.execute();
            res.status(200).json({
                status: 'success',
                data: getStatus,
                message: 'Status fetched successfully',
            });
        } catch (error) {
            next(error);
            
        }
    }
}

export default StatusHandler;