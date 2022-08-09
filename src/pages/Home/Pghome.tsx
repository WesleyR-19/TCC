import React from "react";
import { useNavigate } from "react-router-dom";
import {
	DivGeral,
	DivSair,
	ButtonST,
	DivImage,
	Icons,
	DivElement,
} from "../../styles/PgHomeStyled";

import Atendimento from "../../images/atendimento.png";
import Avaliação from "../../images/avaliação.png";
import Relatório from "../../images/relatório.png";
import ImagemCentral from "../../images/icon.png";

function PgHome() {
	const navigate = useNavigate();
	return (
		<>
			<DivGeral>
				<DivSair>
					<ButtonST onClick={() => navigate("/")}>Sair</ButtonST>
				</DivSair>
				<DivImage>
					<img src={ImagemCentral} alt="Main" />
				</DivImage>
				<DivElement>
					<Icons onClick={() => navigate("/Atendimento")}>
						<img src={Atendimento} alt="At" />
						<br />
						<br />
						<text>Gerar Atendimento</text>
					</Icons>
					<Icons onClick={() => navigate("/Avaliacao")}>
						<img src={Avaliação} alt="Av" />
						<br />
						<br />
						<text>Avaliações</text>
					</Icons>
					<Icons onClick={() => navigate("/Relatorio")}>
						<img src={Relatório} alt="Rel" />
						<br />
						<br />
						<text>Relatório</text>
					</Icons>
				</DivElement>
			</DivGeral>
		</>
	);
}

export default PgHome;
