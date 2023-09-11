import React from "react";
import InputWrapper, {InputContainer, Prefix, Suffix} from "./style";
import Icon from "../icon/Icon";

import {ReactComponent as SearchIcon} from "assets/icons/search.svg"
import {useTheme} from "styled-components";

type Props = {
    placeholder?: string
    prefix?: any
    suffix?: any
}

const Input: React.FC<Props> = ({placeholder='请输入内容...',prefix,suffix},props) => {
    return <InputContainer {...props}>
        {prefix && <Prefix>{prefix}</Prefix>}
        <InputWrapper placeholder={placeholder} {...props}>
        </InputWrapper>
        {suffix && <Suffix>{suffix}</Suffix>}
    </InputContainer>
}

const Search: React.FC<Props> = ({placeholder='请输入内容...'},props) => {
    const theme = useTheme()
    return <Input placeholder={placeholder}
                  prefix={<Icon icon={SearchIcon}/>}
                  color={theme.gray3}
                  width={18}
                  height={18}
                  {... props}>
    </Input>
}

export default Input;
export {Search}