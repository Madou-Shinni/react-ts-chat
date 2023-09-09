import React from "react";
import Icon from "./Icon";
import '../../story.css'
import {ReactComponent as SmileIcon} from "assets/icons/smile.svg"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCommentDots} from "@fortawesome/free-solid-svg-icons"

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

export const Fontawesome = () => {
    return <FontAwesomeIcon icon={faCommentDots} width={48} height={48} />
}