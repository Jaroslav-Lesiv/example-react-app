import styled from 'styled-components'

const Input = styled.input`
    padding: 10px 15px 10px 25px;
    min-width: 120px;
    border: 1px solid rgba(33,150,243,.2);
    border-radius: 20px;
    background: #ffffff;
    box-shadow: 0 3px 5px 2px rgba(33, 203, 243, .3);
    &:focus {
        outline: none;
    }

`

export {
    Input
}