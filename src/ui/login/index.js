import styled from 'styled-components'
import loginBg from '../../assets/images/login-bg.jpg'
import { Grid } from '@material-ui/core'
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
    border: 1px solid red;
    border-radius: 2px;
    box-shadow: 0 10px 12px 2px rgba(0, 0, 0, 0.2);
    z-index: 2;
    padding: 5px;
    background-color: #ffffff;
`

const LoginFormBlockWrapper = styled(Grid).attrs({
    container: true,
    spacing: 16
})`

`
const LoginFormBlock = styled(Grid).attrs({
    item: true,
    xs: 12,
    sm: 12,
    md: 6
})``

export {
    LoginWrapper,
    LoginForm,
    LoginFormBlockWrapper,
    LoginFormBlock
}