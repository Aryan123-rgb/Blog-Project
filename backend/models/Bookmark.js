const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const BookmarkSchema = new Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    blog: { type: mongoose.Schema.Types.ObjectId, ref: "Blog" },
  },
  { timestamps: true }
);

const BookmarkModel = model("Bookmark", BookmarkSchema);

module.exports = BookmarkModel;
