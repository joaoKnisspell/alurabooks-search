import styled from 'styled-components';

const navCategorias = ['categorias', 'favoritos', 'minha estante'];

const CategoriaList = styled.ul`
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: center;
    gap: 3em;
`

const Categoria = styled.li`
    text-transform: uppercase;
    cursor: pointer;
`

function CategoriaNav(){
    return(
        
        <CategoriaList>
            {navCategorias.map((categ => (
              <Categoria><p>{categ}</p></Categoria> 
            )))}
        </CategoriaList>
        
    )
}

export default CategoriaNav