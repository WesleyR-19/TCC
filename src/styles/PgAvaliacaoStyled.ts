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

export const DivMaster = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
width: 100%;
height: 50vh;
margin-bottom: 90px;
`

export const DivIcones = styled.div `
width: 40%;
margin-left: 40px;
margin-right: 40px;

`

export const DivLinha = styled.div`
display: flex;
flex-direction: row;
width: 90%;
height: 15vh;
p {
    
    font-size: 22px;
    font-weight: 2px;
    color: #01243C;
}
`

export const DivAlign = styled.div`
min-width: 356px;
`

export const ButtonST = styled.button `
margin-top: 10px;
margin-bottom: 10px;
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

export const DivText = styled.div `
margin-top: 40px;
margin-bottom: 5px;
text {
    font-size: 50px;
    color: #01243C;
}
`


export const DivBotton = styled.div `
display:flex;
flex-direction: row;
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
    margin-right: 70px;
    margin-left: 70px;
    margin-bottom: 50px;

`
