import User from "../models/userModel.js";
import bcrypt from 'bcryptjs';

export const checkIfMatch = async (req, res, next) => {
  try {
    const expectedId = req.id;
    const password = req.body.password;
    if (!password) return res.status(401).send("Informe a senha");
    const user = await User.findById(expectedId).select('+password');
    const expectedPassword = user.password;
    if (!await bcrypt.compare(password, expectedPassword)) {
      return res.send("Token e senha incompatíveis");
    } else {
      next();
    }
  } catch (err) {
    return res.status(401).send(err);
  }
}
