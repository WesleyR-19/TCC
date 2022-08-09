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
				htmlColor="gray"
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

	const [value, setValue] = React.useState<number | null>(0);
	const [hover, setHover] = React.useState(-1);
	const [value2, setValue2] = React.useState<number | null>(0);
	const [hover2, setHover2] = React.useState(-1);
	const [value3, setValue3] = React.useState<number | null>(0);
	const [hover3, setHover3] = React.useState(-1);
	const [value4, setValue4] = React.useState<number | null>(0);
	const [hover4, setHover4] = React.useState(-1);
	const [value5, setValue5] = React.useState<number | null>(0);
	const [hover5, setHover5] = React.useState(-1);
	const [value6, setValue6] = React.useState<number | null>(0);
	const [hover6, setHover6] = React.useState(-1);

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
							<p>Avalie o Atendimento da Equipe</p>
							<StyledRating
								sx={{ display: "flex", flexDirection: "row" }}
								name="Equipe"
								value={value}
								precision={1}
								highlightSelectedOnly
								getLabelText={getLabelText}
								IconContainerComponent={IconContainer}
								emptyIcon={<SentimentVeryDissatisfied />}
								onChange={(event, newValue) => {
									setValue(newValue);
								}}
								onChangeActive={(event, newHover) => {
									setHover(newHover);
								}}
							/>
							{value !== null && (
								<Box sx={{ ml: 38, mb: 6, mt: -4.6 }}>
									{labels[hover !== -1 ? hover : value]}
								</Box>
							)}
						</DivLinha>
						<DivLinha>
							<p>Avalie o Tempo de Atendimento</p>
							<StyledRating
								sx={{ display: "flex", flexDirection: "row" }}
								name="Tempo de Atendimento"
								value={value2}
								precision={1}
								highlightSelectedOnly
								getLabelText={getLabelText}
								IconContainerComponent={IconContainer}
								emptyIcon={<SentimentDissatisfied />}
								onChange={(event, newValue2) => {
									setValue2(newValue2);
								}}
								onChangeActive={(event, newHover2) => {
									setHover2(newHover2);
								}}
							/>
							{value2 !== null && (
								<Box sx={{ ml: 38, mb: 6, mt: -4.6 }}>
									{labels[hover2 !== -1 ? hover2 : value2]}
								</Box>
							)}
						</DivLinha>
						<DivLinha>
							<p>Avalie a Localização</p>
							<StyledRating
								sx={{ display: "flex", flexDirection: "row" }}
								name="Localização"
								value={value3}
								precision={1}
								highlightSelectedOnly
								getLabelText={getLabelText}
								IconContainerComponent={IconContainer}
								emptyIcon={<SentimentSatisfied />}
								onChange={(event, newValue3) => {
									setValue3(newValue3);
								}}
								onChangeActive={(event, newHover3) => {
									setHover3(newHover3);
								}}
							/>
							{value3 !== null && (
								<Box sx={{ ml: 38, mb: 6, mt: -4.6 }}>
									{labels[hover3 !== -1 ? hover3 : value3]}
								</Box>
							)}
						</DivLinha>
					</DivIcones>
					<DivIcones>
						<DivLinha>
							<p>Avalie a Solução do Problema</p>
							<StyledRating
								sx={{ display: "flex", flexDirection: "row" }}
								name="Solução do Problema"
								value={value4}
								precision={1}
								highlightSelectedOnly
								getLabelText={getLabelText}
								IconContainerComponent={IconContainer}
								emptyIcon={<SentimentSatisfiedAlt />}
								onChange={(event, newValue4) => {
									setValue4(newValue4);
								}}
								onChangeActive={(event, newHover4) => {
									setHover4(newHover4);
								}}
							/>
							{value4 !== null && (
								<Box sx={{ ml: 38, mb: 6, mt: -4.6 }}>
									{labels[hover4 !== -1 ? hover4 : value4]}
								</Box>
							)}
						</DivLinha>
						<DivLinha>
							<p>Avalie os Encaminhamentos</p>
							<StyledRating
								sx={{ display: "flex", flexDirection: "row" }}
								name="Encaminhamentos"
								value={value5}
								precision={1}
								highlightSelectedOnly
								getLabelText={getLabelText}
								IconContainerComponent={IconContainer}
								emptyIcon={<SentimentSatisfiedAlt />}
								onChange={(event, newValue5) => {
									setValue5(newValue5);
								}}
								onChangeActive={(event, newHover5) => {
									setHover5(newHover5);
								}}
							/>
							{value5 !== null && (
								<Box sx={{ ml: 38, mb: 6, mt: -4.6 }}>
									{labels[hover5 !== -1 ? hover5 : value5]}
								</Box>
							)}
						</DivLinha>
						<DivLinha>
							<p>Avalie a Análise Geral</p>
							<StyledRating
								sx={{ display: "flex", flexDirection: "row" }}
								name="Análise Geral"
								value={value6}
								precision={1}
								highlightSelectedOnly
								getLabelText={getLabelText}
								IconContainerComponent={IconContainer}
								emptyIcon={<SentimentVerySatisfied />}
								onChange={(event, newValue6) => {
									setValue6(newValue6);
								}}
								onChangeActive={(event, newHover6) => {
									setHover6(newHover6);
								}}
							/>
							{value6 !== null && (
								<Box sx={{ ml: 38, mb: 6, mt: -4.6 }}>
									{labels[hover6 !== -1 ? hover6 : value6]}
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
