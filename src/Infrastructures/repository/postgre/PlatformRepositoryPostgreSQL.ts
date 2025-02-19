import { Sequelize } from "sequelize";
import AddedPlatform from "../../../Domains/platform/entities/AddedPlatform";
import AddPlatform from "../../../Domains/platform/entities/AddPlatform";
import PlatformRepository from "../../../Domains/platform/entities/PlatformRepository";
import platform from "../../models/sequelieze/PlatformModel";
import GetPlatform from "../../../Domains/platform/entities/GetPlatform";
import EditPlatform from "../../../Domains/platform/entities/EditPlatform";

class PlatformRepositoryPostgreSQL extends PlatformRepository {
    private readonly platformModels: typeof platform;

    constructor(platforms: typeof platform) {
        super();
        this.platformModels = platforms;
    }
    async addPlatform(payload: AddPlatform): Promise<AddedPlatform> {
        const { name } = payload;
        const newPlatform = await this.platformModels.create({ name});
        return new AddedPlatform(newPlatform);
    }
    async verifyAvailablePlatform(name: string): Promise<void> {
        const platform = await this.platformModels.findOne({ where: { name } });
        if (platform) {
            throw new Error("PLATFORM_REPOSITORY.PLATFORM_IS_EXIST");
        }
    }
    async verifyIsPlatformExist(id: number): Promise<void> {
        const platform = await this.platformModels.findOne({ where: { id } });
        if (!platform) {
            throw new Error("PLATFORM_REPOSITORY.PLATFORM_NOT_FOUND");
        }
    }
    async getAllPlatform(): Promise<GetPlatform[]> {
        const platforms = await this.platformModels.findAll();
        return platforms.map((platform) => new GetPlatform(platform));
    }
    async putPlatformById(id: number, name: string): Promise<EditPlatform> {
        const [affectedCount, affectedRows] = await this.platformModels.update({ name }, { where: { id }, returning: true });
        if (affectedCount === 0) {
            throw new Error("PLATFORM_REPOSITORY.PLATFORM_FAILED_TO_UPDATE");
        }
        return new EditPlatform(affectedRows[0]);
    }
    async deletePlatformById(id: number): Promise<number> {
        const deletedPlatform = await this.platformModels.destroy({ where: { id } });
        if (!deletedPlatform) {
            throw new Error("PLATFORM_REPOSITORY.DELETE_PLATFORM_FAILED");
        }
        return deletedPlatform;
    }
}

export default PlatformRepositoryPostgreSQL;