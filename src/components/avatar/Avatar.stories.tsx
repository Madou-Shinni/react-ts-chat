import React from "react";
import Avatar from "./Avatar";
import avatar from "../../assets/images/OIP.jpg"

export default {
    title: "UI/Avatar",
    component: Avatar
}

export const Default = () => {
    return <Avatar />
}

export const Sizes = () => {
    return <div className={'row-element'}>
        <Avatar src={avatar} size={"48px"} />
        <Avatar src={avatar} size={"56px"} />
        <Avatar src={avatar} size={"64px"} />
        <Avatar src={avatar} size={"72px"} />
    </div>
}

export const WithStatus = () => {
    return <div className={'row-element'}>
        <Avatar src={avatar} status={'online'}/>
        <Avatar src={avatar} status={"offline"} />
        <Avatar src={avatar} status={'offline'} size={"64px"} />
        <Avatar src={avatar} status={'online'} size={"72px"} />
    </div>
}