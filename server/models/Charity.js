// if you add a charity information, make sure to load it to server/schemas/resolvers.js

const mongoose = require("mongoose");

const { Schema } = mongoose;

const charitySchema = new Schema({
  donation: {
    type: Number,
    required: true,
  },
  donatedTotal: {
    type: Number,
    required: true,
  },
  goal: {
    type: Number,
    required: true,
  },
  toGoal: {
    type: Number,
    required: true,
    default: goal - donatedTotal,
  },
});

const Charity = mongoose.model("Charity", charitySchema);

module.exports = Charity;
