import React from "react";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import Select, { OnChangeValue, OptionContext } from 'react-select'


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

const navigate = useNavigate();
    return (
        <>
        <div>
            <div>
                <h1>Atendimento</h1>
            </div>
            <Formik
            initialValues={{
                nome: '',
                sobrenome: '',
                rua: '',
                bairro: '',
                numero: '',
                localAtendimento: '',
                descricao: '',
                motivoAtendimento: '',
              }}
              onSubmit={values => console.log(values)}       
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                <>
                    <div>
                        <label>Motivo do Atendimento:</label>
                        <Select placeholder="Seleciono o motivo de Atendimento..." onChange={(newValue) => {
                            // console.log(newValue)
                            if (newValue?.value) {
                                handleChange('motivoAtendimento')(newValue.value);
                            }
                        }} options={options} />
                        
                        <label>Name</label>
                        <input
                        onChange={handleChange('nome')}
                        onBlur={handleBlur('nome')}
                        value={values.nome}
                        placeholder="Nome:"
                        placeholder-color="#585858"
                        />

                        <label>Sobrenome:</label>
                        <input
                        onChange={handleChange('sobrenome')}
                        onBlur={handleBlur('sobrenome')}
                        value={values.sobrenome}
                        placeholder="Sobrenome:"
                        placeholder-color="#585858"
                        ></input>

                        <label>Rua:</label>
                        <input
                        onChange={handleChange('rua')}
                        onBlur={handleBlur('rua')}
                        value={values.rua}
                        placeholder="Rua:"
                        placeholder-color="#585858"
                        ></input>

                        <label>Bairro:</label>
                        <input
                        onChange={handleChange('bairro')}
                        onBlur={handleBlur('bairro')}
                        value={values.bairro}
                        placeholder="Bairro:"
                        placeholder-color="#585858"
                        ></input>

                        <label>Numero:</label>
                        <input
                        onChange={handleChange('numero')}
                        onBlur={handleBlur('numero')}
                        value={values.numero}
                        placeholder="Numero:"
                        placeholder-color="#585858"
                        ></input>
                        
                        <label>Local do Atentedimento:</label>
                        <Select placeholder="Selecione o Local de Atendimento..." onChange={(newValue) => {
                            // console.log(newValue)
                            if (newValue?.value) {
                                handleChange('motivoAtendimento')(newValue.value);
                            }
                        }} options={localAtedimento} />

                        <label>Descrição:</label>
                        <input
                        onChange={handleChange('descricao')}
                        onBlur={handleBlur('descricao')}
                        value={values.descricao}
                        placeholder="Descrição:"
                        placeholder-color="#585858"
                        ></input>
                    </div>
                    <div>
                        <button onClick={() => handleSubmit()} >Gerar Atendimento</button>
                        <button onClick={() => navigate("/Login")} >Voltar a Pagina Inicial</button>
                    </div>
                </>
                )}

            </Formik>
        </div>
        </>
    ) 
}

export default PgAtendimento;