import AddedPlatform from "./AddedPlatform";
import AddPlatform from "./AddPlatform";
import EditPlatform from "./EditPlatform";
import GetPlatform from "./GetPlatform";

export interface IPlatformRepository {
    addPlatform(platform: AddPlatform): Promise<AddedPlatform>;
    verifyAvailablePlatform(role: string): Promise<void>;
    verifyIsPlatformExist(roleId: number): Promise<void>;
    findPlatformById(roleId: number): Promise<any>;
    getAllPlatform(): Promise<GetPlatform[]>;
    putPlatformById(roleId: number, roleName: string): Promise<EditPlatform>;
    deletePlatformById(roleId: number): Promise<number>;
  }

class PlatformRepository implements IPlatformRepository{
    async addPlatform(platform: AddPlatform): Promise<AddedPlatform> {
      throw new Error('PLATFORM_REPOSITORY.METHOD_NOT_IMPLEMENTED');
    }
    async verifyAvailablePlatform(platform: string): Promise<void> {
      throw new Error('PLATFORM_REPOSITORY.METHOD_NOT_IMPLEMENTED');
    }
    async verifyIsPlatformExist(platformId: number): Promise<void> {
      throw new Error('PLATFORM_REPOSITORY.METHOD_NOT_IMPLEMENTED');
    }
    async findPlatformById(platformId: number): Promise<any> {
      throw new Error('PLATFORM_REPOSITORY.METHOD_NOT_IMPLEMENTED');
    }
    async getAllPlatform(): Promise<GetPlatform[]> {
      throw new Error('PLATFORM_REPOSITORY.METHOD_NOT_IMPLEMENTED');
    }
    async putPlatformById(platformId: number, platformName: string): Promise<EditPlatform> {
      throw new Error('PLATFORM_REPOSITORY.METHOD_NOT_IMPLEMENTED');
    }
    async deletePlatformById(platformId: number): Promise<number> {
      throw new Error('PLATFORM_REPOSITORY.METHOD_NOT_IMPLEMENTED');
    }
  }
export default PlatformRepository