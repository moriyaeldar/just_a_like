const mongoose = require("mongoose");

module.exports = function() {
    mongoose
        .connect("mongodb://localhost/just_a_like", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            })
            .then(() => console.log("Connected to MongoDB..."))
            .catch(() => console.error("Could not connect to MongoDB..."));
        }