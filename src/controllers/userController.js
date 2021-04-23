import User from '../models/userModel.js';
import { getToken } from '../middlewares/auth.js'

export const createNewUser = async (req, res) => {
  console.log(req.body);

  try {
    const { email } = req.body;

    if (await User.findOne({ email })) return res.status(400).send("Usuário já existe");

    const user = await User.create(req.body);
    user.password = "password encrypted and stored";
    console.log("Senha criada")
    return res.status(200).send({ user, token: getToken({ id: user.id }) });

  } catch (err) {
    return res.status(400).send(`Erro ao registrar: ${ err }`);
  }
}
