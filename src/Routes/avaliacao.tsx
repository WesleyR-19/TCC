import React from "react";
import { Routes, Route } from "react-router-dom";
import PgAvaliacao from "../pages/Avaliações/PgAvaliacao";

export function PgAvaliacaoRoutes() {
	return (
		<Routes>
			<Route path="/Avaliacao" element={<PgAvaliacao />}></Route>
		</Routes>
	);
}
