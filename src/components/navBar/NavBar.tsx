import React from "react";
import NavBarWrapper, {MenuIcon, MenuItemWrapper} from "./style";
import Badge from "../badge/Badge";
import {IconComponent} from "../../type/type";

type Props = {
    icon?: IconComponent
    active?: boolean
    showBadge?: boolean
    children?: React.ReactNode
}

const NavBar: React.FC<Props> = ({children}) => {
    return <NavBarWrapper>
        {children}
    </NavBarWrapper>
}

const MenuItem: React.FC<Props> = (props) => {
    return <MenuItemWrapper active={props.active}>
        <a href="#">
            <Badge show={props.showBadge}>
                <MenuIcon active={props.active} icon={props.icon} />
            </Badge>
        </a>
    </MenuItemWrapper>
}


export default NavBar;
export {MenuItem}
