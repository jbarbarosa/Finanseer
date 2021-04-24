import User from '../models/userModel.js';
import { getToken } from '../middlewares/auth.js'
import bcrypt from 'bcryptjs'

export const createNewUser = async (req, res) => {
  console.log(req.body);

  try {
    const { email } = req.body;

    if (await User.findOne({ email })) return res.status(400).send("Usuário já existe");

    const user = await User.create(req.body);
    user.password = "password encrypted and stored";
    return res.status(200).send({ user, token: getToken({ id: user.id }) });

  } catch (err) {
    return res.status(400).send(`Erro ao registrar: ${ err }`);
  }
}

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select('+password');

    if (!user) return res.status(404).send("Erro: usuário não encontrado");
    if (!await bcrypt.compare(password, user.password))
      return res.send("Erro: senha incorreta");
    
    user.password = "passwords matched";
    const token = getToken({ id: user.id });

    return res.send(`Login realizado. Bem vindo, ${ user.firstName }.\nToken:${ token }`);
  } catch(err) {
    return res.status(400).send(`Erro: ${ err }`);
  }
}
