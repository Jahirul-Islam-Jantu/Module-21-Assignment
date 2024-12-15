import express from 'express';
const router = express.Router();
import * as UserController from "../app/controller/UserController.js"
import {UserAuthMiddleware} from "../app/middleware/UserAuthMiddleware.js";



router.post("/UserRegistration", UserController.UserRegistration)
router.post('/UserLogIn', UserController.UserLogIn)
router.get("/GetAllUsers", UserController.GetAllUsers)
router.get("/GetSingleProfile",UserAuthMiddleware ,UserController.GetSingleProfile)
router.post("/UserProfileUpdate",UserAuthMiddleware ,UserController.UserProfileUpdate)
router.delete("/DeleteSingleUser/:_id",UserAuthMiddleware ,UserController.DeleteSingleUser)

















export default router;