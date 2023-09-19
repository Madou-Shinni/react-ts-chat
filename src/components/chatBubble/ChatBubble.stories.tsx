import React from "react";
import ChatBubble from "./ChatBubble";

import '../../story.css'
import VoiceMessage from "../voiceMessage/VoiceMessage";
import Emoji from "../emoji/Emoji";

export default {
    title: "UI/ChatBubble",
    component: ChatBubble,
    decorators: [(storyFn: any) => <div style={{padding: '24px'}}>{storyFn()}</div>]
}

export const FromOthers = () => {
    return <ChatBubble time={'昨天 下午14：26'}>没有人能比得上我记忆中的你，现在的你也不行</ChatBubble>
}

export const Mine = () => {
    return <ChatBubble type={"mine"} time={'昨天 下午14：26'}>没有人能比得上我记忆中的你，现在的你也不行<Emoji label={'smile'}>😊</Emoji></ChatBubble>
}

export const VoiceMessageType = () => {
    return <ChatBubble time={'昨天 下午14：26'}>
        <VoiceMessage time={'01:21'}/>
    </ChatBubble>
}

export const VoiceMessageMine = () => {
    return <ChatBubble type={"mine"} time={'昨天 下午14：26'}>
        <VoiceMessage type={"mine"} time={'01:21'}/>
    </ChatBubble>
}
