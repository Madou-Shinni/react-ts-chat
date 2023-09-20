import React from "react";
import InputTextWrapper, {InputUnderLine} from "./style";
import LabelContainer from "../../labelContainer/LabelContainer";

type Props = {
    label?: string
    placeholder?: string
}

const InputText: React.FC<Props> = ({label,placeholder,...props}) => {
    const input = <InputUnderLine type={"text"} placeholder={placeholder} />
    return <InputTextWrapper {...props}>
        {label ? <LabelContainer label={label}>{input}</LabelContainer> : input}
    </InputTextWrapper>
}


export default InputText;
