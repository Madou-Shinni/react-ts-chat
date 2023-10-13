import React from "react";
import FilterListWrapper from "./style";
import {Search} from "../input/Input";
import Filter, {FilterAction, FilterOption} from "../filter/Filter";
import Select from "../select/Select";
import Option from "../option/Option";
import Button from "../button/Button";
import Icon from "../icon/Icon";

import {ReactComponent as Plus} from "assets/icons/plus.svg";

type Props = {
    children?: any
    options?: string[]
    filterLabel?: string
    actionLabel?: string
}

const FilterList: React.FC<Props> = ({children,options,filterLabel = '排序列表',actionLabel,...props}) => {
    return <FilterListWrapper {...props}>
        <Search />
        <Filter style={{padding: '20px 0'}}>
            {options && <FilterOption label={filterLabel}>
                <Select>
                    {options.map((option,index)=>{
                        return <Option key={index}>{option}</Option>
                    })}
                </Select>
            </FilterOption>}
            {actionLabel && <FilterAction label={actionLabel}>
                <Button>
                    <Icon icon={Plus} width={12} height={12} />
                </Button>
            </FilterAction>}
        </Filter>
        {children}
    </FilterListWrapper>
}


export default FilterList;
