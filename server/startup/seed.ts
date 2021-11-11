const faker = require("faker");
const Task = require("../models/task.model");
const User = require("../models/user.model");
const Project = require("../models/project.model");
const Expertise = require("../models/expertise.model");
const Interest = require("../models/interest.model");
const Team = require("../models/team.model");
const mongoose = require("mongoose");

/**
 * Seeding mongoDB
 * All functions create an objects with a constant ID (1 digit changes).
 *
 * Note: When the system is working on real
 * data the ID will be change.
 */
async function seedTasks() {
  const res = await Task.deleteMany();
  if (res) {
    console.log("Tasks Deleted Successfully");
  }
  let tasks = [];

  //Set new Task with constant ID
  for (let i = 0; i < 10; i++) {
    const newTask = {
      _id: mongoose.Types.ObjectId("999269e71c" + i + "8cbf7596a541f"),
      name: faker.name.firstName(),
      description: faker.lorem.words(),
      status: faker.datatype.number(100),
      users: [
        mongoose.Types.ObjectId("888269e71c18cbf7596a541f"),
        mongoose.Types.ObjectId("888269e71c28cbf7596a541f"),
        mongoose.Types.ObjectId("888269e71c38cbf7596a541f"),
      ],
      startDate: Date.now(),
      finishDate: Date.now(),
    };

    tasks.push(newTask);
  }
  await Task.create(tasks);
  console.log("Tasks Created");
}

async function seedUsers() {
  const res = await User.deleteMany();
  if (res) {
    console.log("Users Deleted Successfully");
  }
  let users: any = [];

  //Set new User with constant ID
  for (let i = 0; i < 10; i++) {
    const newUser = new User({
      _id: mongoose.Types.ObjectId("888269e71c" + i + "8cbf7596a541f"),
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      phone_number: faker.phone.phoneNumber(),
      linkedin_url: faker.internet.email("linkedin"),
      expertise: "618269e71c08cbf7596a541f",
      interests: ["61826b7008baa06b3af19e26", "61826b7008baa16b3af19e26"],
      level: "4",
    });

    users.push(newUser);
  }
  await User.create(users);
  console.log("Users Created");
}

async function seedExperties() {
  const res = await Expertise.deleteMany();
  if (res) {
    console.log("Expertises Deleted Successfully");
  }
  let expertise: any = [];

  //Set new expertise with constant ID
  for (let i = 0; i < 7; i++) {
    const newExpertise = {
      _id: mongoose.Types.ObjectId("618269e71c" + i + "8cbf7596a541f"),
      name: faker.name.jobType(),
    };

    expertise.push(newExpertise);
  }
  await Expertise.create(expertise);
  console.log("Expertise Created");
}

async function seedInterests() {
  const res = await Interest.deleteMany();
  if (res) {
    console.log("Interests Deleted Successfully");
  }
  let interests: any = [];

  //Set new interests with constant ID
  for (let i = 0; i < 7; i++) {
    const newInterest = {
      _id: mongoose.Types.ObjectId("61826b7008baa" + i + "6b3af19e26"),
      name: "interest" + i,
    };

    interests.push(newInterest);
  }
  await Interest.create(interests);
  console.log("Interests Created");
}

async function seedProjects() {
  const res = await Project.deleteMany();
  if (res) {
    console.log("Projects Deleted Successfully");
  }
  let projects: any = [];

  for (let i = 0; i < 15; i++) {
    const newProject = {
      name: faker.commerce.productName(),
      projectManager: mongoose.Types.ObjectId(),
      description: faker.commerce.productDescription(),
      status: faker.datatype.number(100),
      tasks: [
        mongoose.Types.ObjectId("999269e71c08cbf7596a541f"),
        mongoose.Types.ObjectId("999269e71c18cbf7596a541f"),
        mongoose.Types.ObjectId("999269e71c28cbf7596a541f"),
        mongoose.Types.ObjectId("999269e71c48cbf7596a541f"),
      ],
      participants: [mongoose.Types.ObjectId(), mongoose.Types.ObjectId()],
    };

    projects.push(newProject);
  }
  await Project.create(projects);
  console.log("Projects Created");
}

async function seedTeams() {
  const res = await Team.deleteMany();
  if (res) {
    console.log("Teams Deleted Successfully");
  }
  let teams: any = [];

  //Set new Team with constant ID
  for (let i = 0; i < 10; i++) {
    const newTeam = {
      _id: mongoose.Types.ObjectId("666269e71c" + i + "8cbf7596a541f"),
      name: faker.company.companyName(),
      admin: mongoose.Types.ObjectId("888269e71c68cbf7596a541f"),
      status: faker.datatype.number(100),
      tasks: [
        mongoose.Types.ObjectId("999269e71c08cbf7596a541f"),
        mongoose.Types.ObjectId("999269e71c18cbf7596a541f"),
        mongoose.Types.ObjectId("999269e71c28cbf7596a541f"),
        mongoose.Types.ObjectId("999269e71c48cbf7596a541f"),
      ],
      participants: [
        mongoose.Types.ObjectId("888269e71c28cbf7596a541f"),
        mongoose.Types.ObjectId("888269e71c38cbf7596a541f"),
      ],
    };

    teams.push(newTeam);
  }
  await Team.create(teams);
  console.log("Teams Created");
}

async function seedDB() {
  await seedInterests();
  await seedExperties();
  await seedUsers();
  await seedTasks();
  await seedTeams();
  await seedProjects();
}
module.exports = {
  seedTasks,
  seedUsers,
  seedProjects,
  seedTeams,
  seedInterests,
  seedExperties,
  seedDB
};