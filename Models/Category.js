import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Category = new Schema({
    title:{
        type:String,
        required:true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.model("Category", Category)