import mongoose from "mongoose";
 const Schema = mongoose.Schema;

 const Portfolio = new Schema({
    userId:{
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
    },
    categoryId:{
        type: mongoose.Types.ObjectId,
        ref: "Category",
        required: true
    },
    title:{
        type:String,
        required:true
    },
    image:{
        type: String,
        required:false
    },
    fullname:{
        type:String,
        required:true
    },
    proficiency:{
        type:String,
        required:true
    },
    about: {
        type: String,
        required: false
      },
    skills: {
        type: [String],
        required: false
      },
    createdAt: {
        type: Date,
        default: Date.now
    }

 })

 export default mongoose.model("Portfolio", Portfolio)