import Header from './componentes/Header/Header.js'
import styled from 'styled-components';
import Pesquisa from './componentes/Pesquisa/Pesquisa.js'
import UltimosLancamentos from './componentes/UltimosLancamentos/UltimosLancamentos.js';

const AppContainer = styled.div`
    height: 100vh;
    width: 100vw;
    background-image: linear-gradient(90deg, #002F52 35%, #326589 100%);
    max-width: 100vw;
    overflow-x: hidden;
`

function App() {
  return (
    <AppContainer>
      <Header />
      <Pesquisa />
      <UltimosLancamentos />
    </AppContainer>
  );
}

export default App;
