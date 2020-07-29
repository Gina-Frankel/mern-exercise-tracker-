// first require mongoose
const mongoose = require("mongoose");

// create mongoose schema
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      // trims whitespace
      trim: true,
      minlength: 3,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
