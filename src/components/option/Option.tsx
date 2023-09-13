import React from "react";
import OptionWrapper from "./style";

type Props = {
    children?: any
}

const Option: React.FC<Props> = (props) => {
    return <OptionWrapper {...props}>
    </OptionWrapper>
}


export default Option;
