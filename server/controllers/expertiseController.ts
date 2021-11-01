import {Response, Request} from 'express';
const catchAsync = require('../utillities/catchAsync');
const Expertise = require('../models/expertise.model');

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
 * Create expertise:
 * Any user from level 1-4
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

module.exports.delete = catchAsync(async (req: Request, res: Response) => {
    // Find expertise and delete
    let result = await Expertise.findByIdAndDelete(req.params.id);
    console.log(result);
    
    // Send result to client
    res.send(result);
});


