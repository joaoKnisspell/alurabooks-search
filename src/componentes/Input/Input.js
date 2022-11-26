import styled from 'styled-components'

const Input = styled.input`
    border:1px solid #fff;
    background: transparent;
    padding: 20px 140px;
    border-radius: 50px;
    width:200px;
    color: #fff;
    font-size:16px;
    margin-bottom: 30px;
    cursor: pointer;

        &::placeholder{
            color: #FFF;
            font-size: 16px;
        }
`

export default Input