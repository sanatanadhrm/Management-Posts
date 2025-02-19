import GetStatus from "../../../Domains/status/entities/GetStatus";
import StatusRepository from "../../../Domains/status/entities/StatusRepository";

class GetStatusUseCase {
  private readonly statusRepository: StatusRepository;
  constructor({statusRepository}: {statusRepository : StatusRepository}) {
    this.statusRepository = statusRepository;
  }

  async execute(): Promise<GetStatus[]> {
    const status = await this.statusRepository.getAllStatus();
    return status.map((status) => new GetStatus(status));
  }
}

export default GetStatusUseCase;