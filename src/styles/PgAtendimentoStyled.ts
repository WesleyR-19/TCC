import styled, { css } from "styled-components";
import ImgFundo from "../images/fundo.png";

export const DivGeral = styled.div`
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-image: url(${ImgFundo});
`;

export const DivSair = styled.div`
    background-color: #4180ab;
    width: 100%;
    height: 7%;
    text-align: right;
    padding-top: 24px;
`;

export const ButtonST = styled.button`
    margin-right: 40px;
    background-color: #4180ab;
    padding: 0px;
    font-size: 22px;
    width: 70px;
    height: 40px;
    color: white;
    font-weight: bold;
    text-decoration: none;
    border: none;
    margin-top: 1%;
    cursor: pointer;
`;
export const DivElements = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`;

export const Titulo = styled.h1`
    font-family: Arial;
    font-size: 64px;
    font-style: none;
    margin: 0px;
    padding: 25px;
`;
export const DivInputs = styled.div`
    flex-direction: column;
    display: flex;
    text-align: left;
    justify-content: left;
    align-items: left;
    margin-bottom: 50px;
    width: 100%;
    height: 100vh;
`;

export const DivItems = styled.div`
    flex-direction: column;
    display: flex;
    margin-top: 0px;
`;

export const Posicionamento = styled.div`
    display: flex;
    flex-direction: row;
    padding-right: 50px;
    padding-left: 50px;
`;
export const LabelText = styled.label`
    font-size: 26px;
`;
export interface InputStyledProps {
    error?: boolean;
}

export const InputStyled = styled.input<InputStyledProps>`
    text-decoration: overline;
    width: 100%;
    height: 50px;
    border: none;
    /* background-color: ${(props) => (props.error ? "red" : "")}; */
    padding: 0px;
    font-size: 18px;
    border-radius: 15px;
    cursor: pointer;
    ${(props) => {
        if (props.error) {
            return css`
                border-color: red;
                border-style: solid;
                border-width: 2px;
                background-color: #ffe0e0;
            `;
        } else {
            return css`
                background-color: #e9f4fb;
            `;
        }
    }};
`;

export const InputStyledNumero = styled.input`
    text-decoration: overline;
    width: 100%;
    height: 50px;
    border: none;
    background-color: #e9f4fb;
    padding: 0px;
    font-size: 18px;
    border-radius: 15px;
    cursor: pointer;
`;
export const CampoDescricao = styled.textarea`
    text-decoration: overline;
    width: 100%;
    height: 100px;
    border: none;
    background-color: #e9f4fb;
    padding: 0px;
    font-size: 18px;
    border-radius: 15px;
    cursor: pointer;
`;

export const DivUnir = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-right: 10px;
`;

export const DivUnir2 = styled.div`
    display: flex;
    flex-direction: column;
    width: 25%;
    margin-right: 150px;
`;

export const DivBotton = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    margin-top: 25px;
`;
export const ButtonS = styled.button`
    width: 25%;
    height: 50px;
    border: none;
    padding: 0px;
    font-size: 18px;
    border-radius: 15px;
    color: white;
    background-color: #01243c;
    font-weight: bold;
    box-shadow: 1px 1px 3px black;
    margin-right: 80px;
    margin-left: 80px;
    cursor: pointer;
    :hover {
        transform: scale(1.03);
    }
    transition: 0.5s;
`;

export const InputStyledData = styled.input`
    text-decoration: overline;
    width: 100%;
    height: 50px;
    border: none;
    background-color: #e9f4fb;
    padding: 0px;
    font-size: 18px;
    border-radius: 15px;
    cursor: pointer;
`;
