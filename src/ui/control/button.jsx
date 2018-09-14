import styled from 'styled-components'
import { color } from '../constant';

const Button = styled.button`
    background: ${({ disabled, variant }) => (disabled ? color.disabled : variant === 'primary' ? color.primaryGradient : color.secondaryGradient)};
    color: ${({ disabled, variant }) => (disabled ? color.textColorDark : variant === 'primary' ? color.secondary : color.primary)};
    padding: 10px 15px 10px 25px;
    min-width: 120px;
    border: none;
    margin: 5px 15px;
    border-radius: 20px;
    transition: box-shadow 1000ms;
    box-shadow: 1px 1px 5px 0 rgba(0,0,0,.2);
    cursor: pointer;
    text-transform: uppercase;
    font-weight: 600;
    &:hover {
        box-shadow: 3px 1px 5px 0 rgba(0,0,0,.3);
    }
    &:focus {
        outline: none;
        box-shadow: 3px 1px 5px 0 rgba(0,0,0,.3);
    }

`

export {
    Button
}