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

export const DivElement = styled.div `
display: flex;
flex-direction: row;
`

export const DivImage = styled.div `
margin-top: 70px;
margin-bottom: 70px;
img {
  border-radius: 50%;
  width: 20%;
  height: 20%;
}
`

export const Icons = styled.div `
width: 120px;
height: 120px;
background-color: #4180AB;
border-radius: 100%;
margin-left: 300px;
margin-bottom: 120px;
display: block;
justify-content: center;
align-items: center;

img {
    width: 72px;
    height: 78px;
    margin-top: 18px;
}
`