import express from 'express';
import { createNewUser, login } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.get('/', login);

userRouter.post('/', createNewUser);

export default userRouter;
