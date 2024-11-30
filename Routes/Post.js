import express from "express";
import { createPost, getPostByPortfolioId } from "../Controllers/Post.js";
import { upload } from "../Middlewares/multer.js";

const postRouter = express.Router()

postRouter.post("/create",upload.array("images",5) ,createPost)
postRouter.get("/findById/:id",getPostByPortfolioId)

export default postRouter