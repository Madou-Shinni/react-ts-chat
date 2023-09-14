import React from "react";
import MessageCard from "./MessageCard";
import face1 from "assets/images/OIP.jpg"

import '../../story.css'

export default {
    title: "UI/MessageCard",
    component: MessageCard
}

export const Default = () => {
    return <MessageCard avatarSrc={face1}
        name={'李嘉图'}
        avatarStatus={'online'}
        statusText={'在线'}
        time={'3 小时之前'}
        message={'没有人能比得上我记忆中的你，现在的你也不行'}
        unreadCount={5}
    />
}

export const ActiveMessageCard = () => {
    return <MessageCard avatarSrc={face1}
                        name={'李嘉图'}
                        avatarStatus={'online'}
                        statusText={'在线'}
                        time={'3 小时之前'}
                        message={'没有人能比得上我记忆中的你，现在的你也不行'}
                        unreadCount={5}
                        active
    />
}

export const Replied = () => {
    return <MessageCard avatarSrc={face1}
                        name={'李嘉图'}
                        avatarStatus={'online'}
                        statusText={'在线'}
                        time={'3 小时之前'}
                        message={'没有人能比得上我记忆中的你，现在的你也不行'}
                        unreadCount={5}
                        active
                        replied
    />
}

export const RepliedInActive = () => {
    return <MessageCard avatarSrc={face1}
                        name={'李嘉图'}
                        avatarStatus={'online'}
                        statusText={'在线'}
                        time={'3 小时之前'}
                        message={'没有人能比得上我记忆中的你，现在的你也不行'}
                        unreadCount={5}
                        replied
    />
}
