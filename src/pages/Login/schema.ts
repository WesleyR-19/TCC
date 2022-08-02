import * as Yup from "yup"

export default Yup.object().shape({
    usuario: Yup.string().required('O campo Usuário não foi preenchido corretamente!'),
    senha: Yup.string().required('O campo Senha não foi preenchido corretamente!')
})