import {Response, Request} from 'express';
const { OAuth2Client } = require('google-auth-library');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const catchAsync = require('../utillities/catchAsync');

const client = new OAuth2Client(process.env.GOOGLE_AUTH_CLIENT_ID);

module.exports.index = catchAsync(async (req: Request, res: Response) => {
    // Get all users from database
    const users = User.find();

    // return to client found users
    res.json(users);
});

module.exports.googlelAuth = catchAsync(async (req: Request, res: Response) => {
    // Recive token from client (google provide this token) 
    const {tokenId} = req.body;

    // Check token validity
    client.verifyToken({tokenId, audience: process.env.GOOGLE_AUTH_CLIENT_ID})
    .then((response: any) =>{
        const {email_verfied, name, email} = response.payload;
    })
})
