import React from "react";
import {DivElements, DivLogin, Text, Usuario , DivUsuario, ButtonEnviar, DivBotao, InputPreencher, Senha } from "../../styles/PgLoginStyled";


function PgLogin() {
    return (
        <> 
            <DivElements>
                <DivLogin>
                    <Text>Login</Text>
                    <br/>
                    <DivUsuario>
                        <Usuario>Usuário:</Usuario>
                        <br/>
                        <InputPreencher type={"text"}  placeholder='Insira o usuário'></InputPreencher>
                        <br/>
                        <Senha>Senha:</Senha>
                            <br/>
                            <InputPreencher  type={"password"} placeholder='Digite sua senha' ></InputPreencher>
                    </DivUsuario>
                    <DivBotao>
                        <br/>
                        <ButtonEnviar className= 'Enviar'> Enviar </ButtonEnviar>
                        <br/>
                    </DivBotao>
                </DivLogin>
            </DivElements>
        </>
    )
}

export default PgLogin;