import express from 'express';
const router = express.Router();
import * as UserController from "../app/controller/UserController.js"
import {UserAuthMiddleware} from "../app/middleware/UserAuthMiddleware.js";


router.post("/UserRegistration", UserController.UserRegistration)
router.post('/UserLogIn', UserController.UserLogIn)
router.get("/GetAllUsers", UserController.GetAllUsers)
router.get("/GetSingleProfile/:phone",UserAuthMiddleware ,UserController.GetSingleProfile)

















export default router;