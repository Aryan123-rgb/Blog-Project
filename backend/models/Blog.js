const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const BlogSchema = new Schema(
  {
    title: { type: String },
    summary: {type : String},
    description: { type: String },
    image: { type: String },
    isFeatured : {type : Boolean},
    author : {type : mongoose.Schema.Types.ObjectId , ref: "User"}
  },
  { timestamps: true }
);

const BlogModel = model("Blog", BlogSchema);

module.exports = BlogModel;
