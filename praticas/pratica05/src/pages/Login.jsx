import Botao from "../components/Botao";
import Conteudo from "../components/Conteudo";
import Icone from "../components/Icone";
import Link from "../components/Link";
import Rodape from "../components/Rodape";
import Titulo from "../components/Titulo";
import InputEmail from "../components/InputEmail";
import InputSenha from "../components/InputSenha";

function Login(){
    return(
        <>
            <Conteudo>
                <Icone imagem="" texto="Logo da Aplicação"/>
                <Titulo texto="Aluno Online"/>
                <InputEmail />
                <InputSenha />
                <Botao texto="Entrar"/>
                <Link texto="Esqueci a Senha"/>
            </Conteudo>
            <Rodape texto="Copyright (C) 2024"/>
        </>
    );
}

export default Login;