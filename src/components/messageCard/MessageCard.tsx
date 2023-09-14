import React from "react";
import MessageCardWrapper, {
    MessageText,
    Message,
    Name,
    Status,
    Time,
    UnreadBadge
} from "./style";
import Avatar from "../avatar/Avatar";
import Icon from "../icon/Icon";
import theme from "../../theme";

import {ReactComponent as Replied} from "assets/icons/replied.svg"

type Props = {
    avatarSrc: string
    avatarStatus?: string
    statusText?: string
    name?: any
    time?: any
    message?: any
    unreadCount?: number
    active?: boolean
    children?: any
    replied?: boolean
}

const MessageCard: React.FC<Props> = ({children,...props}) => {
    return <MessageCardWrapper active={props.active} {...props}>
        <Avatar src={props.avatarSrc} status={props.avatarStatus}/>
        <Name>{props.name}</Name>
        <Status>{props.statusText}</Status>
        <Time>{props.time}</Time>
        <Message replied={props.replied}>
            {
                props.replied && (
                    <Icon
                        width={16}
                        height={14}
                        icon={Replied}
                        color={props.active ? theme.inactiveColorDark : theme.inactiveColor}
                        opacity={props.active ? 0.4 : 1}
                        style={{justifyContent: 'start'}}
                    />)
            }
            <MessageText>{props.message}</MessageText>
            <UnreadBadge count={props.unreadCount} />
        </Message>
    </MessageCardWrapper>
}


export default MessageCard;
