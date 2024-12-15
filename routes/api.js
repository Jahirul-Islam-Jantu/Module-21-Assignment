import express from 'express';
const router = express.Router();
import * as UserController from "../app/controller/UserController.js"

router.post("/UserRegistration", UserController.UserRegistration)
router.post('/UserLogIn', UserController.UserLogIn)
















export default router;