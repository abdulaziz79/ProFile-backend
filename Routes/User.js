import express from "express";
import { 
    register, 
    getUsers, 
    getUserById, 
    deleteUserById, 

} from "../Controllers/User.js";
import { login, verifyToken, loggedInUser, logOut , checkRole} from "../Middlewares/authentication.js";

const router = express.Router();

router.post("/register", register);
router.get("/:id", getUserById);
router.post("/login", login);
router.get("/me", verifyToken, loggedInUser);
router.get("/",  getUsers); 
router.post("/logout", logOut);


export default router;
