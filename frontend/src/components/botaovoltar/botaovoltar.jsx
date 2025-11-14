import "./botaovoltar.scss";
import { useNavigate } from "react-router-dom";

export default function BotaoVoltar() {
  const navigate = useNavigate();

  function voltar() {
    navigate("/inicio");
  }

  return (
    <button className="btn-voltar" onClick={voltar}>
      Voltar
    </button>
  );
}
