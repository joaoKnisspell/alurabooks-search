import perfil from '../../img/perfil.svg';
import sacola from '../../img/sacola.svg';
import styled from 'styled-components';

const IconsList = styled.ul`
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: center;
    gap:2em;
`

const Icon = styled.li`
    cursor: pointer;
`

const icons = [perfil, sacola];

function IconsNav(){
    return(
        <IconsList>
            {icons.map((icon) => (
                <Icon><img src={icon} alt="icones navbar"></img></Icon>
            ))}
      </IconsList>
    )
}

export default IconsNav