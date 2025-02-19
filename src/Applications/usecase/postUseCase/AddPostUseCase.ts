import { IPlatformRepository } from "../../../Domains/platform/entities/PlatformRepository";
import AddedPost from "../../../Domains/post/entities/AddedPost";
import AddPost from "../../../Domains/post/entities/AddPost";
import { IPostRepository } from "../../../Domains/post/entities/PostRepository";
import { IStatusRepository } from "../../../Domains/status/entities/StatusRepository";

class AddPostUseCase {
    private readonly postRepository: IPostRepository;
    private readonly platformRepository: IPlatformRepository;
    private readonly statusRepository: IStatusRepository;
    constructor(
        { postRepository, platformRepository, statusRepository }: 
        { 
            postRepository: IPostRepository, 
            platformRepository: IPlatformRepository,
            statusRepository: IStatusRepository 
        }) {
        this.postRepository = postRepository;
        this.platformRepository = platformRepository;
        this.statusRepository = statusRepository;
    }
    async execute(useCasePayload: AddPost): Promise<AddedPost> {
        const addPost = new AddPost(useCasePayload);
        await this.platformRepository.verifyIsPlatformExist(addPost.platformId);
        await this.statusRepository.verifyAvailableStatusById(addPost.statusId);
        return this.postRepository.addPost(addPost);
    }
}

export default AddPostUseCase;