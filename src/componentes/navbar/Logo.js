import logo from '../../img/logo.svg'
import styled from 'styled-components'

const LogoContainer = styled.div`
    display:flex;
    align-items: center;
    gap: 10px;
    font-size: 30px;
`

function Logo(){
    return(
        <LogoContainer>
          <img alt="logo" src={logo}></img>
          <p><strong>Alura</strong>Books</p>
        </LogoContainer>
    )
}

export default Logo