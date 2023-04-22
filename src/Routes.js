import { BrowserRouter, Route } from "react-router-dom";
import Login from "./Login";
import Cadastro from "./Cadastro";
import Home from "./Home";
import Conta from "./Conta";

const Rotas = () =>{
    return (
        <BrowserRouter>
            <Route path="/login" component={Login} />
            <Route path="/cadastro" component={Cadastro} />
            <Route exact path="/" component={Home} />
            <Route path="/conta" component={Conta} />
        </BrowserRouter>
    );
}

export default Rotas;