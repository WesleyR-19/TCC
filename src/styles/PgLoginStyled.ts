import styled, {css} from "styled-components";
import { createGlobalStyle } from 'styled-components';
import fundoLogin from "../images/fundoLogin.png"
import { InputStyledProps }  from "./PgAtendimentoStyled"; "./PgAtendimentoStyled"

export const GlobalStyle = createGlobalStyle `
body {
    background: #4180AB;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    font-family: Poppins;
    margin: 0px;
}
#root {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

`

export const DivElements = styled.div `
border-radius: 70px;
display: flex;
background-image: url(${fundoLogin});
text-align: center;
justify-content: center;
align-items: center;
width: 85%;
height: 85%;
`

export const DivLogin = styled.div `
background-color: #4180AB;
border-radius: 50px;
display: flex;
flex-direction: column;
text-align: center;
justify-content: center;
align-items: center;
width: 38%;
height: 73%;

`
export const Text = styled.text `
font-size: 64px;
font-style: 'normal';
font-weight: 700;
color:white;

@media (max-width: 825px)
{
    font-size: 50px;
}

@media (max-width: 412px)
{
    font-size: 25px;
}
`
export const DivUsuario = styled.div `
    width: 80%;
    text-align: left;
    justify-content: left;
    align-items: left;
    margin-top: 38px;
`

export const Usuario = styled.text `
font-size: 19px;
font-style: 'normal';
font-weight: 700;
color:white;


@media (max-width: 825px)
{
    font-size: 14px;
}

@media (max-width: 412px)
{
    font-size:10px;
}
`

export const InputPreencher = styled.input<InputStyledProps> `
    text-decoration: overline;
    width: 100%;
    border: none;
    background-color: #4180AB;
    border-style: solid;
    border-color: white;
    border-top: none;
    border-left: none;
    border-right: none;
    padding: 0px;
    font-size: 18px;

    ${props => {
        if (props.error){
        return css `
                text-decoration: overline;
                width: 100%;
                border: none;
                background-color: #4180AB;
                border-style: solid;
                border-color: red;
                border-top: none;
                border-left: none;
                border-right: none;
                padding: 0px;
                font-size: 18px;
                
            `
        }else {
            return css `
                text-decoration: overline;
                width: 100%;
                border: none;
                background-color: #4180AB;
                border-style: solid;
                border-color: white;
                border-top: none;
                border-left: none;
                border-right: none;
                padding: 0px;
                font-size: 18px;
            `
        }
    }};
    
    

    :focus {
        outline: none;
    }


    @media (max-width: 825px)
    {
        font-size: 13px;
    }

        @media (max-width: 412px)
    {
        font-size:9px;
    }

`
export const Senha = styled.text `
font-size: 19px;
font-style: 'normal';
font-weight: 700;
color:white;
margin-top: 50px;

@media (max-width: 825px)
{
    font-size: 14px;
}

@media (max-width: 412px)
{
    font-size:10px;
}
`
export const DivBotao = styled.div `
width: 100%;
margin-bottom: 15px;
`
export const ButtonEnviar = styled.button `
width: 40%;
height: 50px;
background: #00233A;
border-radius: 15px;
font-family: 'Poppins';
color: white;
font-size: 16px;
font-style: 'normal';
font-weight: 700;
margin-top: 44px;
border: none;
cursor: pointer;
:hover{
    transform: scale(1.03);
}
transition: 0.5s;

@media (max-width: 825px)
{
    font-size: 12px;
}

@media (max-width: 412px)
{
    font-size:8px;
}

`



