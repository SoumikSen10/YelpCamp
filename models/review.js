const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  body: String,
  rating: Number,
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

/* The model you define in the Node. js server is an abstraction of the data in your MongoDB database, which is represented as a document. Because of this abstraction, you may use the “Mongoose” schemas to construct a blueprint of how you want the added data to look and behave. */

module.exports = mongoose.model("Review", reviewSchema);
