import * as Yup from "yup"

export default Yup.object().shape({
    nome: Yup.string().min(2, 'Nome muito curto!').required('O campo Nome não foi preenchido corretamente!'),
    sobrenome: Yup.string().required('O campo Email não foi preenchido corretamente!'),
    rua: Yup.string().required('O campo Rua é obrigatório!'),
    bairro: Yup.string().required('O campo Bairro é obrigatório!'),
    numero: Yup.number().integer('Insira um valor inteiro').positive('Somente valores inteiros são permitidos!'),
    descricao: Yup.string(),
    data: Yup.date().required('O campo data é obrigatório'),
    motivoAtendimento: Yup.string().required("O campo Motivo do Atendimento é obrigatório!"),
    localAtendimento: Yup.string().required("O campo Local do Atendimento é obrigatório!"),
});


