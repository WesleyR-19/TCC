import styled from "styled-components";
import ImgFundo from "../images/fundo.png";

export const DivGeral = styled.div `
flex-direction: column;
text-align: center;
justify-content: center;
align-items: center;
width: 100%;
background-image: url(${ImgFundo});
`

export const DivSair = styled.div `
background-color: #4180AB;
width: 100%;
height: 20%;
text-align: right;

`

export const ButtonST = styled.button `
margin-top: 30px;
margin-right: 25px;
background-color: #4180AB;
padding: 0px;
font-size: 22px;
width: 70px;
height: 40px;
color: white;
font-weight: bold;
text-decoration: none;
border: none;
`
export const DivElements = styled.div `
display:flex;
flex-direction: column;
text-align: center;
justify-content: center;
align-items: center;
` 

export const Titulo = styled.h1 `
font-family: Arial;
font-size: 64px;
font-style: none;
`
export const DivInputs = styled.div `
flex-direction: column;
display:flex;
text-align: left;
justify-content: left;
align-items: left;
width: 85%;
margin-bottom: 50px;
`

export const DivItems = styled.div `
flex-direction: column;
display: flex;
`

export const Posicionamento = styled.div `
display: flex;
flex-direction: row;
`
export const LabelText = styled.label `
font-size: 26px;
`

export const InputStyled = styled.input `
    text-decoration: overline;
    width: 100%;
    height: 50px;
    border: none;
    background-color: #E9F4FB;
    padding: 0px;
    font-size: 18px;
    border-radius: 15px;
`

export const InputStyledNumero = styled.input `
    text-decoration: overline;
    width: 28%;
    height: 50px;
    border: none;
    background-color: #E9F4FB;
    padding: 0px;
    font-size: 18px;
    border-radius: 15px;
`
export const CampoDescricao = styled.textarea `
    text-decoration: overline;
    width: 100%;
    height: 100px;
    border: none;
    background-color: #E9F4FB;
    padding: 0px;
    font-size: 18px;
    border-radius: 15px;
`

export const DivUnir = styled.div `
display: flex;
flex-direction: column;
width: 100%;
margin-right: 10px;
`
export const DivBotton = styled.div `
display:flex;
flex-direction: row;
width: 100%;
justify-content: center;
margin: 5px;
`
export const ButtonS = styled.button `
    width: 25%;
    height: 50px;
    border: none;
    padding: 0px;
    font-size: 18px;
    border-radius: 15px;
    color: white;
    background-color: #01243C;
    font-weight: bold;
    box-shadow: 1px 1px 3px black;
    margin-right: 80px;
    margin-left: 80px;

`


