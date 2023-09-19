import React from "react";
import ChatBubble from "./ChatBubble";

import '../../story.css'

export default {
    title: "UI/ChatBubble",
    component: ChatBubble,
    decorators: [(storyFn: any) => <div style={{padding: '24px'}}>{storyFn()}</div>]
}

export const FromOthers = () => {
    return <ChatBubble time={'昨天 下午14：26'}>没有人能比得上我记忆中的你，现在的你也不行</ChatBubble>
}

export const Mine = () => {
    return <ChatBubble type={"mine"} time={'昨天 下午14：26'}>没有人能比得上我记忆中的你，现在的你也不行</ChatBubble>
}
