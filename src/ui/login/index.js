import styled from 'styled-components'
import loginBg from '../../assets/images/login-bg.jpg'
import {Block} from '../'
const LoginWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-image: url(${loginBg});
    &:before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        background-color: rgba(255,255,255,0.8);
    }
`
const LoginForm = styled.form`
    display: flex;
    flex-wrap: wrap;
    max-width: 800px;
    flex-grow: 1;
    border-radius: 2px;
    box-shadow: 0 10px 12px 2px rgba(0, 0, 0, 0.2);
    z-index: 2;
    padding: 40px;
    background-color: #ffffff;

`

const LoginFormBlockWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-grow: 1;
    flex-direction: row;
`
const LoginFormBlock = styled(Block)`
    flex-basis: 320px;
    justify-content: center;
    flex-grow: 1;
    flex-direction: column;

`

export {
    LoginWrapper,
    LoginForm,
    LoginFormBlockWrapper,
    LoginFormBlock
}