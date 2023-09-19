import React, {CSSProperties} from "react";
import IconWrapper from "./style";
import {IconComponent} from "../../type/type";

type Props = {
    icon?: IconComponent,
    width?: string | number
    height?: string | number
    color?: string
    opacity?: number
    style?: CSSProperties
}

const Icon: React.FC<Props> = ({icon: IconComponent,width=24,height=24,color,opacity,...props}) => {
    return <IconWrapper color={color} opacity={opacity} {...props}>
        {IconComponent && <IconComponent width={width} height={height}/>}
    </IconWrapper>
}


export default Icon;
