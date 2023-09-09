import React from "react";
import BadgeWrapper, {Count} from "./style";

type Props = {
    children?: React.ReactNode
    show?: boolean
    count?: number
    showZero?: boolean
    variant?: string /* 变体 */
}

const Badge: React.FC<Props> = ({children,show,count,showZero}) => {
    return <BadgeWrapper
        variant={children ? 'dot' : 'default'}
        show={show}
        count={count}
        showZero={showZero}
    >
        {children || <Count>{count}</Count>}
    </BadgeWrapper>
}


export default Badge;
