import  {Request, Response} from "express";
import { PostBusiness } from "../business/PostBusiness";
import { createPostInputDTO } from "../entities/Post";
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
}