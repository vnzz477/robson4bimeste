import con from '../repository/conection.js';
import crypto from 'crypto-js';

export async function cadastrarUsuario(pessoa) {
  const comando = `
    insert into tb_usuario (nome, email, senha)
    values (?, ?, ?)
  `;

  let hash = crypto.SHA256(pessoa.senha).toString();

  let resposta = await con.query(comando, [pessoa.nome, pessoa.email, hash]);
  let info = resposta[0];

  return info.insertId;
}

export async function validarUsuario(pessoa) {
  const comando = `
    select id_usuario, nome
    from tb_usuario
    where email = ? and senha = ?
  `;

  let hash = crypto.SHA256(pessoa.senha).toString();

  let registros = await con.query(comando, [pessoa.email, hash]);
  return registros[0][0];
}
