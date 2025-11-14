import { Router } from 'express';
import * as db from '../repository/adminRepo.js';
import { gerarToken } from '../utils/jwt.js';

const endpoints = Router();


endpoints.post('/admin', async (req, resp) => {
  try {
    let pessoa = req.body;
    let id = await db.cadastrarAdmin(pessoa);

    resp.send({ novoId: id });
  }
  catch (err) {
    console.log(err);
    resp.status(400).send({ erro: err.message });
  }
});

endpoints.post('/login/admin', async (req, resp) => {
  try {
    const admin = req.body;
    const usuario = await db.validarAdmin(admin);

    if (!usuario) {
      return resp.status(401).send({ erro: "Admin ou senha incorretos" });
    }

    const token = gerarToken(usuario);

    resp.send({
      admin: {
        id: usuario.id_admin,
        nome: usuario.nome,
        email: usuario.email
      },
      token
    });
  } catch (err) {
    resp.status(400).send({ erro: err.message });
  }
});

endpoints.get('/usuario/admin', async (req, resp) => {
  try {
    const usuarios = await db.listarUsuarios();
    resp.send(usuarios);
  } catch (err) {
    resp.status(400).send({ erro: err.message });
  }
});

endpoints.get('/usuarios/contagem', async (req, resp) => {
  try {
    const total = await db.contarUsuarios();
    resp.send({ total });
  } catch (err) {
    resp.status(400).send({ erro: err.message });
  }
});

export default endpoints;
