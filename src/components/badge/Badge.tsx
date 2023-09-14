import React from "react";
import BadgeWrapper, {Count} from "./style";

type Props = {
    children?: any
    show?: boolean
    count?: number
    showZero?: boolean
    variant?: string /* 变体 */
}

const Badge: React.FC<Props> = ({children,show,count,showZero},{props}) => {
    return <BadgeWrapper
        variant={children ? 'dot' : 'default'}
        show={show}
        count={count}
        showZero={showZero}
        {...props}
    >
        {children || <Count>{count}</Count>}
    </BadgeWrapper>
}


export default Badge;
