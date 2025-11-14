import './loginusuario.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import api from '../../api';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const usuario = localStorage.getItem("USUARIO");
    const token = localStorage.getItem("TOKEN");

    if (usuario && token) {
      navigate('/inicio');
    }
  }, [navigate]);

  async function entrar(e) {
    e.preventDefault();

    try {
      const body = { email, senha };
      const resp = await api.post('/login', body);

      const token = resp.data.token;
      const usuario = resp.data.usuario.nome;
      const usuarioi = resp.data.usuario;
      

      localStorage.setItem('TOKEN', resp.data.token);
      localStorage.setItem('USUARIO', resp.data.usuario.nome);
      localStorage.setItem('ID_USUARIO', usuarioi.id); 
      navigate('/inicio');
    } catch (err) {
      alert('Email ou senha incorretos');
    }
  }

  return (
    <div className="login-container">
      <div className="login-lado-esquerdo">
        <img src="./Logo1.png" className="login-logo" />
      </div>

      <div className="login-lado-direito">
        <h1>Login - Usuário</h1>

        <form className="login-formulario" onSubmit={entrar}>
          <label>Email:</label>
          
          <input type="email" placeholder="Digite seu Email" value={email} onChange={e => setEmail(e.target.value)}/>

          <label>Senha:</label>
          <input type="password" placeholder="Digite sua Senha" value={senha} onChange={e => setSenha(e.target.value)}/>

          <button type="submit">Entrar</button>

          <p className="login-registro">
            Não possui uma conta?
            <Link to={'/cadastro'}> Cadastrar</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
