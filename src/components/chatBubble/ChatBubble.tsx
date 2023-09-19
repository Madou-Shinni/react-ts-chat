import React from "react";
import ChatBubbleWrapper, {Bubble, BubbleTip, MessageText, Time} from "./style";

import {ReactComponent as BubbleTipIcon} from "assets/icons/bubbleTip.svg"

type Props = {
    children?: any
    type?: 'mine'
    time?: string
}

const ChatBubble: React.FC<Props> = ({children,type,time,...props}) => {
    return <ChatBubbleWrapper type={type} {...props}>
        <Bubble>
            <BubbleTip icon={BubbleTipIcon} width={40} height={28} color={'white'} />
            <MessageText>{children}</MessageText>
        </Bubble>
        <Time>{time}</Time>
    </ChatBubbleWrapper>
}


export default ChatBubble;
