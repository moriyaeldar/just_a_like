import {Response, Request} from 'express';
const catchAsync = require('../../utillities/catchAsync');
const Expertise = require('../../models/expertise.model');
const User = require('../../models/user.model');

/**
 * Get all expertise:
 * Any user from level 1-4
 * can get all expertises
 * */
module.exports.index = catchAsync(async (req: Request, res: Response) => {
    // Find all expertise
    const expertises = await Expertise.find();
    console.log(`[EXPERTISE-GET] - send ${expertises.length} expertise`);

    // Send Expertise to client
    res.send(expertises);
});

/**
 * Get expertise:
 * Any user from level 1-4
 * can get expertise
 *  * @param:
 * id - user id
 * */
module.exports.getAllAssociatedExpertise = catchAsync(async (req: Request, res: Response) => {
    const { uid } = req.params;
    // Find all expertise id that inside spacific user
    const usersExpertisesIDs = await User.findById({ _id: uid }, "expertise");
    // Find all expertise where id is like usersExpertisesIDs
    const expertise = await Expertise.findById(usersExpertisesIDs.expertise);
    console.log(`[EXPERTISE-GET] - send expertise`);

    // Send Expertise to client
    res.send(expertise);
});


/**
 * Create expertise:
 * Require user in level 1
 * can create expertises
 * */
module.exports.create = catchAsync(async (req: Request, res: Response) => {
    const { name } = req.body;
    
    // Create new expertise
    const expertise = await new Expertise({name});

    // Save expertise in Database
    expertise.save();

    console.log(`[EXPERTISE-CREATE]: Created expertise`);
  
    res.send(expertise);
});

/**
 * Delete expertise:
 * Require user level 1 (Admin)
 * to delete existing expertise.
 *
 * @param:
 * id - expertise id
 * */
module.exports.delete = catchAsync(async (req: Request, res: Response) => {
    // Find expertise and delete
    let result = await Expertise.findByIdAndDelete(req.params.id);
    if(!result) {
        res.status(404).send({ message: 'No Expertise found'})
    }
    
    // Send result to client
    console.log(`[EXPERTISE-DELETE]: Deleted expertise`);
    res.send(result);
});


