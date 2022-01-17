import { PostDatabase } from "../data/PostDatabase";
import { createPostInputDTO, getPostByIdInputDTO, Post } from "../entities/Post";
import { AuthenticationData, Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export class PostBusiness {

    async createUser(input: createPostInputDTO){
        try {
        const tokenManager =  new Authenticator();
        if(!input.token) throw new Error("Invalid token.");
        const tokenData: AuthenticationData = tokenManager.getTokenData(input.token);
        
        const idGenerator = new IdGenerator();
        const id: string = idGenerator.generate();

        const post: Post = {
            id,
            userId: tokenData.id,
            creationDate: new Date(),
            description: input.description,
            photo: input.photo,
            type: input.type
            
        }

        await new PostDatabase().createPost(post);

    }
    catch(error: any) {
        throw new Error(error.sqlMessage || error.message);
    }
}

    async getPostById(input: getPostByIdInputDTO) {
        try {

            const post: Post = await new PostDatabase().getPostById(input.id);

            if(!post) {
                throw new Error("Post not found.");
            }

            return post;
        }
        catch(error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    } 
    
    
}