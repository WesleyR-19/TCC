import * as React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Rating, { IconContainerProps } from "@mui/material/Rating";

import { SentimentVeryDissatisfied } from "@material-ui/icons";
import { SentimentDissatisfied } from "@material-ui/icons";
import { SentimentSatisfied } from "@material-ui/icons";
import { SentimentSatisfiedAlt } from "@material-ui/icons";
import { SentimentVerySatisfied } from "@material-ui/icons";

import { useNavigate } from "react-router-dom";
import {
	DivGeral,
	DivSair,
	DivMaster,
	DivIcones,
	DivLinha,
	ButtonST,
	DivText,
	DivAlign,
	DivBotton,
	ButtonS,
} from "../../styles/PgAvaliacaoStyled";

const StyledRating = styled(Rating)(({ theme }) => ({
	"& .MuiRating-iconEmpty .MuiSvgIcon-root": {
		color: theme.palette.action.disabled,
	},
}));

const labels: { [index: string]: string } = {
	1: "Muito Insatisfeito",
	2: "Insatisfeito",
	3: "Neutro",
	4: "Bom",
	5: "Muito Bom",
};

const customIcons: {
	[index: string]: {
		icon: React.ReactElement;
		label: string;
	};
} = {
	1: {
		icon: (
			<SentimentVeryDissatisfied
				htmlColor="red"
				style={{ width: "50px", height: "50px", margin: "-20px 5px 0 5px" }}
			/>
		),
		label: "Very Dissatisfied",
	},
	2: {
		icon: (
			<SentimentDissatisfied
				htmlColor="orange"
				style={{ width: "50px", height: "50px", margin: "-20px 5px 0 5px" }}
			/>
		),
		label: "Dissatisfied",
	},
	3: {
		icon: (
			<SentimentSatisfied
				htmlColor="#454545"
				style={{ width: "50px", height: "50px", margin: "-20px 5px 0 5px" }}
			/>
		),
		label: "Neutral",
	},
	4: {
		icon: (
			<SentimentSatisfiedAlt
				htmlColor="blue"
				style={{ width: "50px", height: "50px", margin: "-20px 5px 0 5px" }}
			/>
		),
		label: "Satisfied",
	},
	5: {
		icon: (
			<SentimentVerySatisfied
				htmlColor="green"
				style={{ width: "50px", height: "50px", margin: "-20px 5px 0 5px" }}
			/>
		),
		label: "Very Satisfied",
	},
};

function getLabelText(value: number) {
	return `${value} SentimentVeryDissatisfied${value !== 1 ? "s" : ""}, ${
		labels[value]
	}`;
}

function IconContainer(props: IconContainerProps) {
	const { value, ...other } = props;
	return <span {...other}>{customIcons[value].icon}</span>;
}

