const faker = require("faker");
const mongoose = require("mongoose");
const Expertise = require("../models/expertise.model");
const Task = require("../models/task.model");
const Project = require('../models/project.model');

module.exports = async function seedDB() {
  try {
    // The drop() command destroys all data from a collection.
    // Make sure you run it against proper database and collection.
    await Expertise.deleteMany();
    await Task.deleteMany();
    await Project.deleteMany();
    let expertises = [];
    let tasks = [];
    let projects = [];
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

      const newProject = {
        name: faker.lorem.words(1),
        projectManagers: [mongoose.Types.ObjectId()],
        status: faker.datatype.number(100),
        tasks: [mongoose.Types.ObjectId()],
        team: mongoose.Types.ObjectId()
      };

      tasks.push(newTask);
      expertises.push(newExpertise);
      projects.push(newProject);
    }

    await Expertise.create(expertises);
    console.log("Database seeded with expertises! :)");

    await Task.create(tasks);
    console.log("Database seeded with tasks! :)");

    await Project.create(projects);
    console.log('Database seeded with projects.');

  } catch (err) {
    console.log(err);
  }
};
