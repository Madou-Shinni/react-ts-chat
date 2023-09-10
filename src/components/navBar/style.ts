import styled from "styled-components"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {activeBar} from "../../utils/mixins";

interface StyleProps {
}

interface MenuProps {
    active?: boolean
    icon?: React.FC
}

const MenuItemWrapper = styled.div<MenuProps>`
  & > a {
    width: 100%;
    height: 75px;
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    ${activeBar()}
    
    /* 激活 */
    ${({active}) => active ? '' : `&::before, &::after {height: 0}`}
  }
`

const MenuIcon = styled(FontAwesomeIcon)<MenuProps>`
  color: white;
  font-size: 24px;
  opacity: ${({active}) => active ? 1 : 0.3};
`

const MenuItems = styled.div<StyleProps>`
`

const NavBarWrapper = styled.div<StyleProps>`
`


export default NavBarWrapper;
export {MenuItemWrapper,MenuIcon,MenuItems}
