import Logo from '../../componentes/navbar/Logo';
import CategoriaNav from '../../componentes/navbar/CategoriasNav';
import IconsNav from '../../componentes/navbar/IconsNav';


import styled from 'styled-components';

const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: space-between;
    padding:0 10%;
` 

function Header(){
    return(
        <HeaderContainer>
          <Logo />
          <CategoriaNav />
          <IconsNav />
        </HeaderContainer>
    )
}

export default Header