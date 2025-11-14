import { useEffect, useState } from "react";
import api from "../../api";
import "./administracao.scss";
import BotaoVoltar from "../../components/botaovoltar/botaovoltar";
import Botao from "../../components/botao/botao";

export default function Administracao() {
  const [usuarios, setUsuarios] = useState([]);
  const [carregando, setCarregando] = useState(true);

  async function carregarUsuarios() {
    try {
      const resp = await api.get("/usuario/admin");
      setUsuarios(resp.data);
    } catch (err) {
      alert("Erro ao carregar usuários: " + err.response?.data?.erro);
    }
    setCarregando(false);
  }

  useEffect(() => {
    carregarUsuarios();
  }, []);

  return (
    <div className="lista-container">

      <h1 className="titulo">Usuários Cadastrados</h1>

      {carregando ? (
        <p className="loading">Carregando...</p>
      ) : (
        <div className="lista-tabela">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Email</th>
              </tr>
            </thead>

            <tbody>
              {usuarios.map(user => (
                <tr key={user.id_usuario}>
                  <td>{user.id_usuario}</td>
                  <td>{user.nome}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      )}
<BotaoVoltar />
<Botao />
    </div>
  );
}
