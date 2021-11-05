import {Response, Request} from 'express';
const fetch = require('node-fetch');
const {OAuth2Client} = require('google-auth-library');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const catchAsync = require('../utillities/catchAsync');

const client = new OAuth2Client(process.env.GOOGLE_AUTH_CLIENT_ID);

/**
 * Get all users:
 * Any user from level 1-4
 * can get all users
 * */
module.exports.index = catchAsync(async (req: Request, res: Response) => {
    // Get all users from database
    const users = User.find();

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
 * Login with google:
 * Any user from level 1-4
 * can login with google
 * */
module.exports.googleLogin = catchAsync(async (req: Request, res: Response) => {
    // Recive token from client (google provide this token) 
    const {tokenId} = req.body;
    
    // Check google token validity 
    let response = await client.verifyIdToken({idToken: tokenId, audience: process.env.GOOGLE_AUTH_CLIENT_ID});
    
    const {name, email} = response.payload;

    // Find user
    const user = await User.findOne({email: email});
    
    if(!user){
        // If not user exist 
        res.status(404).send('User not exist');
        console.log('User not exist');
    }else {
        // If user exist generate token
        // and return user with the token
        const token  = jwt.sign({_id: user._id}, process.env.JWT_SECRET, {expiresIn: '7d'});
        res.send({
            token: token,
            user: user
        })
    }    
});

/**
 * Register with google:
 * Any user from level 1-4
 * can register with google
 * */
module.exports.googleRegister = catchAsync(async (req: Request, res: Response) => {
    // Recive token from client (google provide this token) 
    const {tokenId, linkedin_url, username, phone_number, expertise, interests} = req.body;
    
    // Check token validity
    let response = await client.verifyIdToken({idToken: tokenId, audience: process.env.GOOGLE_AUTH_CLIENT_ID});
    const { given_name, family_name, email } = response.payload;

    // Find user
    const user = User.findOne({email: email});
    
    if(user){
        // If user exist return error with status code 400
        res.status(400).send('User already exist');
    }else {
        // Else create user with given data from client and google
        const user = new User({
            username: username,
            first_name: given_name,
            last_name: family_name,
            phone_number: phone_number,
            linkedin_url: linkedin_url,
            expertise: expertise,
            interests: interests,
            email: email
        }) 
        // Save user
        const savedUser = user.save();
        // Generate token
        // and send token and user to client
        const token  = jwt.sign({_id: savedUser._id}, process.env.JWT_SECRET, {expiresIn: '7d'});
        res.send({
            toket: token,
            user: savedUser
        });
    }
   
});

/**
 * Login with facebook:
 * Any user from level 1-4
 * can login with facebook
 * */
module.exports.facebookLogin = catchAsync(async (req: Request, res: Response) => {
    // Recive token and userID from client (facebook provide this)
    const { accessToken, userID } = req.body;

    // Get some data of the user by facebook api (first_name, last_name, id, email)
    let urlGraphFacebook = `https://graph.facebook.com/v12.0/${userID}/?fields=id,first_name,last_name,email&access_token=${accessToken}`;
    let response = await fetch(urlGraphFacebook, {method: 'GET'});
    response = await response.json();
    const { email } = response;
    
    // Find user
    const user = await User.findOne({email: email});

    if(!user){
        // If user does not exist return error with status code 404.
        res.status(404).send('User not exist');
    }else {
        // Generate token and send user and token to client
        const token  = jwt.sign({_id: user._id}, process.env.JWT_SECRET, {expiresIn: '7d'});
        res.send({
            token: token,
            user: user
        })
    }
    
})

/**
 * Register with facebook:
 * Any user from level 1-4
 * can register with facebook
 * */
 module.exports.facebookRegister = catchAsync(async (req: Request, res: Response) => {
    // Recive token and userID from client (facebook provide this)
    const {accessToken, userID,  linkedin_url, username, phone_number, expertise, interests} = req.body;

    // Get some data of the user by facebook api (first_name, last_name, id, email)
    let urlGraphFacebook = `https://graph.facebook.com/v12.0/${userID}/?fields=id,first_name,last_name,email&access_token=${accessToken}`;
    let response = await fetch(urlGraphFacebook, {method: 'GET'});
    response = await response.json();
    const { email, first_name, last_name } = response;
    
    // Find user
    const user = await User.findOne({email: email});

    if(user){
        // If user exist return error with status code 400.
        res.status(400).send('User already exist');
    }else {
        // Else create user with given data from client and google
        const user = new User({
            username: username,
            first_name: first_name,
            last_name: last_name,
            phone_number: phone_number,
            linkedin_url: linkedin_url,
            expertise: expertise,
            interests: interests,
            email: email
        }) 
        // Save user
        const savedUser = user.save();
        // Generate token
        // and send token and user to client
        const token  = jwt.sign({_id: savedUser._id}, process.env.JWT_SECRET, {expiresIn: '7d'});
        res.send({
            toket: token,
            user: savedUser
        });
    }
    
})

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

