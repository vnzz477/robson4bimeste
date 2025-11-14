import con from './conection.js';
import crypto from 'crypto-js';



export async function cadastrarAdmin(pessoa) {
  const comando = `
    insert into tb_admin (nome, email, senha)
    values (?, ?, ?)
  `;

  let hash = crypto.SHA256(pessoa.senha).toString();

  let resposta = await con.query(comando, [pessoa.nome, pessoa.email, hash]);
  let info = resposta[0];

  return info.insertId;
}

export async function validarAdmin(admin) {
  const comando = `
    SELECT id_admin, nome, email
    FROM tb_admin
    WHERE email = ? AND senha = ?
  `;

  let hash = crypto.SHA256(admin.senha).toString();

  const registros = await con.query(comando, [admin.email, hash]);
  return registros[0][0];
}

export async function listarUsuarios() {
  const comando = `
    SELECT id_usuario, nome, email
    FROM tb_usuario
  `;

  const registros = await con.query(comando);
  return registros[0];
}

export async function contarUsuarios() {
  const comando = `
    SELECT COUNT(*) AS total
    FROM tb_usuario
  `;

  const registros = await con.query(comando);
  return registros[0][0].total;
}
