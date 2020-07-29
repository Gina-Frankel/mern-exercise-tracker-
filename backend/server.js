// require all the things we need
const express = require("express");
const cors = require("cors");
// helps us connect to mongo DB database
const mongoose = require("mongoose");

// configures so we can have environement variables in teh .env files
require("dotenv").config();

//create expresss server
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
//allows us to parse json because server sends and recieves JSON
app.use(express.json());

// need to get from mongoDB dashboard
const uri = process.env.ATLAS_URI;
// flags... to deal with updates with mongodb
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully ");
});

// require files with routes
const exercisesRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");

//use routes
app.use("/exercises", exercisesRouter);
app.use("/users", usersRouter);

//starts the server as listens on a certain port
app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});
