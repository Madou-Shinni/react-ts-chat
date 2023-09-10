import styled from "styled-components"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {activeBar} from "../../utils/mixins";
import AvatarWrapper, {StatusIcon} from "../avatar/style";

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
  display: grid;
  grid-template-rows: repeat(5, minmax(auto,88px)) 1fr;
`

const NavBarWrapper = styled.div<StyleProps>`
  display: grid;
  /* 两行 1:4 */
  grid-template-rows: 1fr 4fr;
  width: 100px;
  height: 100vh;
  background-color: ${({theme}) => theme.darkPurple};
  padding: 30px 0;
  
  /* 可以通过style.ts的AvatarWrapper来改变Avatar的样式 */
  ${AvatarWrapper} {
    justify-self: center;
    
    /* 状态图标设置为侧导航颜色 */
    ${StatusIcon} {
      &::before {
        background-color: ${({theme}) => theme.darkPurple};
      }
    }
  }
`


export default NavBarWrapper;
export {MenuItemWrapper,MenuIcon,MenuItems}
