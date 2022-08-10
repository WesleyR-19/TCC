import React from "react";
import { useNavigate } from "react-router-dom";
import {
    DivGeral,
    DivSair,
    ButtonST,
    DivText,
    Icons,
    DivElement,
    DivBotton,
    ButtonS,
} from "../../styles/PgRelatorioStyled";

import Atendimentos from "../../images/Atendimentos.png";
import Avaliações from "../../images/Avaliações.png";
import RelatorioG from "../../images/RelatorioG.png";

function PgRelatorio() {
    const navigate = useNavigate();
    return (
        <>
            <DivGeral>
                <DivSair>
                    <ButtonST onClick={() => navigate("/")}>Sair</ButtonST>
                </DivSair>
                <DivText>
                    <text>Relatórios</text>
                </DivText>
                <DivElement>
                    <Icons onClick={() => navigate("/AtendimentosGerados")}>
                        <img src={Atendimentos} alt="At" />
                        <br />
                        <br />
                        <text>Atendimentos Gerados</text>
                    </Icons>
                    <Icons onClick={() => navigate("/")}>
                        <img src={Avaliações} alt="Av" />
                        <br />
                        <br />
                        <text>Avaliações</text>
                    </Icons>
                    <Icons onClick={() => navigate("/")}>
                        <img src={RelatorioG} alt="Rel" />
                        <br />
                        <br />
                        <text>Relatório</text>
                    </Icons>
                </DivElement>
                <DivBotton>
                    <ButtonS onClick={() => navigate("/Home")}>
                        Voltar a Pagina Inicial
                    </ButtonS>
                </DivBotton>
            </DivGeral>
        </>
    );
}

export default PgRelatorio;
