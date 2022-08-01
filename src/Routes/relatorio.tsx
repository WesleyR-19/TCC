import React from "react";
import { Routes, Route } from "react-router-dom";
import PgRelatorio from "../pages/Relatório/PgRelatorio";

export function PgRelatorioRoutes() {
	return (
		<Routes>
			<Route path="/Relatorio" element={<PgRelatorio />}></Route>
		</Routes>
	);
}
