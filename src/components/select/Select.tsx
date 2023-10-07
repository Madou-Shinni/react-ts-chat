import React from "react";
import SelectWrapper from "./style";
import LabelContainer from "../labelContainer/LabelContainer";

type Props = {
    children?: any
    label?: string
    type?: 'form'
}

const Select: React.FC<Props> = (props) => {
    const selectWithoutLabel = <SelectWrapper {...props}>
    </SelectWrapper>

    return props.label ? <LabelContainer {...props}>
        selectWithoutLabel
    </LabelContainer> : selectWithoutLabel
}


export default Select;
