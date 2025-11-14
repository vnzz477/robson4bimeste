import { Link } from 'react-router-dom';
import './inicio.scss';
import Botao from '../../components/botao/botao';

export default function Inicio() {
  return (
    <div className="inicio-container">
      <div className="inicio-content">
        <h1>Bem-vindo ao Trabalho Bimestral</h1>
        <p className="descricao">
          Este projeto foi desenvolvido como parte do 4º bimestre da disciplina de Banco de Dados, ministrada pelo professor Robson.
          Ele contempla cadastro e login de usuários, além de uma área administrativa.
        </p>
        <Botao />
      </div>

      <footer className="inicio-footer">
        <Link to="/cadastroAdmin" className="btn-admin">
          Área Administrativa
        </Link>
      </footer>
      
    </div>
  );
}