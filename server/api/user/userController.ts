import {Response, Request} from 'express';
const User = require('../../models/user.model');
const catchAsync = require('../../utillities/catchAsync');


/**
 * Get all users:
 * Any user from level 1-4
 * can get all users
 * */
module.exports.index = catchAsync(async (req: Request, res: Response) => {
    // Get all users from database
    const users = User.find();

    console.log(`[USER-GET] - send ${users.length} users`);
    
    // return to client found users
    res.json(users);
});

/**
 * Get all users:
 * Any user from level 1-4
 * can get all users
 * 
 * @param:
 * id - user id
 * */
 module.exports.show = catchAsync(async (req: Request, res: Response) => {
    // Get all users from database
    const user = User.findById(req.params.id);
    if(!user){
        // If user is not found, return error with status code 404
        res.status(404).send('User not found');
    }
    // return to client found user
    res.json(user);
});

/**
 * Delete user:
 * Any user from level 1-4
 * can delete his own account
 * User in level 1
 * can delete all users
 * 
 * @param:
 * id - user id
 * */
module.exports.delete = catchAsync(async (req: Request, res: Response) => {
    const result = await User.findByIdAndDelete(req.params.id);
    if(!result) {
        res.status(404).send({ message: 'No User found'});
    }
    res.send(result);
});