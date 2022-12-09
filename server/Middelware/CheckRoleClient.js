const jwt = require('jsonwebtoken');
const cookie = require('cookie-parser');
const asyncHandler = require('express-async-handler')
const UserModel = require('..//Models/UserModel')




const CheckRoleClient = asyncHandler( async (req, res, next) => {
    const token = req.cookies['access-token']
    
        const validateToken = await jwt.verify(token, process.env.JWT_SECRET)
        console.log(validateToken);
        const user = await UserModel.findOne({where : { id_user: validateToken.id }})
           console.log(user.role);
        
        if(user.role !== 'client'){
            response.status(403).send('access denied')
        } 
        next()
    
})

module.exports = CheckRoleClient
