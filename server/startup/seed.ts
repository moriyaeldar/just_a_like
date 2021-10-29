// require the necessary libraries
const faker = require("faker");
const MongoClient = require("mongodb").MongoClient;

module.exports = async function seedDB() {
  // Connection URL
  const uri = "mongodb://localhost/just_a_like";
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  try {
    await client.connect();
    console.log("Connected correctly to server");
    const collection = client.db("just_a_like").collection("Task");
    // The drop() command destroys all data from a collection.
    // Make sure you run it against proper database and collection.
    collection.drop();
    // make a bunch of time series data
    let tasks = [];
    for (let i = 0; i < 15; i++) {
      const newTask = {
        name: faker.name.firstName(),
        description: faker.lorem.words(),
        status: faker.datatype.number(100),
        users: [faker.datatype.number(), faker.datatype.number(),faker.datatype.number()],
        startDate: Date.now(),
        finishDate: Date.now(),
      };

      tasks.push(newTask);
    }
    collection.insertMany(tasks);
    console.log("Database seeded with tasks! :)");
    // client.close();
  } catch (err) {
    console.log(err);
  }
};
