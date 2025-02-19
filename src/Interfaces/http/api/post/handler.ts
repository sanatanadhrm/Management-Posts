import { NextFunction, Request, Response } from "express";
import PostRepositoryPostgreSQL from "../../../../Infrastructures/repository/postgre/PostRepositoryPostgreSQL";
import { Post, Platforms, Status } from "../../../../Infrastructures/models/sequelieze";
import AddPostUseCase from "../../../../Applications/usecase/postUseCase/AddPostUseCase";
import PlatformRepositoryPostgreSQL from "../../../../Infrastructures/repository/postgre/PlatformRepositoryPostgreSQL";
import StatusRepositoryPostgreSQL from "../../../../Infrastructures/repository/postgre/StatusRepositoryPostgreSQL";
import GetPostUseCase from "../../../../Applications/usecase/postUseCase/GetPostUseCase";
import GetPostByIdUseCase from "../../../../Applications/usecase/postUseCase/GetPostByIdUseCase";
import EditPostByIdUseCase from "../../../../Applications/usecase/postUseCase/EditPostUseCase";
import DeletePostUseCase from "../../../../Applications/usecase/postUseCase/DeletePostUseCase";
class PostHandler { 
    constructor(){
        this.postPlatformHandler = this.postPlatformHandler.bind(this);
        this.getPostHandler = this.getPostHandler.bind(this);
    }

    async postPlatformHandler(req: Request, res: Response, next: NextFunction){
        try {
            const postRepository = new PostRepositoryPostgreSQL(Post);
            const platformRepository = new PlatformRepositoryPostgreSQL(Platforms);
            const statusRepository = new StatusRepositoryPostgreSQL(Status);
            const addedPostUseCase = new AddPostUseCase({
                postRepository,
                platformRepository,
                statusRepository
            })
            const addedPost = await addedPostUseCase.execute(req.body);
            res.status(201).json({
                status: 'success',
                data: addedPost,
                message: 'Post added successfully',
            });

        } catch (error) {
            next(error);
            
        }
    }

    async getPostHandler(req: Request, res: Response, next: NextFunction){
        try {
            const postRepository = new PostRepositoryPostgreSQL(Post);
            const getPostUseCase = new GetPostUseCase({
                postRepository
            });
            const getPost = await getPostUseCase.execute();
            res.status(200).json({
                status: 'success',
                data: getPost,
                message: 'Post fetched successfully',
            });
        } catch (error) {
            next(error);
        }
    }

    async getPostByIdHandler(req: Request, res: Response, next: NextFunction){
        try {
            const postRepository = new PostRepositoryPostgreSQL(Post);
            const getPostByIdUseCase = new GetPostByIdUseCase({
                postRepository
            });
            const getPostById = await getPostByIdUseCase.execute(req.params.id);
            res.status(200).json({
                status: 'success',
                data: getPostById,
                message: 'Post fetched successfully',
            });
        } catch (error) {
            next(error);
        }
    }

    async putPostHandler(req: Request, res: Response, next: NextFunction){
        try {
            const postRepository = new PostRepositoryPostgreSQL(Post);
            const platformRepository = new PlatformRepositoryPostgreSQL(Platforms);
            const statusRepository = new StatusRepositoryPostgreSQL(Status);
            const putPostUseCase = new EditPostByIdUseCase({
                postRepository,
                platformRepository,
                statusRepository
            })
            const putPost = await putPostUseCase.execute(req.params.id, req.body);
            res.status(200).json({
                status: 'success',
                data: putPost,
                message: 'Post updated successfully',
            });
        } catch (error) {
            next(error);
        }
    }

    async deletePostHandler(req: Request, res: Response, next: NextFunction){
        try {
            const postRepository = new PostRepositoryPostgreSQL(Post);
            const deletePostUseCase = new DeletePostUseCase({
                postRepository
            });
            await deletePostUseCase.execute(req.params.id);
            res.status(200).json({
                status: 'success',
                message: 'Post deleted successfully',
            });
        } catch (error) {
            next(error);
        }
    }
}

export default PostHandler;