import {Response, Request} from 'express';
const catchAsync = require('../utillities/catchAsync');
const Expertise = require('../models/expertise.model');

module.exports.index = catchAsync(async (req: Request, res: Response) => {
    // Find all expertise
    const expertises = Expertise.find();
    console.log(expertises);

    // Send Expertise to client
    res.json(expertises);
});

module.exports.show = catchAsync(async (req: Request, res: Response) => {
    // Find expertise
    const expertise = Expertise.findById(req.params.id);
    if(!expertise._id) {
        res.status(404).json('Expertise not found');
    }
    // Send Expertise to client
    res.json(expertise);
});

// module.exports.index = catchAsync(async (req: Request, res: Response) => {
//     // Find all expertise
//     const expertises = Expertise.find();

//     // Send Expertise to client
//     res.json(expertises);
// });

// module.exports.index = catchAsync(async (req: Request, res: Response) => {
//     // Find all expertise
//     const expertises = Expertise.find();

//     // Send Expertise to client
//     res.json(expertises);
// });


