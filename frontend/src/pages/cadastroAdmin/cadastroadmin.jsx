import './cadastroadmin.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import api from '../../api';

export default function Cadastroadmin() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  async function cadastrar(e) {
    e.preventDefault();

    try {
      const body = { nome, email, senha };
      await api.post('/admin', body);

      alert("Usuário cadastrado com sucesso!");
      navigate('/loginAdmin');
    } catch (err) {
      alert("Erro ao cadastrar: " + err.response?.data?.erro);
    }
  }

  return (
    <div className="cadastro-container">
      <div className="cadastro-lado-esquerdo">
        <h1>Área Administrativa</h1>
      </div>

      <div className="cadastro-lado-direito">
        <h1>Cadastro Área Administrativa</h1>

        <form className="cadastro-formulario" onSubmit={cadastrar}>
          <label>Nome:</label>
          <input
            type="text"
            placeholder="Digite seu Nome"
            value={nome}
            onChange={e => setNome(e.target.value)}
          />

          <label>Email:</label>
          <input
            type="email"
            placeholder="Digite seu Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <label>Senha:</label>
          <input
            type="password"
            placeholder="Digite sua Senha"
            value={senha}
            onChange={e => setSenha(e.target.value)}
          />

          <button type="submit">Cadastrar</button>
        </form>

        <p className="cadastro-login">
          Já possui uma conta?
          <Link to="/loginAdmin"> Login</Link>
        </p>
      </div>
    </div>
  );
}
