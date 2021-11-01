// require the necessary libraries
const faker = require("faker");
const mongoose = require("mongoose");
const Expertise = require("../models/expertise.model");
const Task = require("../models/task.model");

module.exports = async function seedDB() {
  try {
    // The drop() command destroys all data from a collection.
    // Make sure you run it against proper database and collection.
    await Expertise.deleteMany();
    await Task.deleteMany();
    let expertises = [];
    let tasks = [];
    for (let i = 0; i < 15; i++) {
      const newTask = {
        name: faker.name.firstName(),
        description: faker.lorem.words(),
        status: faker.datatype.number(100),
        users: [mongoose.Types.ObjectId()],
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
  } catch (err) {
    console.log(err);
  }
};
