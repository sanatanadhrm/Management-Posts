import GetStatus from '../../../Domains/status/entities/GetStatus';
import StatusRepository from '../../../Domains/status/entities/StatusRepository';
import status from '../../models/sequelieze/StatusModel';

class StatusRepositoryPostgreSQL extends StatusRepository {
    private readonly statusModel: typeof status;

    constructor(statusModel: typeof status) {
        super();
        this.statusModel = statusModel;
    }

    async getAllStatus(): Promise<GetStatus[]> {
        const statusData = await this.statusModel.findAll();
        return statusData.map((status) => new GetStatus(status));
    }

    async verifyAvailableStatusById(statusId: number): Promise<void> {
        const status = await this.statusModel.findOne({ where: { id: statusId } });
        if (!status) {
            throw new Error('STATUS_REPOSITORY.STATUS_NOT_FOUND');
        }
    }
}

export default StatusRepositoryPostgreSQL;