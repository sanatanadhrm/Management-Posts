import { IPlatformRepository } from "../../../Domains/platform/entities/PlatformRepository";

class DeletePlatformUseCase {
    private readonly platformRepository: IPlatformRepository;
    constructor({ platformRepository }: { platformRepository: IPlatformRepository }) {
        this.platformRepository = platformRepository;
    }
    
    async execute(useCasePayload : { id: number }) {
        const { id } = useCasePayload;
        await this.platformRepository.verifyIsPlatformExist(id);
        return this.platformRepository.deletePlatformById(id);
    }
}
export default DeletePlatformUseCase;