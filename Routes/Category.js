import express from "express";
import { addCategory, getCategories,deleteCategory, updateCategory } from "../Controllers/Category.js";


const categoryRoute = express.Router()

categoryRoute.post ("/add",addCategory);
categoryRoute.get('/getAll',getCategories);
categoryRoute.delete('/delete/:id',deleteCategory);

export default categoryRoute;