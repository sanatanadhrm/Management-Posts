import GetPost from "../../../Domains/post/entities/GetPost";
import { IPostRepository } from "../../../Domains/post/entities/PostRepository";

class GetPostByIdUseCase {
    private postRepository: IPostRepository;
    constructor({postRepository} : {postRepository: IPostRepository}) {
        this.postRepository = postRepository;
    }

    async execute(payload: string) {
        const postId = parseInt(payload);
        await this.postRepository.verifyAvailablePost(postId);
        const post = await this.postRepository.getPostById(postId);
        return new GetPost(post);
    }
}

export default GetPostByIdUseCase;