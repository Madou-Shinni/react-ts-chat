import React from "react";
import IconWrapper from "./style";

// svg类型组件
type IconComponent = React.FC<React.SVGProps<SVGSVGElement>>

type Props = {
    icon?: IconComponent
    width?: string | number
    height?: string | number
    color?: string
    opacity?: number
}

const Icon: React.FC<Props> = ({icon: IconComponent,width=24,height=24,color,opacity}) => {
    return <IconWrapper color={color} opacity={opacity}>
        {IconComponent && <IconComponent width={width} height={height} />}
    </IconWrapper>
}


export default Icon;