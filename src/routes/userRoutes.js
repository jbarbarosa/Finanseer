import express from 'express';
const userRouter = express.Router();

userRouter.get('/', (req, res) => {
  res.send("Rota para entrar na conta");
})

userRouter.post('/', (req, res) => {
  res.send("Rota para criar novo usuário");
})

export default userRouter;
