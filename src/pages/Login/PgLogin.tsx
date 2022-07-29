import React from "react";
import {DivElements, DivLogin, Text, Usuario , DivUsuario, ButtonEnviar, DivBotao, InputPreencher, Senha } from "../../styles/PgLoginStyled";


function PgLogin() {
    // function getStyles() {
    //     if (getIn(errors, fieldName)) {

    //         return (
    //             outline: 'none',
    //         );
    //     }'
    // }
    return (
        <> 
            <DivElements>
                <DivLogin>
                    <Text>Login</Text>
                    <br/>
                    <DivUsuario>
                        <Usuario>Usuário:</Usuario>
                        <br/>
                        <InputPreencher  type={"text"} ></InputPreencher>
                        <br/>
                        <br/>
                        <Senha>Senha:</Senha>
                            <br/>
                            <InputPreencher  type={"password"}  ></InputPreencher>
                    </DivUsuario>
                    <DivBotao>
                        <br/>
                        <ButtonEnviar> Entrar </ButtonEnviar>
                        <br/>
                    </DivBotao>
                </DivLogin>
            </DivElements>
        </>
    )
}

export default PgLogin;