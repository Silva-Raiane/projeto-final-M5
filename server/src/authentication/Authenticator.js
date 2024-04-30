import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'

dotenv.config()

export function generateAccessToken(userId){
    return jwt.sign({ userId: userId }, process.env.TOKEN, {expiresIn: '1h'})
}

