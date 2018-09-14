import styled from 'styled-components'
import { color } from '../'
import { size } from '../constant';
import { NavLink as DefaultNavLink } from 'react-router-dom'
const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    width: ${size.header}px;
    background: ${color.primary};
    z-index: 2;
    box-shadow: 2px 0 5px 0 rgba(0,0,0,.2);
`

const NavList = styled.ul`
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
`

const NavListItem = styled.li`
    list-style: none;
    display: flex;
`

const NavLink = styled(DefaultNavLink).attrs({
    activeClassName: `active`,
    exact: true
})`
    width: ${size.header - 10}px;
    height: ${size.header - 10}px;
    margin: 5px;
    box-shadow: 1px 1px 5px 0 rgba(0,0,0,.3);
    transition: transform 700ms, box-shadow 1000ms;
    background-color: ${color.primary};
    cursor: pointer;
    color: ${color.secondary};
    text-decoration: none;
    border-radius: 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    & > svg {
        color: ${color.secondary};
    }
    &:hover {
        transform: translateX(10px);
        box-shadow: 3px 1px 5px 0 rgba(0,0,0,.3);
    }
    &.active {
        transform: translateX(10px);
        color: ${color.primary};
        background: ${color.secondaryGradient};
        box-shadow: 3px 1px 5px 0 rgba(0,0,0,.3);
        & > svg {
            color: ${color.primary};
        }
        
    }
    
`


export {Nav, NavList, NavListItem, NavLink}
