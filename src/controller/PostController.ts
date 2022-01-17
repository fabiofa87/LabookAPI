import  {Request, Response} from "express";
import { PostBusiness } from "../business/PostBusiness";
import { createPostInputDTO, getPostByIdInputDTO, getPostByIdOutputDTO, Post } from "../entities/Post";
export class PostController {
    createPost = async (req: Request, res: Response) => {
        try{
            let message = "Post created successfully.";

            const token: string = req.headers.authorization as string;

            const input: createPostInputDTO = {
            photo: req.body.photo,
            description: req.body.description,
            type: req.body.type,
            token
        }

        await new PostBusiness().createUser(input);

        res.status(201).send({message})
        }
        catch(error:any) {
            let message =  error.sqlMessage || error.message;
            res.statusCode = 400;
            res.send({message})
        }
        

    }

    getPostById = async (req: Request, res: Response) => {
        try {
            let message = "Post found.";

            const input: getPostByIdInputDTO = {
                id: req.params.id
            }
            
            const post: Post = await new PostBusiness().getPostById(input);

            const output: getPostByIdOutputDTO = {
                photo: post.photo,
                description: post.description,
                type: post.type,
                creationDate: post.creationDate
            }

            res.status(200).send({message, output})
        }
        catch(error: any) {
            let message =  error.sqlMessage || error.message;
            res.statusCode = 400;
            res.send({message})
        }
    }
}