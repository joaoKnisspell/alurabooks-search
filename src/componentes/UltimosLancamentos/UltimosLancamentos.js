import { livros } from './dadosUltimosLancamentos'
import styled from 'styled-components'
import { Titulo } from '../Titulo/Titulo'
import CardRecomenda from './CardRecomenda'
import cardImg from '../../img/livro2.png'

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function UltimosLancamentos(){
    return(
        <UltimosLancamentosContainer>
            <Titulo size="22px" align="center">ÚLTIMOS LANÇAMENTOS</Titulo>
            <NovosLivrosContainer>
                { livros.map((livro) => (            
                    <img src={livro.src} alt="foto livro"></img>
                )) }
            </NovosLivrosContainer>

            <CardRecomenda 
                titulo="Talvez você se interesse por..." 
                subtitulo="Angular 11" 
                descricao="Construindo uma aplicação integrada com a plataforma Google." 
                img={cardImg} />

            <CardRecomenda 
                titulo="Segundo card..." 
                subtitulo="Componentes dinâmicos React" 
                descricao="Finalizando primeiro curso de React." 
                img={cardImg} />
            </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos