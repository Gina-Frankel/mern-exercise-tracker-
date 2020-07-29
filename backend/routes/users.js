// need express router as this is a route we are creating
const router = require("express").Router();
// require mongoose model
let User = require("../models/user.model");

//first route - handles incoming http  on /users path

router.route("/").get((req, res) => {
  // finds users
  User.find()
    // return in json format
    .then((users) => res.json(users))
    // if error returns status 400 with error message
    .catch((err) => res.status(400).json("Error: " + err));
});

// 2. handles incoming post requests
router.route("/add").post((req, res) => {
  // new user is part of request body
  const username = req.body.username;
  // new instance of user
  const newUser = new User({ username });

  //new user is saved
  newUser
    .save()
    .then(() => res.json("User added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

// need to do this all router
module.exports = router;
