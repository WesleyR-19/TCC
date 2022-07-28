import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';
import fundo1 from "../images/fundo1.png";





export const GlobalStyle = createGlobalStyle `
body {
    background: #4180AB;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-family: 'Poppins';
    
}
#root {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

`

export const DivElements = styled.div `
border: 1px solid black;
border-radius: 70px;
display: flex;
background-image: url(${fundo1});
text-align: center;
justify-content: center;
align-items: center;
width: 85%;
height: 85%;
`

export const DivLogin = styled.div `
background-color: #4180AB;
border: 1px solid black;
border-radius: 50px;
display: flex;
flex-direction: column;
text-align: center;
justify-content: center;
align-items: center;
width: 38%;
height: 73%;

a {
text-decoration: none;
color: #011A42;
}

`


