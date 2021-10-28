const mongoose = require("mongoose");

const TestimonialSchema = new mongoose.Schema(
  {
    photo: {
      type: String,
    },
    name: {
      type: String,
    },
    post: {
      type: String,
    },
    description: {
      type: String,
    },
    active: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Testimony = mongoose.model("Testimony", TestimonialSchema);
module.exports = Testimony;
