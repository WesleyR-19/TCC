import styled, { css } from "styled-components";
import ImgFundo from "../images/fundo.png";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-image: url(${ImgFundo});
`;

export const Header = styled.div`
    background-color: #4180ab;
    width: 100%;
    height: 40px;
    text-align: right;
    padding: 10px 0 10px 0;
    margin-bottom: 25px;
`;

export const Text = styled.text`
    font-size: 38px;
    font-weight: 500;
    font-family: system-ui;
    margin-bottom: 20px;
`;

export const HeaderButton = styled.button`
    font-family: system-ui;
    margin-right: 40px;
    background-color: #4180ab;
    font-size: 22px;
    width: 70px;
    height: 40px;
    color: white;
    text-decoration: none;
    border: none;
    cursor: pointer;
    :hover {
        transform: scale(1.03);
        transition: 0.3s;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
    width: 1000px;
    height: 100%;
`;

export const AttendanceWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 450px;
    height: 200px;
    background-color: white;
    margin: 10px;
    border-radius: 8px;
    padding: 10px;
`;

export const AttendanceHeader = styled.h3`
    font-family: system-ui;
    margin: 0 auto 0 auto;
    font-weight: 500;
`;

export const AttendanceTopicsWrapper = styled.div`
    display: flex;
    width: 400px;
    justify-content: space-between;
`;

export const AttendanceTopics = styled.p`
    display: flex;
    align-items: center;
    font-family: system-ui;
    font-weight: 500;
    font-size: 14px;
    margin: 5px 0 0 0;
    white-space: nowrap;
`;

export const AttendanceTopicsResponse = styled.p`
    font-family: system-ui;
    font-size: 12px;
    margin: 0 0 0 5px;
    font-weight: 400;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const Footer = styled.div`
    width: 100%;
    height: 70px;
    padding: 10px 0 10px 0;
    display: flex;
    margin-top: auto;
    justify-content: center;
    align-items: center;
`;

export const ButtonFooter = styled.button`
    font-family: system-ui;
    width: 25%;
    height: 50px;
    background-color: #01243c;
    margin: 8px;
    border-radius: 15px;
    border: none;
    cursor: pointer;
    color: white;
    font-weight: 500;
    font-size: 18px;
    box-shadow: 1px 1px 3px black;
    :hover {
        transform: scale(1.03);
        transition: 0.3s;
    }
`;
