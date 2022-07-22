import React from "react";
import {DivElements, DivLogin} from "../../styles/PgLoginStyled";


function PgLogin() {
    return (
        <> 
            <DivElements>
                <DivLogin>
                    <h1>LOGIN</h1>
                    <br/>
                    <div>
                        <label> CPF:
                        <br/>
                        <input type={"text"}  placeholder='Insira seu CPF'></input>
                        </label>
                        <br/>
                        <label>Senha:
                            <br/>
                            <input type={"password"} placeholder='Digite sua senha' ></input>
                        </label>
                    </div>
                    <div>
                        <br/>
                        <input type={'submit'} placeholder='ENVIAR'></input>
                        <br/>
                    </div>
                    <div>
                        <br/>
                        <a href="###">Não Possui uma conta?
                                     Cadastre-se   </a>
                    </div>
                </DivLogin>
            </DivElements>
        </>
    )
}

export default PgLogin;