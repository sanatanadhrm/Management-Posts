import { IPlatformRepository } from "../../../Domains/platform/entities/PlatformRepository";
import EditedPost from "../../../Domains/post/entities/EditedPost";
import EditPost from "../../../Domains/post/entities/EditPost";
import { IPostRepository } from "../../../Domains/post/entities/PostRepository";
import { IStatusRepository } from "../../../Domains/status/entities/StatusRepository";

class EditPostByIdUseCase {
  private postRepository: IPostRepository
  private platformRepository: IPlatformRepository
  private statusRepository: IStatusRepository
  constructor({
    postRepository,
    platformRepository,
    statusRepository
}: {postRepository: IPostRepository,
    platformRepository: IPlatformRepository,
    statusRepository: IStatusRepository
}) {
    this.postRepository = postRepository
    this.platformRepository = platformRepository
    this.statusRepository = statusRepository
  }

  async execute(id: string, post: EditPost): Promise<EditedPost> {
    const postId = parseInt(id)
    const postPayload = new EditPost(post)
    await this.postRepository.verifyAvailablePost(postId)
    await this.platformRepository.verifyIsPlatformExist(postPayload.platformId)
    await this.statusRepository.verifyAvailableStatusById(postPayload.statusId)
    return this.postRepository.putPostById(postId, post)
  }
}

export default EditPostByIdUseCase