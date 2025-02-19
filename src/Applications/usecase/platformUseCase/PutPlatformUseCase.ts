import AddedPlatform from "../../../Domains/platform/entities/AddedPlatform";
import AddPlatform from "../../../Domains/platform/entities/AddPlatform";
import EditPlatform from "../../../Domains/platform/entities/EditPlatform";
import { IPlatformRepository } from "../../../Domains/platform/entities/PlatformRepository";

class PutPlatformUseCase {
    private readonly platformRepository: IPlatformRepository;

    constructor({platformRepository}: {platformRepository :IPlatformRepository}) {
        this.platformRepository = platformRepository;
    }

    async execute(useCasePayload: EditPlatform): Promise<EditPlatform> {
        const putPlatformById = new EditPlatform(useCasePayload);
        await this.platformRepository.verifyAvailablePlatform(putPlatformById.name);
        await this.platformRepository.verifyIsPlatformExist(putPlatformById.id);
        return this.platformRepository.putPlatformById(useCasePayload.id, useCasePayload.name);
    }
}

export default PutPlatformUseCase;