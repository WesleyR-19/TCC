import React from "react";
import { PgHomeRoutes } from "./home";
import PgLoginRoutes from "./PgLogin";
import { PgaAtendimentoRoutes } from "./atendimento";
import { PgRelatorioRoutes } from "./relatorio";
import { PgAvaliacaoRoutes } from "./avaliacao";

function Routes() {
	return (
		<>
			<PgHomeRoutes />
			<PgaAtendimentoRoutes />
			<PgLoginRoutes />
			<PgRelatorioRoutes />
			<PgAvaliacaoRoutes />
		</>
	);
}

export default Routes;
