import { Router } from "express";
import { registerUser } from "../Controllers/user.controler.js";

const router = Router() 



// router.route("/register").post(registerUser)
console.log("in router")

router.route("/register").post(registerUser)




export default router