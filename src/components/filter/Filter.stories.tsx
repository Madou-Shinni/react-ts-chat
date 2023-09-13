import React from "react";
import Filter, {FilterAction, FilterOption} from "./Filter";
import {ReactComponent as Plus} from "assets/icons/plus.svg"

import '../../story.css'
import Select from "../select/Select";
import Option from "../option/Option";
import Button from "../button/Button";
import Icon from "../icon/Icon";

export default {
    title: "UI/Filter",
    component: Filter
}

export const Default = () => {
    return <Filter>
        <FilterOption label={'列表选项'}>
            <Select>
                <Option>最新消息优先</Option>
                <Option>在线好友优先</Option>
            </Select>
        </FilterOption>

        <FilterAction label={'创建会话'}>
            <Button>
                <Icon icon={Plus} width={24} height={24}/>
            </Button>
        </FilterAction>
    </Filter>
}
