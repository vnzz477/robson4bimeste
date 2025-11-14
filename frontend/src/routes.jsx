import {BrowserRouter, Route, Routes} from "react-router";
import Cadastrousuario from "./pages/cadastroUsuario/cadastrousuario";
import Loginusuario from "./pages/loginUsuario/loginusuario";
import Inicio from "./pages/inicio/inicio";
import Loginadmin from "./pages/loginadmin/loginadmin";
import Cadastroadmin from "./pages/cadastroAdmin/cadastroadmin";
import Administracao from "./pages/administracao/administracao";      

export default function Navegacao(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Cadastrousuario/>}/>
                <Route path="/inicio" element={<Inicio/>}/>
                <Route path="/loginUsuario" element={<Loginusuario/>}/>
                <Route path="/cadastroAdmin" element={<Cadastroadmin/>}/>
                <Route path="/loginAdmin" element={<Loginadmin/>}/>    
                <Route path="/administracao" element={<Administracao/>}/>
            </Routes>
        </BrowserRouter>
    )
}
