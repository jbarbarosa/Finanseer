import bcrypt from 'bcryptjs';

const loginService = async (user, password) => {
  if (!await bcrypt.compare(password, user.password)) {
    const result = [401, "Senha incorreta"];
    return result;
  } else {
    user.password = "passwords matched";
    const result = [200, "Usuário conectado"];
    return result;
  }
}

export default loginService;
