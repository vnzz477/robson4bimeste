import './loginadmin.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import api from '../../api';

export default function Loginadmin() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  async function entrar(e) {
    e.preventDefault();

    try {
      const body = { email, senha };
      const resp = await api.post('/login/admin', body);

      const admin = resp.data.admin;

      localStorage.setItem('TOKEN', resp.data.token);
      localStorage.setItem('ADMIN_NOME', admin.nome);
      localStorage.setItem('ADMIN_ID', admin.id);

      navigate('/administracao');
    } catch (err) {
      alert('Email ou senha incorretos');
    }
  }

  return (
    <div className="loginAdm-container">
      <div className="loginAdm-esquerdo">
        <h1>Área Administrativa</h1>
      </div>

      <div className="loginAdm-direito">
        <h1>Login Área Administrativa</h1>

        <form className="loginAdm-form" onSubmit={entrar}>
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

          <button type="submit">Entrar</button>

          <p className="loginAdm-registro">
            Não possui uma conta?
            <Link to="/cadastroAdmin"> Cadastrar</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
