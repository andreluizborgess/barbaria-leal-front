import React from "react";

import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
import Cadastro from "../components/Cadastro";
import Listagem from "../components/Listagem";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="cadastro"
                    element={<Cadastro />} />
                <Route path="listagem/servico"
                    element={<Listagem />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter; 