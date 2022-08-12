import { collection, CollectionReference, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AtendimentoModel from "../../model/Atendimento-model";
import { db } from "../../utils/firebase";
import {
    Container,
    Header,
    HeaderButton,
    Wrapper,
    AttendanceWrapper,
    AttendanceHeader,
    AttendanceTopicsWrapper,
    AttendanceTopics,
    AttendanceTopicsResponse,
    Footer,
    ButtonFooter,
    Text,
} from "../../styles/PgAtendimentoGeradoStyled";
import { async } from "@firebase/util";



interface IAtendimento {

    id: string;
    Nome: string,
    Sobrenome: string,
    rua: string,
    bairro: string,
    numero: number,
    localAtendimento: string,
    descricao: string,
    motivoAtendimento: string,
    data: Date,
}



export default function PgAtendimentosGerados() {


const [AtendimentoGerados, SetAtendimentosGerados] = useState<IAtendimento[]>([]);
const _collection = collection(db, 'Atendimento') as CollectionReference<IAtendimento>;

useEffect(() => {
    const getAtendimento = async () => {
        const data = await getDocs<IAtendimento>(_collection);
        SetAtendimentosGerados(data.docs.map(doc => ({...doc.data(), id: doc.id})))
    }
    getAtendimento();
}, []);

    const navigate = useNavigate();
    return (
        <Container>
            <Header>
                <HeaderButton>Sair</HeaderButton>
            </Header>
            <Text>Atendimentos Gerados</Text>
            <Wrapper>

                    {AtendimentoGerados.map(valores => {
                        return(
                            <div key={valores.id}>
                            <AttendanceWrapper>
                            <AttendanceHeader>Atendimento</AttendanceHeader>
                            <AttendanceTopics>
                                Motivo Do Atendimento:
                                <AttendanceTopicsResponse>
                                    {valores.motivoAtendimento}
                                </AttendanceTopicsResponse>
                            </AttendanceTopics>
                            <AttendanceTopics>
                                Nome:
                                <AttendanceTopicsResponse>
                                    {valores.Nome}
                                </AttendanceTopicsResponse>
                            </AttendanceTopics>
                            <AttendanceTopics>
                                Sobrenome:
                                <AttendanceTopicsResponse>
                                    {valores.Sobrenome}
                                </AttendanceTopicsResponse>
                            </AttendanceTopics>
                            <AttendanceTopicsWrapper>
                                <AttendanceTopics>
                                    Rua:
                                    <AttendanceTopicsResponse>
                                        {valores.rua}
                                    </AttendanceTopicsResponse>
                                </AttendanceTopics>
                                <AttendanceTopics>
                                    Bairro:
                                    <AttendanceTopicsResponse>
                                        {valores.bairro}
                                    </AttendanceTopicsResponse>
                                </AttendanceTopics>
                                <AttendanceTopics>
                                    Nº:
                                    <AttendanceTopicsResponse>
                                        {valores.numero}
                                    </AttendanceTopicsResponse>
                                </AttendanceTopics>
                            </AttendanceTopicsWrapper>
                            <AttendanceTopics>
                                Local Do Atendimento:
                                <AttendanceTopicsResponse>
                                    {valores.localAtendimento}
                                </AttendanceTopicsResponse>
                            </AttendanceTopics>
                            <AttendanceTopics>
                                Data Do Atendimento:
                                <AttendanceTopicsResponse>
                                    {valores.data}
                                </AttendanceTopicsResponse>
                            </AttendanceTopics>
                            <AttendanceTopics>
                                Descrição geral:
                                <AttendanceTopicsResponse>
                                    {valores.descricao}
                                </AttendanceTopicsResponse>
                            </AttendanceTopics>
                            </AttendanceWrapper>
                        </div>
                        )
                    })}

            </Wrapper>
            <Footer>
                <ButtonFooter onClick={() => navigate("/home")}>Voltar a Página Inicial</ButtonFooter>
                <ButtonFooter onClick={() => navigate("/Atendimento")}>Gerar Atendimento</ButtonFooter>
            </Footer>
        </Container>
    );
}
