import jwt from 'jsonwebtoken';

export function gerarToken(dados) {
  return jwt.sign(dados, process.env.JWT_SECRET, { expiresIn: '1d' });
}
