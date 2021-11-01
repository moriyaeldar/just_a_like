import express, { Application } from "express";
const app: Application = express();

// app.use(cors({ 
//   credentials: true
// })); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require('body-parser').json())
require("dotenv").config();
require("./startup/db").connect();

require("./startup/seed")();
require("./startup/routes")(app);


// const seeds = require("./seeds");

// seeds();

const port = process.env.PORT|| 8000;
app.listen(port, () => {
  console.log("Connect succesfully on port: " + port);
});


    
