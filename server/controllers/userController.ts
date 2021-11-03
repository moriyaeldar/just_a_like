import {Response, Request} from 'express';
const fetch = require('node-fetch');
const {OAuth2Client} = require('google-auth-library');
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

module.exports.googleLogin = catchAsync(async (req: Request, res: Response) => {
    // Recive token from client (google provide this token) 
    const {tokenId} = req.body;
    
    // Check token validity
    client.verifyIdToken({idToken: tokenId, audience: process.env.GOOGLE_AUTH_CLIENT_ID})
    .then(async (response: any) =>{
        const {email_verfied, name, email, imageUrl} = response.payload;
        if(email_verfied) {
            const user = await User.find({email: email});
            if(!user){
                res.status(400).send('User not exist');
            }else {
                const token  = jwt.sign({_id: user._id}, process.env.JWT_SECRET, {expiresIn: '7d'});
                res.send({
                    token: token,
                    user: user
                })
            }
        }     
    })
});

module.exports.googleRegister = catchAsync(async (req: Request, res: Response) => {
    // Recive token from client (google provide this token) 
    const {tokenId, linkedin_url, phone_number, expertise, interests} = req.body;
    
    // Check token validity
    client.verifyIdToken({idToken: tokenId, audience: process.env.GOOGLE_AUTH_CLIENT_ID})
    .then((response: any) =>{
        const {email_verfied, name, given_name, family_name, email, imageUrl} = response.payload;
        if(email_verfied) {
            const user = User.find({email: email});
            if(user){
                res.status(400).send('User already exist');
            }else {
                const user = new User({
                    name: name,
                    first_name: given_name,
                    last_name: family_name,
                    phone_number: phone_number,
                    linkedin_url: linkedin_url,
                    expertise: expertise,
                    interests: interests,
                    email: email
                }) 
                const savedUser = user.save();
                const token  = jwt.sign({_id: savedUser._id}, process.env.JWT_SECRET, {expiresIn: '7d'});

                res.send({
                    toket: token,
                    user: savedUser
                });
            }
        }     
    })
});

module.exports.facebookLogin = catchAsync(async (req: Request, res: Response) => {
    // Recive token and userID from client (facebook provide this)
    const {accessToken, userID} = req.body;

    let urlGraphFacebook = `https://graph.facebook.com/v12.0/${userID}/?fields=id,first_name,last_name,email&access_token=${accessToken}`;
    let data; 
    fetch(urlGraphFacebook, {method: 'GET'})
    .then((response: any) => response.json())
    .then(async (response: any) => {
        console.log(response);
        const { email } = response ?? '';
        const user = await User.find({email: email});
        if(!user){
            res.status(400).send('User not exist');
        }else {
            const token  = jwt.sign({_id: user._id}, process.env.JWT_SECRET, {expiresIn: '7d'});
            res.send({
                token: token,
                user: user
            })
        }  
    });

    
})

module.exports.delete = catchAsync(async (req: Request, res: Response) => {
    const result = await User.findByIdAndDelete(req.params.id);
    if(!result) {
        res.status(404).send({ message: 'No User found'});
    }
    res.send(result);
});

