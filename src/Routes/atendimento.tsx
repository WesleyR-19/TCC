import React from "react";
import { Routes, Route} from 'react-router-dom';
import  Pgatendimento  from '../pages/Atendimento/Atendimento';

export function PgaAtendimentoRoutes() {
    return(
        <Routes>
            <Route path="/Atendimento" element={<Pgatendimento/>} ></Route>
        </Routes>
    );
}

