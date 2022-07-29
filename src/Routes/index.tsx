import React from "react";
import { PgaAtendimentoRoutes } from "./atendimento";
import PgLoginRoutes from "./PgLogin";

function Routes() {
    return(
        <>
            <PgaAtendimentoRoutes/>
            <PgLoginRoutes/>
        </>
    )
}

export default Routes;
