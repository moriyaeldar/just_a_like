import express, { Application } from "express";
const app: Application = express();

require("dotenv").config();
require("./startup/db")();
require("./startup/routes")(app);
const seeds = require("./startup/seed");

/***************************************
 ********* BEFORE THE PUSH *************
 ********** COMMENT SEEDS **************
 ************* THANKS ! ****************
 ***************************************
 */
//Uncomment to seed db
// seeds.seedExperties();
// seeds.seedInterests();
// seeds.seedUsers();
// seeds.seedTasks();
// seeds.seedProjects();
// seeds.seedTeams();

// Seed all DB
// seeds.seedDB();

/***************************************
 ********* BEFORE THE PUSH *************
 ********** COMMENT SEEDS **************
 ************* THANKS ! ****************
 ***************************************
 */

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log("Connect successfully on port: " + port);
});
