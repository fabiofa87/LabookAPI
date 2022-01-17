import { Post, toPostModel } from "../entities/Post";
import { BaseDatabase } from "./BaseDatabase";

export class PostDatabase extends BaseDatabase {
    async createPost(post: Post) {
        try {
            await this.connection("labook_posts")
            .insert({
                id: post.id,
                photo: post.photo,
                description: post.description,
                type: post.type,
                userId: post.userId,
                creationDate: post.creationDate.toISOString().substring(0, 10)
            })
        }
        catch(error: any) {
            throw new Error(error.sqlMessage || error.message);

        }
    }

    async getPostById(id: string): Promise<Post> {
        try {
            const result: any = await this.connection('labook_posts')
            .select('*')
            .where({ id })

            return toPostModel(result[0]);
        }
        catch(error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
}