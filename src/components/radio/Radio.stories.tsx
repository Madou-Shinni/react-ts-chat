import React from "react";
import Radio, {RadioGroup} from "./Radio";

import '../../story.css'

export default {
    title: "UI/input/Radio",
    component: Radio
}

export const Default = () => {
    return <Radio>选项</Radio>
}

export const RadioGroupComponent = () => {
    return <RadioGroup label={'请选择'}>
        <Radio name={'option'}>选项1</Radio>
        <Radio name={'option'}>选项2</Radio>
        <Radio name={'option'}>选项3</Radio>
    </RadioGroup>
}
