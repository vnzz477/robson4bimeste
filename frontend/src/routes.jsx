import {BrowserRouter, Route, Routes} from "react-router";
import Cadastrousuario from "./pages/cadastroUsuario/cadastrousuario"
import Loginusuario from "./pages/loginUsuario/loginusuario"

export default function Navegacao(){
    return(
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Cadastrousuario/>}/>
            <Route path="/loginUsuario" element={<Loginusuario/>}/>
            </Routes>
        </BrowserRouter>
    )
}
