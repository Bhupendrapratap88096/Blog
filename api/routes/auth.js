import express from "express";
import { logout, register,login } from "../controllers/auth.js";
//import cors from "cors";





const router = express.Router();

//router.use(cors())
router.use(express.json());

router.post("/register",register)
router.post("/login",login)
router.post("/logout",logout)



export default router;