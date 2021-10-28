import {Response, Request} from 'express';
import passport from 'passport';
const User = require('../models/user.model');
const catchAsync = require('../utillities/catchAsync');

require('../auth');

module.exports.index = catchAsync(async (req: Request, res: Response) => {
    // Get all users from database
    const users = User.find();

    // return to client found users
    res.json(users);
});

module.exports.create = catchAsync(async (req: Request, res: Response) => {
    passport.authenticate('google')
})