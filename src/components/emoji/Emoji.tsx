import React from "react";
import EmojiWrapper from "./style";

type Props = {
    children?: any
    label?: string
}

const Emoji: React.FC<Props> = ({children,label,...props}) => {
    return <EmojiWrapper role={'img'} aria-label={label} {...props}>
        {children}
    </EmojiWrapper>
}


export default Emoji;
