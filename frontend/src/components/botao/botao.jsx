import "./botao.scss";
import { useNavigate } from "react-router-dom";

export default function Botao() {
  const navigate = useNavigate();

  function sair() {
    
    localStorage.removeItem("TOKEN");

    navigate("/");
  }

  return (
    <button className="btn-sair" onClick={sair}>
      Sair
    </button>
  );
}
