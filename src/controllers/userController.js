import createNewUserService from './services/user/createNewUserService.js';
import loginService from './services/user/loginService.js';
import findUserByEmail from './services/user/findUserByEmail.js';
import { getToken } from '../middlewares/auth.js'

export const createNewUser = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await findUserByEmail(email);
    if (user) return res.status(400).send("Usuário já existe");
    const { password, firstName, lastName } = req.body;
    const result = await createNewUserService(email, password, firstName, lastName);
    if (result[0] === 200) {
      const user = result[1];
      return res.status(200).send({token: getToken({ id: user.id })});
    } else {
      return res.status(400).send(result[0]);
    }
  } catch (err) {
    return res.status(400).send(`Erro ao registrar: ${ err }`);
  }
}

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await findUserByEmail(email, true);
    if (!user) return res.status(404).send("Erro: usuário não encontrado");
    const result = await loginService(user, password);
    if (result[0] === 200) {
      const token = getToken({ id: user.id });
      return res.status(result[0]).send(token);
    } else {
      const token = 'Não autorizado';
      return res.status(result[0]).send(token);
    }
  } catch(err) {
    return res.status(400).send(`Erro: ${ err }`);
  }
}
