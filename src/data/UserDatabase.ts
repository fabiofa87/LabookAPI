import { toUserModel, User } from "../entities/User";
import {BaseDatabase} from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
    async insertUser(user: User) {
        try { 
            await this.connection('labook_users').insert({
                id: user.id,
                name: user.name,
                email: user.email,
                password: user.password
            })
        }
        catch(error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    async getUserByEmail(email: string): Promise<User> {
        try {
            const result: any = await this.connection('labook_users')
            .select('*')
            .where({email})

            const user = toUserModel(result[0])

            return user;
        }
        catch(error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}