import React from "react";
import { Formik } from "formik";

function PgAtendimento () {
    <>
    <div>
        <Formik
                  initialValues={{
                    nome: '',
                    sobrenome: '',
                    rua: '',
                    bairro: '',
                    numero: '',
                    localAtendimento: '',
                    descricao: '',
                  }}
                  onSubmit={values => console.log(values)}
        >
            {[()]}

        </Formik>
    </div>
    </>
}