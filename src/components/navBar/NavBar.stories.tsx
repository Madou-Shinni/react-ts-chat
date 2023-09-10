import React from "react";
import NavBar, {MenuItem} from "./NavBar";

import '../../story.css'
import {faCommentDots} from "@fortawesome/free-solid-svg-icons";
import "styled-components/macro"

export default {
    title: "页面/NavBar",
    component: NavBar
}

export const Default = () => {
    return <NavBar />
}

export const Menu = () => {
    // @ts-ignore
    return (<div css={`background-color: ${({theme}) => theme.darkPurple}; width: 100px`}>
        <MenuItem showBadge active icon={faCommentDots}/>
    </div>)
}
