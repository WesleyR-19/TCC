import { useNavigate } from "react-router-dom";
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

export default function PgAtendimentosGerados() {
    const navigate = useNavigate();
    return (
        <Container>
            <Header>
                <HeaderButton>Sair</HeaderButton>
            </Header>
            <Text>Atendimentos Gerados</Text>
            <Wrapper>
                <AttendanceWrapper>
                    <AttendanceHeader>Atendimento</AttendanceHeader>
                    <AttendanceTopics>
                        Motivo Do Atendimento:
                        <AttendanceTopicsResponse>
                            Resposta
                        </AttendanceTopicsResponse>
                    </AttendanceTopics>
                    <AttendanceTopics>
                        Nome:
                        <AttendanceTopicsResponse>
                            Resposta
                        </AttendanceTopicsResponse>
                    </AttendanceTopics>
                    <AttendanceTopics>
                        Sobrenome:
                        <AttendanceTopicsResponse>
                            Resposta
                        </AttendanceTopicsResponse>
                    </AttendanceTopics>
                    <AttendanceTopicsWrapper>
                        <AttendanceTopics>
                            Rua:
                            <AttendanceTopicsResponse>
                                Resposta
                            </AttendanceTopicsResponse>
                        </AttendanceTopics>
                        <AttendanceTopics>
                            Bairro:
                            <AttendanceTopicsResponse>
                                Resposta
                            </AttendanceTopicsResponse>
                        </AttendanceTopics>
                        <AttendanceTopics>
                            Nº:
                            <AttendanceTopicsResponse>
                                Resposta
                            </AttendanceTopicsResponse>
                        </AttendanceTopics>
                    </AttendanceTopicsWrapper>
                    <AttendanceTopics>
                        Local Do Atendimento:
                        <AttendanceTopicsResponse>
                            Resposta
                        </AttendanceTopicsResponse>
                    </AttendanceTopics>
                    <AttendanceTopics>
                        Data Do Atendimento:
                        <AttendanceTopicsResponse>
                            Resposta
                        </AttendanceTopicsResponse>
                    </AttendanceTopics>
                    <AttendanceTopics>
                        Descrição geral:
                        <AttendanceTopicsResponse>
                            Resposta
                        </AttendanceTopicsResponse>
                    </AttendanceTopics>
                </AttendanceWrapper>
                <AttendanceWrapper>
                    <AttendanceHeader>Atendimento</AttendanceHeader>
                    <AttendanceTopics>
                        Motivo Do Atendimento:
                        <AttendanceTopicsResponse>
                            Resposta
                        </AttendanceTopicsResponse>
                    </AttendanceTopics>
                    <AttendanceTopics>
                        Nome:
                        <AttendanceTopicsResponse>
                            Resposta
                        </AttendanceTopicsResponse>
                    </AttendanceTopics>
                    <AttendanceTopics>
                        Sobrenome:
                        <AttendanceTopicsResponse>
                            Resposta
                        </AttendanceTopicsResponse>
                    </AttendanceTopics>
                    <AttendanceTopicsWrapper>
                        <AttendanceTopics>
                            Rua:
                            <AttendanceTopicsResponse>
                                Resposta
                            </AttendanceTopicsResponse>
                        </AttendanceTopics>
                        <AttendanceTopics>
                            Bairro:
                            <AttendanceTopicsResponse>
                                Resposta
                            </AttendanceTopicsResponse>
                        </AttendanceTopics>
                        <AttendanceTopics>
                            Nº:
                            <AttendanceTopicsResponse>
                                Resposta
                            </AttendanceTopicsResponse>
                        </AttendanceTopics>
                    </AttendanceTopicsWrapper>
                    <AttendanceTopics>
                        Local Do Atendimento:
                        <AttendanceTopicsResponse>
                            Resposta
                        </AttendanceTopicsResponse>
                    </AttendanceTopics>
                    <AttendanceTopics>
                        Data Do Atendimento:
                        <AttendanceTopicsResponse>
                            Resposta
                        </AttendanceTopicsResponse>
                    </AttendanceTopics>
                    <AttendanceTopics>
                        Descrição geral:
                        <AttendanceTopicsResponse>
                            Resposta
                        </AttendanceTopicsResponse>
                    </AttendanceTopics>
                </AttendanceWrapper>
            </Wrapper>
            <Footer>
                <ButtonFooter onClick={() => navigate("/home")}>Voltar a Página Inicial</ButtonFooter>
                <ButtonFooter onClick={() => navigate("/Atendimento")}>Gerar Atendimento</ButtonFooter>
            </Footer>
        </Container>
    );
}
