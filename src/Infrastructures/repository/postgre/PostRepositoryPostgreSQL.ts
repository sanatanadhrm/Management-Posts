import AddedPost from "../../../Domains/post/entities/AddedPost";
import AddPost from "../../../Domains/post/entities/AddPost";
import EditedPost from "../../../Domains/post/entities/EditedPost";
import EditPost from "../../../Domains/post/entities/EditPost";
import GetPost from "../../../Domains/post/entities/GetPost";
import PostRepository from "../../../Domains/post/entities/PostRepository";
import {Post, Status, Platforms} from "../../models/sequelieze";


class PostRepositoryPostgreSQL extends PostRepository {
    private readonly postModels: typeof Post;

    constructor(postModels: typeof Post) {
        super();
        this.postModels = postModels;
    }

    async addPost(payload: AddPost): Promise<AddedPost> {
        const { 
            title,
            brand,
            due_date,
            payment,
            platformId,
            statusId,
         } = payload;
        const newPost = await this.postModels.create({ 
            title,
            brand,
            due_date,
            payment,
            platform_id: platformId,
            status_id: statusId,
        });
        const postWithRelations = await this.postModels.findOne({
            where: { id: newPost.id },
            include: [
                {
                    model: Platforms,
                    as: "post_platform",
                    attributes: ["name"], // Ambil hanya nama platform
                },
                {
                    model: Status,
                    as: "post_status",
                    attributes: ["name"], // Ambil hanya nama status
                },
            ],
        });

        if (!postWithRelations) {
            throw new Error("POST_REPOSITORY.POST_NOT_FOUND");
        }
        return new AddedPost({
            ...postWithRelations.dataValues,
            platform: postWithRelations.post_platform.name,
            status: postWithRelations.post_status.name,
        });
    }

    async getPosts(): Promise<GetPost[]> {
        const posts = await this.postModels.findAll({
            include: [
                {
                    model: Platforms,
                    as: "post_platform",
                    attributes: ["name"], // Ambil hanya nama platform
                },
                {
                    model: Status,
                    as: "post_status",
                    attributes: ["name"], // Ambil hanya nama status
                },
            ],
        });
        return posts.map((post) => new GetPost({
            ...post.dataValues,
            platform: post.post_platform.name,
            status: post.post_status.name,
        }));
    }

    async verifyAvailablePost(postId: number): Promise<void> {
        const post = await this.postModels.findOne({ where: { id: postId } });
        if (!post) {
            throw new Error("POST_REPOSITORY.POST_NOT_FOUND");
        }
    }

    async getPostById(postId: number): Promise<GetPost> {
        const post = await this.postModels.findOne({
            where: { id: postId },
            include: [
                {
                    model: Platforms,
                    as: "post_platform",
                    attributes: ["name"], // Ambil hanya nama platform
                },
                {
                    model: Status,
                    as: "post_status",
                    attributes: ["name"], // Ambil hanya nama status
                },
            ],
        });

        if (!post) {
            throw new Error("POST_REPOSITORY.POST_NOT_FOUND");
        }

        return new GetPost({
            ...post.dataValues,
            platform: post.post_platform.name,
            status: post.post_status.name,
        });
    }

    async putPostById(id:number, payload: EditPost): Promise<EditedPost> {
        const { title, brand, due_date, payment, platformId, statusId } = payload;
        const [affectedCount, affectedRows] = await this.postModels.update(
            {
                title,
                brand,
                due_date,
                payment,
                platform_id: platformId,
                status_id: statusId,
            },
            { where: { id }, returning: true }
        );


        if (affectedCount === 0) {
            throw new Error("POST_REPOSITORY.POST_FAILED_TO_UPDATE");
        }

        const updatedPost = await this.postModels.findOne({
            where: { id },
            include: [
                {
                    model: Platforms,
                    as: "post_platform",
                    attributes: ["name"], // Ambil hanya nama platform
                },
                {
                    model: Status,
                    as: "post_status",
                    attributes: ["name"], // Ambil hanya nama status
                },
            ],
        });
        if (!updatedPost) {
            throw new Error("POST_REPOSITORY.POST_NOT_FOUND");
        }
        return new EditedPost({
            ...updatedPost.dataValues,
            platform: updatedPost.post_platform.name,
            status: updatedPost.post_status.name,
        });
    }

    async deletePost(postId: number): Promise<void> {
        const deletedPost = await this.postModels.destroy({ where: { id: postId } });
        if (!deletedPost) {
            throw new Error("POST_REPOSITORY.DELETE_POST_FAILED");
        }
    }
}

export default PostRepositoryPostgreSQL;