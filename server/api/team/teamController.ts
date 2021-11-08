import { Response, Request } from "express";
const catchAsync = require("../../utillities/catchAsync");
const Team = require("../../models/team.model");

/**
 * Get all teams
 * Required user level 1
 * to get all teams
 */
module.exports.index = catchAsync(async (req: Request, res: Response) => {
    //Find all team
    const teams = await Team.find();
    console.log(`[TEAM-GET] - send ${teams.length} teams`);

    res.send(teams);
});