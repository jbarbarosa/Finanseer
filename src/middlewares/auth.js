import jwt from 'jsonwebtoken';

export const authenticator = (req, res, next) => {
  const header = req.headers.authorization;
  if (!header) return res.status(401).send("Token não informado");
  const parts = header.split(' ');
  if (!parts.length === 2) return res.status(401).send("Token não formatado");
  const [bearer, token] = parts;
  if (!/^Bearer$/i.test(bearer)) return res.status(401).send("Token disforme");

  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if (err) return res.status(401).send({ error: 'Token invalido' });
    console.log(decoded);
    req.id = decoded.id;
    return next();
  })
}

export const getToken = params => {
  return jwt.sign(params, process.env.SECRET, {
    expiresIn: 86400
  });
}
