import React from "react";
import ButtonWrapper from "./style";

type Props = {
    children?: any
    type?: 'primary'
    shape?: 'circle' | 'rect'
    size?: string
    backGroundColor?: string
}

const Button: React.FC<Props> = ({children,type='primary',shape='circle'},props) => {
    return <ButtonWrapper type={type} shape={shape} {...props}>
        {children}
    </ButtonWrapper>
}


export default Button;
