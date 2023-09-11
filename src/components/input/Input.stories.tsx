import React from "react";
import Input from "./Input";
import Search from "./Input";

import '../../story.css'
import Icon from "../icon/Icon";
import {ReactComponent as ClipIcon} from "assets/icons/clip.svg"
import {ReactComponent as SmileIcon} from "assets/icons/smile.svg"

export default {
    title: "UI/Input",
    component: Input
}

export const Default = () => {
    return <Input />
}

export const SearchComponent = () => {
    return <Search />
}

export const WithAffix = () => {
    return <Input prefix={<Icon icon={ClipIcon} color={'#cccccc'}/>} suffix={<Icon icon={SmileIcon} color={'#cccccc'} />}/>
}
