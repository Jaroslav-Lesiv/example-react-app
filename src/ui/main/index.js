import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    min-width: 100vw;
    min-height: 100vh;
`
const Screen = styled.div`
    display: flex;
    width: 800px;
    height: 600px;
    border: 1px solid green;
`
const Paper = styled.div`
    background-color: #ffffff;
    border-radius: 3px;
`

export {
    Wrapper,
    Paper,
    Screen
}