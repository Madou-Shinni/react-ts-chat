import React from "react";
import NavBarWrapper, {MenuIcon, MenuItems, MenuItemWrapper} from "./style";
import Badge from "../badge/Badge";
import {IconComponent} from "../../type/type";
import Avatar from "../avatar/Avatar";
import avatar from "../../assets/images/OIP.jpg"
import {faCog, faCommentDots, faEllipsisH, faFolder, faStickyNote, faUsers} from "@fortawesome/free-solid-svg-icons";
import "styled-components/macro"

type Props = {
    icon?: IconComponent
    active?: boolean
    showBadge?: boolean
}

const NavBar: React.FC<Props> = () => {

    return <NavBarWrapper>
        <Avatar src={avatar} status={'online'} />
        <MenuItems>
            <MenuItem showBadge active icon={faCommentDots} />
            <MenuItem icon={faUsers} />
            <MenuItem icon={faFolder} />
            <MenuItem icon={faStickyNote} />
            <MenuItem icon={faEllipsisH} />
            <MenuItem icon={faCog} css={`align-self: end`} />
        </MenuItems>
    </NavBarWrapper>
}

const MenuItem: React.FC<Props> = (props) => {
    /* {...props} 让 css={`align-self: end`} 也能加入样式*/
    return <MenuItemWrapper active={props.active} {...props}>
        <a href="#">
            <Badge show={props.showBadge}>
                <MenuIcon active={props.active} icon={props.icon} />
            </Badge>
        </a>
    </MenuItemWrapper>
}


export default NavBar;
export {MenuItem}
