import { User } from "../entities/User";
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
}