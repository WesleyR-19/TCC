import React from "react";
import { PgHomeRoutes } from "./home";
import PgLoginRoutes from "./PgLogin";
import { PgaAtendimentoRoutes } from "./atendimento";
import { PgRelatorioRoutes } from "./relatorio";
import { PgAvaliacaoRoutes } from "./avaliacao";
import { PgAtendimentosGeradosRoutes } from "./atendimentosGerados";

function Routes() {
    return (
        <>
            <PgHomeRoutes />
            <PgaAtendimentoRoutes />
            <PgLoginRoutes />
            <PgRelatorioRoutes />
			<PgAvaliacaoRoutes />
            <PgAtendimentosGeradosRoutes />
        </>
    );
}

export default Routes;
