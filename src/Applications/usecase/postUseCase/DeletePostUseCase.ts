import { IPostRepository } from "../../../Domains/post/entities/PostRepository";

class DeletePostUseCase { 
    private postRepository: IPostRepository
    constructor({ postRepository }: { postRepository: IPostRepository }) {
        this.postRepository = postRepository;
    }

    async execute( id: string): Promise<void> {
        const postId = parseInt(id);
        await this.postRepository.verifyAvailablePost(postId);
        return this.postRepository.deletePost(postId);
    }
}

export default DeletePostUseCase