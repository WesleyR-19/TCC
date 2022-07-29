import React from "react";
import { Routes, Route} from 'react-router-dom';
import PgLogin from "../pages/Login/PgLogin";

function PgLoginRoutes() {
    return(
        <Routes>
            <Route path="/Login" element={<PgLogin/>} ></Route>
        </Routes>
    )
}

export default PgLoginRoutes;