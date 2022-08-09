import { Routes, Route } from "react-router-dom";
import PgAtendimentosGerados from "../pages/AtendimentosGerados/AtendimentosGerados";

export function PgAtendimentosGeradosRoutes() {
    return (
        <Routes>
            <Route
                path="/AtendimentosGerados"
                element={<PgAtendimentosGerados />}
            ></Route>
        </Routes>
    );
}
