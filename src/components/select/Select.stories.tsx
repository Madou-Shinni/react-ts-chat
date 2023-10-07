import React from "react";
import Select from "./Select";

import '../../story.css'
import Option from "../option/Option";

export default {
    title: "UI/Input/Select",
    component: Select
}

export const Default = () => {
    return <Select >
        <Option>最新消息</Option>
        <Option>最新消息222</Option>
    </Select>
}

export const FormSelect = () => {
    return <Select type={"form"} >
        <Option>杭州市</Option>
        <Option>浙江省</Option>
    </Select>
}
