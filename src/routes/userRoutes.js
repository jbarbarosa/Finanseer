import express from 'express';
import { createNewUser } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.get('/', (req, res) => {
  res.send("Rota para entrar na conta");
})

userRouter.post('/', createNewUser);

export default userRouter;
