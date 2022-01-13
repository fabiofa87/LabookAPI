import {sign} from 'jsonwebtoken';
import {authenticationData} from '../entities/User';
import {config} from 'dotenv';

config();

export class Authenticator {
    generateToken = (payload: authenticationData) => {
        return sign(
            payload,
            process.env.JWT_KEY!,
            {
                expiresIn: '1h'
            }
        )
    }
    getTokenData = () => {}
}