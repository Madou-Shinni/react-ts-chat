import React from "react";
import ButtonWrapper from "./style";

type Props = {
    children?: any
    type?: 'primary'
    shape?: 'circle' | 'rect'
    size?: string
    backGroundColor?: string
    onClick?: any
}

const Button: React.FC<Props> = ({children,type='primary',shape='circle',size,...props}) => {
    return <ButtonWrapper type={type} shape={shape} size={size} {...props}>
        {children}
    </ButtonWrapper>
}


export default Button;
