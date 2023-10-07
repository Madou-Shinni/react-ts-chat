import React from "react";
import RadioWrapper, {Circle, RadioButton, RadioGroupWrapper} from "./style";
import LabelContainer from "../labelContainer/LabelContainer";

type Props = {
    children?: any
    name?: string
    label?: string
}

type RadioGroupProps = {
    children?: any
    label?: string
}

const Radio: React.FC<Props> = (props) => {
    return <RadioWrapper {...props}>
        {props.children} <RadioButton name={props.name} />
        <Circle />
    </RadioWrapper>
}

const RadioGroup: React.FC<RadioGroupProps> = (props) => {
    return <LabelContainer label={props.label}>
        <RadioGroupWrapper {...props}>
            {props.children}
        </RadioGroupWrapper>
    </LabelContainer>
}


export default Radio;
export {RadioGroup}