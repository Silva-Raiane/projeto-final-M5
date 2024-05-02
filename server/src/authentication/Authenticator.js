import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'

dotenv.config()

export function generateAccessToken(userId){
    return jwt.sign({ userId: userId }, process.env.TOKEN, {expiresIn: '1h'})
}

export function verifyJWT(req, res, next){
    try{
        const token = req.headers['x-access-token']

        jwt.verify(token, secret, (error, decoded) => {
            if(error) return res.status(401).json({
                error: error
            });

            req.userId = decoded.userId;
            next();
        }) 
    }catch(error){
        return res.status(401).json({
            message: "Error while trying to verify JWT."
        })
    }
}