function PgAvaliacao() {
	const navigate = useNavigate();

	const [votacao, setVotacao] = React.useState({
		equipe: 0,
		local: 0,
		tempoAtendimento: 0,
		solucaoProblema: 0,
		encaminhamentos: 0,
		analise: 0,
	});

	const [hover, setHover] = React.useState(-1);
	const [hover2, setHover2] = React.useState(-1);
	const [hover3, setHover3] = React.useState(-1);
	const [hover4, setHover4] = React.useState(-1);
	const [hover5, setHover5] = React.useState(-1);
	const [hover6, setHover6] = React.useState(-1);

	function setOnChange(
		nomeCampo:
			| "equipe"
			| "local"
			| "tempoAtendimento"
			| "solucaoProblema"
			| "encaminhamentos"
			| "analise"
	) {
		return (
			_: React.SyntheticEvent<Element, Event>,
			novoValor: number | null
		) => {
			setVotacao((oldVotacao) => {
				const newVotacao = { ...oldVotacao };
				if (novoValor) newVotacao[nomeCampo] = novoValor;
				return newVotacao;
			});
		};
	}

	return (
		<>
			<DivGeral>
				<DivSair>
					<ButtonST onClick={() => navigate("/")}>Sair</ButtonST>
				</DivSair>
				<DivText>
					<text>Avaliações</text>
				</DivText>
				<DivMaster>
					<DivIcones>
						<DivLinha>
							<DivAlign>
								<p>Avalie o Atendimento da Equipe</p>
								<StyledRating
									name="Equipe"
									value={votacao.equipe}
									precision={1}
									highlightSelectedOnly
									getLabelText={getLabelText}
									IconContainerComponent={IconContainer}
									emptyIcon={<SentimentVeryDissatisfied />}
									onChange={setOnChange("equipe")}
									onChangeActive={(event, newHover) => {
										setHover(newHover);
									}}
								/>
							</DivAlign>

							{votacao.equipe !== null && (
								<Box sx={{ ml: 2, mt: 8.5 }}>
									{labels[hover !== -1 ? hover : votacao.equipe]}
								</Box>
							)}
						</DivLinha>

						<DivLinha>
							<DivAlign>
								<p>Avalie o Tempo de Atendimento</p>
								<StyledRating
									name="Tempo de Atendimento"
									value={votacao.tempoAtendimento}
									precision={1}
									highlightSelectedOnly
									getLabelText={getLabelText}
									IconContainerComponent={IconContainer}
									emptyIcon={<SentimentDissatisfied />}
									onChange={setOnChange("tempoAtendimento")}
									onChangeActive={(event, newHover2) => {
										setHover2(newHover2);
									}}
								/>
							</DivAlign>
							{votacao.tempoAtendimento !== null && (
								<Box sx={{ ml: 2, mt: 8.5 }}>
									{labels[hover2 !== -1 ? hover2 : votacao.tempoAtendimento]}
								</Box>
							)}
						</DivLinha>

						<DivLinha>
							<DivAlign>
								<p>Avalie a Localização</p>
								<StyledRating
									name="Localização"
									value={votacao.local}
									precision={1}
									highlightSelectedOnly
									getLabelText={getLabelText}
									IconContainerComponent={IconContainer}
									emptyIcon={<SentimentSatisfied />}
									onChange={setOnChange("local")}
									onChangeActive={(event, newHover3) => {
										setHover3(newHover3);
									}}
								/>
							</DivAlign>
							{votacao.local !== null && (
								<Box sx={{ ml: 2, mt: 8.5 }}>
									{labels[hover3 !== -1 ? hover3 : votacao.local]}
								</Box>
							)}
						</DivLinha>
					</DivIcones>
					<DivIcones>
						<DivLinha>
							<DivAlign>
								<p>Avalie a Solução do Problema</p>
								<StyledRating
									name="Solução do Problema"
									value={votacao.solucaoProblema}
									precision={1}
									highlightSelectedOnly
									getLabelText={getLabelText}
									IconContainerComponent={IconContainer}
									emptyIcon={<SentimentSatisfiedAlt />}
									onChange={setOnChange("solucaoProblema")}
									onChangeActive={(event, newHover4) => {
										setHover4(newHover4);
									}}
								/>
							</DivAlign>
							{votacao.solucaoProblema !== null && (
								<Box sx={{ ml: 2, mt: 8.5 }}>
									{labels[hover4 !== -1 ? hover4 : votacao.solucaoProblema]}
								</Box>
							)}
						</DivLinha>

						<DivLinha>
							<DivAlign>
								<p>Avalie os Encaminhamentos</p>
								<StyledRating
									name="Encaminhamentos"
									value={votacao.encaminhamentos}
									precision={1}
									highlightSelectedOnly
									getLabelText={getLabelText}
									IconContainerComponent={IconContainer}
									emptyIcon={<SentimentSatisfiedAlt />}
									onChange={setOnChange("encaminhamentos")}
									onChangeActive={(event, newHover5) => {
										setHover5(newHover5);
									}}
								/>
							</DivAlign>

							{votacao.encaminhamentos !== null && (
								<Box sx={{ ml: 2, mt: 8.5 }}>
									{labels[hover5 !== -1 ? hover5 : votacao.encaminhamentos]}
								</Box>
							)}
						</DivLinha>
						<DivLinha>
							<DivAlign>
								<p>Avalie a Análise Geral</p>
								<StyledRating
									name="Análise Geral"
									value={votacao.analise}
									precision={1}
									highlightSelectedOnly
									getLabelText={getLabelText}
									IconContainerComponent={IconContainer}
									emptyIcon={<SentimentVerySatisfied />}
									onChange={setOnChange("analise")}
									onChangeActive={(event, newHover6) => {
										setHover6(newHover6);
									}}
								/>
							</DivAlign>
							{votacao.analise !== null && (
								<Box sx={{ ml: 2, mt: 8.5 }}>
									{labels[hover6 !== -1 ? hover6 : votacao.analise]}
								</Box>
							)}
						</DivLinha>
					</DivIcones>
				</DivMaster>
				<DivBotton>
					<ButtonS onClick={() => navigate("/Home")}>
						Voltar a Pagina Inicial
					</ButtonS>
					<ButtonS type="submit">Enviar Avaliação</ButtonS>
				</DivBotton>
			</DivGeral>
		</>
	);
}

export default PgAvaliacao;
