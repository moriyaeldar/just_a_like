import {Response, Request} from 'express';
const catchAsync = require('../../utillities/catchAsync');
const Interest = require('../../models/interest.model');

/**
 * Get all interests:
 * Any user from level 1-4
 * can get all interests
 * */
 module.exports.index = catchAsync(async (req: Request, res: Response) => {
    // Find all interests
    const interests = await Interest.find();
    console.log(`[INTEREST-GET] - send ${interests.length} interests`);

    // Send interests to client
    res.send(interests);
});

/**
 * Create interests:
 * Require user in level 1
 * can create interests
 * */
module.exports.create = catchAsync(async (req: Request, res: Response) => {
    const { name } = req.body;
    
    // Create new interest
    const interest = await new Interest({name});

    // Save interest in Database
    interest.save();

    console.log(`[INTEREST-CREATE]: Created interest`);
  
    res.send(interest);
});

/**
 * Delete interest:
 * Require user level 1 (Admin)
 * to delete existing interest.
 *
 * @param:
 * id - interest id
 * */
module.exports.delete = catchAsync(async (req: Request, res: Response) => {
    // Find interest and delete
    let result = await Interest.findByIdAndDelete(req.params.id);
    if(!result) {
        res.status(404).send({ message: 'No interest found'})
    }
    
    // Send result to client
    console.log(`[INTEREST-DELETE]: Deleted intesrest`);
    res.send(result);
});

