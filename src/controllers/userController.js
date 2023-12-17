
const createError = require('http-errors');

const getUsers = async(req,res,next)=>{
    try {
        res.status(200).send({
            message:'User profile is returned'
        });
    } catch (error) {
        next(error);
    }
}

module.exports = getUsers;