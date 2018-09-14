import styled from 'styled-components'

const Input = styled.input`
    padding: 10px 15px 10px 25px;
    min-width: 120px;
    border: none;
    margin: 5px 15px;
    border-radius: 20px;
    transition: box-shadow 1000ms;
    background: #ffffff;
    box-shadow: 1px 1px 5px 0 rgba(0,0,0,.2);
    &:focus {
        outline: none;
        box-shadow: 3px 1px 5px 0 rgba(0,0,0,.3);
    }

`

export {
    Input
}