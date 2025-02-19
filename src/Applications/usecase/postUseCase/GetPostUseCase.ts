import GetPost from "../../../Domains/post/entities/GetPost";
import { IPostRepository } from "../../../Domains/post/entities/PostRepository";

class GetPostUseCase {
    private postRepository: IPostRepository;
    constructor({postRepository} : {postRepository: IPostRepository}) {
        this.postRepository = postRepository;
    }

    async execute() {
        const posts = await this.postRepository.getPosts();
        return posts.map((post)=> new GetPost(post));
    }
}

export default GetPostUseCase;