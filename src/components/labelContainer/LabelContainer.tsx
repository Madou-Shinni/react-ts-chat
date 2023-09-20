import React from "react";
import LabelContainerWrapper from "./style";
import Text from "../text/Text";

type Props = {
    children?: any
    label?: string
}

const LabelContainer: React.FC<Props> = ({label,...props}) => {
    return <LabelContainerWrapper {...props}>
        {label && <Text style={{marginBottom: '8px'}}>{label}: </Text>}
        {props.children}
    </LabelContainerWrapper>
}


export default LabelContainer;
