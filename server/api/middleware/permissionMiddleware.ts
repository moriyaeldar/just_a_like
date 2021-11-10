import { Response, Request, NextFunction } from "express";
const User = require("../../models/user.model");
const jwt = require("jsonwebtoken");

/**Only Admin access
 * [Level 1 User]
 * @access Level 1 - Admin
 * @augments user._id should be in request body.
 *
 */
const admin = async (req: Request, res: Response, next: NextFunction) => {
  const { _id } = req.body.user || req.body;
  const user = await User.findById(_id);

  if (user && user.level == "1") {
    next();
  } else {
    res.status(401).send("Not authorized as an admin");
    throw new Error("Not authorized as an admin");
  }
};

/**Check if user is't Junior
 * @access Level 1, 2, 3
 * @augments user._id should be in request body.
 */
const notJunior = async (req: Request, res: Response, next: NextFunction) => {
  const { _id } = req.body.user || req.body;
  const user = await User.findById(_id);

  if (user && Number(user.level) <= 3) {
    next();
  } else {
    res.status(401).send("Not authorized as an notJunior");
    throw new Error("Not authorized as an notJunior");
  }
};

/** Only Volunteer access
 * @access Level 3 - Volunteer
 * @augments user._id should be in request body.
 */
const volunteer = async (req: Request, res: Response, next: NextFunction) => {
  const { _id } = req.body.user || req.body;
  const user = await User.findById(_id);

  if (user && Number(user.level) == 3) {
    next();
  } else {
    res.status(401).send("Not authorized as an Volunteer");
    throw new Error("Not authorized as an Volunteer");
  }
};

/** Only Task Manager access
 * @access Level 2 - Task Manager
 * @augments user._id should be in request body.
 */
const taskManager = async (req: Request, res: Response, next: NextFunction) => {
  const { _id } = req.body.user || req.body;
  const user = await User.findById(_id);

  if (user && Number(user.level) == 2) {
    next();
  } else {
    res.status(401).send("Not authorized as an Task Manager");
    throw new Error("Not authorized as an Task Manager");
  }
};

/**Check if user exist
 * @access Level 1, 2, 3, 4
 * @augments user._id should be in request body.
 */
const allPermitted = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { _id } = req.body.user || req.body;
  const user = await User.findById(_id);

  if (user) {
    next();
  } else {
    res.status(401).send("User not authorized");
    throw new Error("Not authorized");
  }
};

/**Check if user exist
 * @access Level 1, 2, 3, 4
 * @augments user._id should be in request body.
 */
const requireUser = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.header("x-auth-token");

  if (!token) {
    console.log(token);
    
    return res.status(401).send("User not authorized");}

  const verified = jwt.verify(token, process.env.JWT_SECRET);

  if (!verified) {
    console.log(token);

    return res.status(400).send("User not authorized");}

  next();
};
export { admin, requireUser, taskManager, volunteer, notJunior, allPermitted };
