import React from "react";
import Button from "./Button";
import {ReactComponent as Plus} from "assets/icons/plus.svg"

import '../../story.css'
import Icon from "../icon/Icon";

export default {
    title: "UI/Button",
    component: Button
}

export const RectButton = () => {
    return <Button shape={"rect"}>默认按钮</Button>
}

export const CircleButton = () => {
    return <Button shape={"circle"} size={'30px'}>
        <Icon icon={Plus} width={24} height={24}/>
    </Button>
}
