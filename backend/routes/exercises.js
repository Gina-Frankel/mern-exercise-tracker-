const router = require("express").Router();
let Exercise = require("../models/exercise.model");

router.route("/").get((req, res) => {
  Exercise.find()
    .then((exercises) => res.json(exercises))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  // converted to a number
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const newExercise = new Exercise({
    username,
    description,
    duration,
    date,
  });

  newExercise
    .save()
    .then(() => res.json("Exercise added"))
    .catch((err) => res.status(400).json("Error:" + err));
});

//object id that is created by mongodb
router.route("/:id").get((req, res) => {
  // gets the id from the url
  Exercise.findById(req.params.id)
    // then get the exercise and return it by json
    .then((exercise) => res.json(exercise))
    .catch((err) => res.status(400).json("Error: " + err));
});

// delete request
router.route("/:id").delete((req, res) => {
  // get id from url and deletes it from database
  Exercise.findByIdAndDelete(req.params.id)
    // returns "Exercise deleted"
    .then(() => res.json("Exercise deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/id").post((req, res) => {
  Exercise.findById(req.params.id).then((exercise) => {
    // take information and assign it  to fields of exercise that already exists
    exercise.username = req.body.username;
    exercise.description = req.body.description;
    exercise.duration = Number(req.body.duration);
    exercise.date = Date.parse(req.body.date);
  });
});

module.exports = router;