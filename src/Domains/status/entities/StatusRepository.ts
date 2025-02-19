import GetStatus from "./GetStatus";

export interface IStatusRepository {
    getAllStatus(): Promise<GetStatus[]>;
    verifyAvailableStatusById(statusId: number): Promise<void>;
}

class StatusRepository implements IStatusRepository {
    async getAllStatus(): Promise<GetStatus[]> {
        throw new Error("STATUS_REPOSITORY.METHOD_NOT_IMPLEMENTED");
    }

    async verifyAvailableStatusById(statusId: number): Promise<void> {
        throw new Error("STATUS_REPOSITORY.METHOD_NOT_IMPLEMENTED");
    }

}

export default StatusRepository;