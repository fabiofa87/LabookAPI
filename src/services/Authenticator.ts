import * as jwt from 'jsonwebtoken';
import {authenticationData} from '../entities/User';
import {config} from 'dotenv';

config();

export interface AuthenticationData {
    id: string;
}

export class Authenticator {
    generateToken = (payload: authenticationData) => {
        return jwt.sign(
            payload,
            process.env.JWT_KEY!,
            {
                expiresIn: '1h'
            }
        )
    }
    getTokenData = (token: string): AuthenticationData => {
        const payload =  jwt.verify(token, process.env.JWT_KEY!) as any;
        return {
            id: payload.id
        }
    }
}