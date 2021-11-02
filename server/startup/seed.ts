const faker = require("faker");
const Task = require("../models/task.model");
const User = require("../models/user.model");
const mongoose = require("mongoose");

async function seedTasks() {
  const res = await Task.deleteMany();
  if (res) {
    console.log("Tasks Deleted Successfully");
  }
  let tasks = [];

  for (let i = 0; i < 15; i++) {
    const newTask = {
      name: faker.name.firstName(),
      description: faker.lorem.words(),
      status: faker.datatype.number(100),
      users: [
        mongoose.Types.ObjectId(),
        mongoose.Types.ObjectId(),
        mongoose.Types.ObjectId(),
      ],
      startDate: Date.now(),
      finishDate: Date.now(),
    };

    tasks.push(newTask);
  }
  // tasks:Task
  await Task.create(tasks);
  console.log("Tasks Created");
}

async function seedUsers() {
  const res = await User.deleteMany();
  if (res) {
    console.log("Users Deleted Successfully");
  }
  let users: any = [];

  for (let i = 0; i < 15; i++) {
    const newUser = {
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      email: faker.internet.email(),
      phone_number: faker.datatype.number(900000),
      linkedin_url: faker.internet.email(),
      experties: ["617fcc43e6aad249c573c757"],
      interests: ["617fcc43e6aad249c573c758"],
      level: '4',
    };

    users.push(newUser);
  }
  await User.create(users);
  console.log("Users Created");
}
module.exports = { seedTasks, seedUsers };