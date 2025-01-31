import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

const protect = asyncHandler(async (req, res) => {
    let token

    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        try{
            token = req.headers.authorization.split(' ')[1]
            const decoded = jwt.verify(token, 'abcd1234')
            req.user = await User.findById(decoded.id).select('-password')

            if(!req.user){
                res.status(401)
                throw new Error("Not Authorized")
            }
            next()
        }
        catch(error) {
            console.error(error)
            res.status(401)
            throw new Error("Not Authorised")
        }
        if(!token){
            res.status(401)
            throw new Error("Not Authroised")
        }
    }
})

export default protect