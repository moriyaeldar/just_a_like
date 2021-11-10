const mongoose = require("mongoose");
// const uri = "mongodb://localhost/just_a_like";
const uri = process.env.MONGO_ATLAS;


/**
 * 
 * @returns db connection
 */
 module.exports = async function connect() {
  mongoose.connect(uri, {}); 
  const connection = mongoose.connection;
  connection.once("open", () => {
    console.log("MongoDB database connect");
  });
}

export {}
