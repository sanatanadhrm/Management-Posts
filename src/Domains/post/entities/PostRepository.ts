import AddedPost from "./AddedPost";
import AddPost from "./AddPost";
import EditedPost from "./EditedPost";
import EditPost from "./EditPost";
import GetPost from "./GetPost";

export interface IPostRepository {
    addPost(post: AddPost): Promise<AddedPost>;
    getPostById(postId: number): Promise<GetPost>;
    getPosts(): Promise<GetPost[]>;
    verifyAvailablePost(postId: number): Promise<void>;
    putPostById(id:number, post: EditPost): Promise<EditedPost>;
    deletePost(postId: number): Promise<void>;
}

class PostRepository implements IPostRepository {
  public async addPost(post: AddPost): Promise<AddedPost> {
    // Implementation
    throw new Error('POST_REPOSITORY.METHOD_NOT_IMPLEMENTED');
  }

  public async getPostById(postId: number): Promise<GetPost> {
    // Implementation
    throw new Error('POST_REPOSITORY.METHOD_NOT_IMPLEMENTED');
  }

  public async getPosts(): Promise<GetPost[]> {
    // Implementation
    throw new Error('POST_REPOSITORY.METHOD_NOT_IMPLEMENTED');
  }

  public async verifyAvailablePost(postId: number): Promise<void> {
    // Implementation
    throw new Error('POST_REPOSITORY.METHOD_NOT_IMPLEMENTED');
  }

  public async putPostById(id: number, post: EditPost): Promise<EditedPost> {
    // Implementation
    throw new Error('POST_REPOSITORY.METHOD_NOT_IMPLEMENTED');
  }

  public async deletePost(postId: number): Promise<void> {
    // Implementation
    throw new Error('POST_REPOSITORY.METHOD_NOT_IMPLEMENTED');
  }
}

export default PostRepository;