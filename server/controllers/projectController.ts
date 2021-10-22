import {Response, Request} from 'express';
const catchAsync = require('../utillities/catchAsync');

module.exports.index = catchAsync(async (req: Request, res: Response) => {
    res.json("All projects");
});


module.exports.createProject = catchAsync(async (req: Request, res: Response) => {
    res.json("Add project");
});
