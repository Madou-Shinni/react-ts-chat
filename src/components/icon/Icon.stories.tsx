import React from "react";
import Icon from "./Icon";

import '../../story.css'
import {ReactComponent as SmileIcon} from "assets/icons/smile.svg"

export default {
    title: "UI/Icon",
    component: Icon
}

export const Default = () => {
    return <Icon icon={SmileIcon} />
}

export const Color = () => {
    return <Icon icon={SmileIcon} color={'#cccccc'} />
}

export const Size = () => {
    return <Icon icon={SmileIcon} width={48} height={48} />
}