import React from "react";
import { Routes, Route } from "react-router-dom";
import PgHome from "../pages/Home/Pghome";

export function PgHomeRoutes() {
	return (
		<Routes>
			<Route path="/Home" element={<PgHome />}></Route>
		</Routes>
	);
}
