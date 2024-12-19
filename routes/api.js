import express from 'express';
const router = express.Router();
import * as UserController from "../app/controller/UserController.js"
import {UserAuthMiddleware} from "../app/middleware/UserAuthMiddleware.js";



router.post("/UserRegistration", UserController.UserRegistration)
router.post('/UserLogIn', UserController.UserLogIn)
router.get("/GetAllUsers", UserController.GetAllUsers)
router.get("/GetSingleProfile/:id",UserAuthMiddleware,UserController.GetSingleProfile)
router.post("/UserProfileUpdate/:id",UserAuthMiddleware ,UserController.UserProfileUpdate)
router.delete("/DeleteSingleUser/:id",UserAuthMiddleware ,UserController.DeleteSingleUser)

















export default router;