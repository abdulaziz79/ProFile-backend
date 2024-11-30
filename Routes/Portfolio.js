import express  from "express";
import { addPortfolio, updatePortfolio, getAllPortfolios } from "../Controllers/Portfolio.js";
import { verifyToken } from "../Middlewares/authentication.js";
import { upload } from "../Middlewares/multer.js";

const portfolioRouter = express.Router();

portfolioRouter.post("/create", upload.single("image"),addPortfolio)
portfolioRouter.get("/getAll", getAllPortfolios)
portfolioRouter.patch("/update/:id", upload.single("image"),updatePortfolio)


export default portfolioRouter