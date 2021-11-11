import express, { Application } from "express";
const app: Application = express();

require("dotenv").config();
require("./startup/db")();
require("./startup/routes")(app);
const path = require('path')
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
 app.use(express.static(__dirname)); 
const port = process.env.PORT || 8000;
app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});app.listen(port, () => {
  console.log("Connect successfully on port: " + port);
});

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});