import GetPlatform from "../../../Domains/platform/entities/GetPlatform";
import { IPlatformRepository } from "../../../Domains/platform/entities/PlatformRepository";

class GetPlatformUseCase {
    private readonly platformRepository: IPlatformRepository; 
    constructor({platformRepository} : {platformRepository: IPlatformRepository}) {
        this.platformRepository = platformRepository;
    }

    async execute() {
        const platforms = await this.platformRepository.getAllPlatform();
        return platforms.map((platform) => new GetPlatform(platform));
    }
}

export default GetPlatformUseCase;