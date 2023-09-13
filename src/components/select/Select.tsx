import React from "react";
import SelectWrapper from "./style";

type Props = {
    children?: any
}

const Select: React.FC<Props> = (props) => {
    return <SelectWrapper {...props}>
    </SelectWrapper>
}


export default Select;
