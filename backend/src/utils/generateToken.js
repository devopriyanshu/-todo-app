import jwt from 'jsonwebtoken';

export const generatewebtoken = (userId)=>{
    const payload= {
       id: userId
    }
    const secret = process.env.JWT_SECRET_KEY
    const options = {
        expiresIn:'1d'
    }
 return jwt.sign(payload, secret, options)
}