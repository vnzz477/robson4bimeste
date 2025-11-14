import con from './conection.js';
import crypto from 'crypto-js';

export async function validarAdmin(admin) {
  const comando = `
    SELECT id_admin, nome, email
    FROM tb_admin
    WHERE email = ? AND senha = ?
  `;

  let hash = crypto.SHA256(admin.senha).toString();

  const registros = await con.query(comando, [admin.email, hash]);
  return registros[0][0]; // retorna o primeiro registro ou undefined
}

export async function listarUsuarios() {
  const comando = `
    SELECT id_usuario, nome, email
    FROM tb_usuario
  `;

  const registros = await con.query(comando);
  return registros[0]; // retorna todos os usuários
}

export async function contarUsuarios() {
  const comando = `
    SELECT COUNT(*) AS total
    FROM tb_usuario
  `;

  const registros = await con.query(comando);
  return registros[0][0].total;
}
