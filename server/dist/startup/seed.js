var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
function seedTasks() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield Task.deleteMany();
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
        yield Task.create(tasks);
        console.log("Tasks Created");
    });
}
function seedUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield User.deleteMany();
        if (res) {
            console.log("Users Deleted Successfully");
        }
        let users = [];
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
        yield User.create(users);
        console.log("Users Created");
    });
}
function seedExperties() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield Expertise.deleteMany();
        if (res) {
            console.log("Expertises Deleted Successfully");
        }
        let expertise = [];
        //Set new expertise with constant ID
        for (let i = 0; i < 7; i++) {
            const newExpertise = {
                _id: mongoose.Types.ObjectId("618269e71c" + i + "8cbf7596a541f"),
                name: faker.name.jobType(),
            };
            expertise.push(newExpertise);
        }
        yield Expertise.create(expertise);
        console.log("Expertise Created");
    });
}
function seedInterests() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield Interest.deleteMany();
        if (res) {
            console.log("Interests Deleted Successfully");
        }
        let interests = [];
        //Set new interests with constant ID
        for (let i = 0; i < 7; i++) {
            const newInterest = {
                _id: mongoose.Types.ObjectId("61826b7008baa" + i + "6b3af19e26"),
                name: "interest" + i,
            };
            interests.push(newInterest);
        }
        yield Interest.create(interests);
        console.log("Interests Created");
    });
}
function seedProjects() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield Project.deleteMany();
        if (res) {
            console.log("Projects Deleted Successfully");
        }
        let projects = [];
        for (let i = 0; i < 15; i++) {
            const newProject = {
                name: faker.name.firstName(),
                projectManager: mongoose.Types.ObjectId(),
                status: faker.datatype.number(100),
                tasks: [
                    mongoose.Types.ObjectId("999269e71c08cbf7596a541f"),
                    mongoose.Types.ObjectId("999269e71c18cbf7596a541f"),
                    mongoose.Types.ObjectId("999269e71c28cbf7596a541f"),
                    mongoose.Types.ObjectId("999269e71c48cbf7596a541f"),
                ],
                team: [mongoose.Types.ObjectId("618280bfa70b06d020616f34")],
            };
            projects.push(newProject);
        }
        yield Project.create(projects);
        console.log("Projects Created");
    });
}
function seedTeams() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield Team.deleteMany();
        if (res) {
            console.log("Teams Deleted Successfully");
        }
        let teams = [];
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
        yield Team.create(teams);
        console.log("Teams Created");
    });
}
function seedDB() {
    return __awaiter(this, void 0, void 0, function* () {
        yield seedInterests();
        yield seedExperties();
        yield seedUsers();
        yield seedTasks();
        yield seedTeams();
        yield seedProjects();
    });
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
//# sourceMappingURL=seed.js.map