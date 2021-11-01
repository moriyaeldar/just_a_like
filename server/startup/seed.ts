// require the necessary libraries
const faker = require("faker");
const MongoClient = require("mongodb").MongoClient;
const mongoose = require("mongoose");
const Expertise = require("../models/expertise.model");
const Task = require("../models/task.model");

module.exports = async function seedDB() {
  // Connection URL
  // const uri = "mongodb://localhost/just_a_like";
  // const client = new MongoClient(uri, {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true,
  // });
  try {
    // await client.connect();
    // console.log("Connected correctly to server");

    // The drop() command destroys all data from a collection.
    // Make sure you run it against proper database and collection.
    await Expertise.deleteMany();
    await Task.deleteMany();

    // make a bunch of time series data
    let expertises = [];
    let tasks = [];
    for (let i = 0; i < 15; i++) {
      const newTask = {
        name: faker.name.firstName(),
        description: faker.lorem.words(),
        status: faker.datatype.number(100),
        users: [],
        startDate: Date.now(),
        finishDate: Date.now(),
      };

      const newExpertise = {
        name: faker.lorem.words(1)
      }

      expertises.push(newExpertise);

      tasks.push(newTask);
    }
    await Expertise.create(expertises);
    console.log("Database seeded with expertises! :)");

    await Task.create(tasks);
    console.log("Database seeded with tasks! :)");
    // client.close();
  } catch (err) {
    console.log(err);
  }
};
