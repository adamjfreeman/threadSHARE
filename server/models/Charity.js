// if you add a charity information, make sure to load it to server/schemas/resolvers.js

const mongoose = require("mongoose");

const { Schema } = mongoose;

const charitySchema = new Schema({
  goalHitDate: {
    type: Date,
    default: Date.now,
  },
  // goal: {
  //   type: Number,
  //   required: true,
  // },
});

const Charity = mongoose.model("Charity", charitySchema);

module.exports = Charity;
