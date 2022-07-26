import React, { useState, useRef, useEffect } from "react";
import { Formik, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import Select, { OnChangeValue, OptionContext } from 'react-select'
import Schema from "./schema";
import {db, } from "../../utils/firebase";
import { collection, addDoc,  } from "firebase/firestore";


import {
    DivGeral, 
    DivSair, 
    ButtonST, 
    DivElements,
    Titulo,
    DivInputs,
    DivItems, 
    Posicionamento,
    LabelText,
    InputStyled,
    DivUnir,
    InputStyledNumero,
    CampoDescricao,
    DivBotton,
    ButtonS,
    InputStyledData,
    DivUnir2
    
} from '../../styles/PgAtendimentoStyled'
import { date } from "yup";
import { confirmPasswordReset } from "firebase/auth";
import { useTab } from "@mui/base";
import { FunctionsOutlined } from "@material-ui/icons";


const options = [
  { value: 'Algum tipo de benefício', label: 'Algum tipo de benefício' },
  { value: 'Conflito Familiar', label: 'Conflito Familiar' },
  { value: 'Acompanhamento Psicossocial', label: 'Acompanhamento Psicossocial' },
  { value: 'Outro', label: 'Outro' },
  
]

const localAtedimento = [
    { value: 'Cras Casa da Cidadania - Norte, Rua Washington Luíz, 704, B. São Francisco de Assis', label: 'Cras Casa da Cidadania' },
    { value: 'Cras Dr.Paulinho Santiago - Centro Sul, Av.México, 911 ', label: 'Cras Dr.Paulinho Santiago' },
    { value: 'Cras Casa da Família - Sul Av.A, SN, Bairro Santa Luzia', label: 'Cras Casa da Família' },
    { value: 'Craes Cloracildes Dal Agnol, Rua Castro Alves, 274', label: 'Craes Cloracildes Dal Agnol' },


  ]



function PgAtendimento () {

    const refreshPage = () => {
        window.location.reload();
    }

    const Text = () => {
        useEffect(() => {
            document.title = 'Atendimento Gerado com sucesso!' 
        })
    }


const navigate = useNavigate();
    return (
        <>
        <DivGeral>
            <DivSair>
                <ButtonST onClick={() => navigate("/Login")} >Sair</ButtonST>
            </DivSair>
            <DivElements>

                <Titulo>Atendimento</Titulo>
            <Formik
            validationSchema={Schema}
            validateOnMount
            initialValues={{
                nome: '',
                sobrenome: '',
                rua: '',
                bairro: '',
                numero: '',
                localAtendimento: '',
                descricao: '',
                motivoAtendimento: '',
                data: '',
            }}
            onSubmit={values => {
                addDoc(collection(db, "Atendimento"), {
                  Nome: values.nome,
                  Sobrenome: values.sobrenome,
                  rua: values.rua,
                  bairro: values.bairro,
                  numero: values.numero,
                  localAtendimento: values.localAtendimento,
                  descricao: values.descricao,
                  motivoAtendimento: values.motivoAtendimento,
                  data: values.data,
                    }).then(refreshPage);
        }}    
            >
                {({ handleChange, handleBlur, handleSubmit, values, isValid, errors, touched  }) => (
                <>
                    <DivInputs>
                        <DivItems>
                            <DivItems>
                                <Posicionamento> 
                                    <DivUnir>
                                        <LabelText>Nome:</LabelText>
                                        <InputStyled
                                        onChange={handleChange('nome')}
                                        onBlur={handleBlur('nome')}
                                        value={values.nome}
                                        error={!!(errors['nome'] && touched.nome)}
                                        />
                                        <ErrorMessage name="nome" />
                                    </DivUnir>
                                    <DivUnir>
                                    <LabelText>Sobrenome:</LabelText>
                                    <InputStyled
                                    onChange={handleChange('sobrenome')}
                                    onBlur={handleBlur('sobrenome')}
                                    value={values.sobrenome}
                                    error={!!(errors['sobrenome'] && touched.sobrenome)}
                                    />
                                    <ErrorMessage name="sobrenome" />
                                    </DivUnir>
                                </Posicionamento>
                        
                            </DivItems>

                                <Posicionamento>
                                    <DivUnir>
                                        <LabelText>Rua:</LabelText>
                                        <InputStyled
                                        onChange={handleChange('rua')}
                                        onBlur={handleBlur('rua')}
                                        value={values.rua}
                                        error={!!(errors ['rua'] && touched.rua)}
                                        />
                                        <ErrorMessage name="rua" />
                                    </DivUnir>
                                    <DivUnir>
                                        <LabelText>Bairro:</LabelText>
                                        <InputStyled
                                        onChange={handleChange('bairro')}
                                        onBlur={handleBlur('bairro')}
                                        value={values.bairro}
                                        error={!!(errors ['bairro'] && touched.bairro)}
                                        />
                                        <ErrorMessage name="bairro" />
                                    </DivUnir>
                                    <DivUnir2>
                                        <LabelText>Número:</LabelText>
                                        <InputStyledNumero
                                        onChange={handleChange('numero')}
                                        onBlur={handleBlur('numero')}
                                        value={values.numero}
                                    />
                                    </DivUnir2>
                                    <DivUnir>
                                        <LabelText>Data:</LabelText>
                                        <InputStyledData
                                        type={"date"} 
                                        onChange={handleChange('data')}
                                        onBlur={handleBlur('data')}
                                        value={values.data} />
                                        <ErrorMessage name="data" />
                                </DivUnir>

                                </Posicionamento>

                                <Posicionamento>
                                <DivUnir>
                                    <LabelText>Local do Atendimento:</LabelText>
                                    <Select onBlur={handleBlur('localAtendimento')} placeholder="Selecione o Local de Atendimento..." onChange={(newValue) => {
                                        // console.log(newValue)
                                        if (newValue?.value) {
                                            handleChange('localAtendimento')(newValue.value);
                                        }
                                    }} options={localAtedimento} />
                                    <ErrorMessage name="localAtendimento" />

                                    <LabelText>Motivo do Atendimento:</LabelText>
                                    <Select onBlur={handleBlur('motivoAtendimento')} placeholder="Seleciono o motivo de Atendimento..." onChange={(newValue) => {
                                        // console.log(newValue)
                                        if (newValue?.value) {
                                            handleChange('motivoAtendimento')(newValue.value);
                                        }
                                    }} options={options}/>
                                    <ErrorMessage name="motivoAtendimento" />

                                    <LabelText>Descrição:</LabelText>
                                    <CampoDescricao
                                        onChange={handleChange('descricao')}
                                        onBlur={handleBlur('descricao')}
                                        value={values.descricao}/>
                                    </DivUnir>
                                </Posicionamento>

                            </DivItems>
                            <DivBotton>
                                <ButtonS disabled={!isValid} onClick={() => handleSubmit()} >Gerar Atendimento</ButtonS>
                                <ButtonS onClick={() => navigate("/home")} >Voltar a Pagina Inicial</ButtonS>
                            </DivBotton>
                    </DivInputs>
                </>
                )}
            </Formik>
            </DivElements>
            </DivGeral>
        </>
    ) 
}

export default PgAtendimento;
