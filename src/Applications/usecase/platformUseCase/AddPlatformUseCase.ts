import AddedPlatform from "../../../Domains/platform/entities/AddedPlatform";
import AddPlatform from "../../../Domains/platform/entities/AddPlatform";
import { IPlatformRepository } from "../../../Domains/platform/entities/PlatformRepository";

class AddPlatformUseCase {
    private readonly platformRepository: IPlatformRepository;

    constructor({platformRepository}: {platformRepository :IPlatformRepository}) {
        this.platformRepository = platformRepository;
    }

    async execute(useCasePayload: AddPlatform): Promise<AddedPlatform> {
        const addPlatform = new AddPlatform(useCasePayload);
        await this.platformRepository.verifyAvailablePlatform(addPlatform.name);
        return this.platformRepository.addPlatform(useCasePayload);
    }
}

export default AddPlatformUseCase;