import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Post = new Schema({
  portfolioId: {
    type: mongoose.Types.ObjectId,
    ref: "Portfolio",
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  images: {
    type: [String], 
    required: false
},
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Post", Post);
