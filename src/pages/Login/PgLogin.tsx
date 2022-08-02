import React from "react";
import {DivElements, DivLogin, Text, Usuario , DivUsuario, ButtonEnviar, DivBotao, InputPreencher, Senha } from "../../styles/PgLoginStyled";
import { ErrorMessage, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import schema from "./schema"


function PgLogin() {
    const navigate = useNavigate();

    return (
        <> 
            <DivElements>
                <DivLogin>
                    <Formik
                    validationSchema={schema}
                    validateOnMount
                    initialValues={{
                        usuario: '',
                        senha: '',
                    }}
                    onSubmit={values => console.log(values)}
                    > 

                    {({ handleChange, handleBlur,  handleSubmit, values, errors, touched}) => (
                        
                    <>
                        <Text>Login</Text>
                        <br/>
                            <DivUsuario>
                                <Usuario>Usuário:</Usuario>
                                <br/>
                                <InputPreencher  type={"text"} 
                                onChange={handleChange('usuario')}
                                onBlur={handleBlur('usuario')}
                                value={values.usuario}
                                error={!!(errors['usuario'] && touched.usuario)}
                                ></InputPreencher>
                                <ErrorMessage name="usuario"></ErrorMessage>
                                <br/>
                                <br/>
                                <Senha>Senha:</Senha>
                                    <br/>
                                    <InputPreencher  type={"password"} 
                                    onChange={handleChange('senha')}
                                    onBlur={handleBlur('senha')}
                                    value={values.senha}
                                    error={!!(errors['senha'] && touched.senha)}
                                    ></InputPreencher>
                                    <ErrorMessage name="senha"></ErrorMessage>
                            </DivUsuario>
                            <DivBotao>
                                <br/>
                                <ButtonEnviar onClick={() => handleSubmit()}> Entrar </ButtonEnviar>
                                <br/>
                            </DivBotao>
                    </>
                    )}
                    </Formik>
                </DivLogin>
            </DivElements>
        </>
    )
}

export default PgLogin;