import React from "react";
import { PgHomeRoutes } from "./home";
import PgLoginRoutes from "./PgLogin";
import { PgaAtendimentoRoutes } from "./atendimento";
import { PgRelatorioRoutes } from "./relatorio";

function Routes() {
	return (
		<>
			<PgHomeRoutes />
			<PgaAtendimentoRoutes />
			<PgLoginRoutes />
			<PgRelatorioRoutes />
		</>
	);
}

export default Routes;
