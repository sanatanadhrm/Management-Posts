import DeletePlatform, { IDeletePlatform } from "../../../Domains/platform/entities/DeletePlatform";
import { IPlatformRepository } from "../../../Domains/platform/entities/PlatformRepository";

class DeletePlatformUseCase {
    private readonly platformRepository: IPlatformRepository;
    constructor({ platformRepository }: { platformRepository: IPlatformRepository }) {
        this.platformRepository = platformRepository;
    }
    
    async execute(useCasePayload : IDeletePlatform) {
        const payload = new DeletePlatform(useCasePayload);
        await this.platformRepository.verifyIsPlatformExist(payload.id);
        return this.platformRepository.deletePlatformById(payload.id);
    }
}
export default DeletePlatformUseCase;