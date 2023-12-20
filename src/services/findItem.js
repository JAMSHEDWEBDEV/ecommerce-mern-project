const createHttpError = require("http-errors");
const User = require("../models/userModel");
const { mongoose } = require("mongoose");


const findWithId = async (id,options={}) => {

    try {
        const item = await User.findById(id, options);

        if (!item) {
            throw createHttpError(404, 'item does not exist with this id')
        };
        return item;
    } catch (error) {
        if(error instanceof mongoose.Error){
            throw createHttpError(400, 'invalid item id');
        }
        throw error;
    }
}
module.exports = { findWithId };