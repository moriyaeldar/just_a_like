import express, { Application } from "express";
const app: Application = express();

require("dotenv").config();
require("./startup/db")();
require("./startup/routes")(app);
const seeds = require("./startup/seed");

//Uncomment to seed db
// seeds.seedExperties();
// seeds.seedInterests();
// seeds.seedUsers();
// seeds.seedTasks();
// seeds.seedProjects();
// seeds.seedTeams();

// Seed all DB
// seeds.seedDB();

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log("Connect succesfully on port: " + port);
});
