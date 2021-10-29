import {Response, Request} from 'express';
const { OAuth2Client } = require('google-auth-library');
const User = require('../models/user.model');
const catchAsync = require('../utillities/catchAsync');

const client = new OAuth2Client(process.env.GOOGLE_AUTH_CLIENT_ID)

require('../auth');

module.exports.index = catchAsync(async (req: Request, res: Response) => {
    // Get all users from database
    const users = User.find();

    // return to client found users
    res.json(users);
});

module.exports.create = catchAsync(async (req: Request, res: Response) => {

})