import React from "react";
import TextWrapper from "./style";

type Props = {
    type?: 'primary' | 'secondary' | 'danger'
    size?: 'large' | 'xlarge' | 'xxlarge' | 'small' | 'xsmall' | 'xxsmall' | 'normal' | 'medium'
    bold?: boolean
    children?: any
}

const Text: React.FC<Props> = ({type,size,children},props) => {
    return <TextWrapper type={type} size={size} {...props}>
        {children}
    </TextWrapper>
}


export default Text;
