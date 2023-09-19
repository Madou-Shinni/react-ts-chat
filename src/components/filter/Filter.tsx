import React, {CSSProperties} from "react";
import FilterWrapper,{FiltersWrapper,Actions} from "./style";
import Text from "../text/Text";

type Props = {
    children?: any
    label?: string
    style?: CSSProperties
}

const Filter: React.FC<Props> = (props) => {
    return <FilterWrapper {...props}>
    </FilterWrapper>
}

const FilterOption: React.FC<Props> = ({label,children,...props}) => {
    return <FiltersWrapper {...props}>
        <Text type={"secondary"}>{label}: </Text>
        {children}
    </FiltersWrapper>
}

const FilterAction: React.FC<Props> = ({label,children,...props}) => {
    return <Actions {...props}>
        <Text type={"secondary"}>{label}: </Text>
        {children}
    </Actions>
}


export default Filter;
export {FilterOption,FilterAction}
