import React from "react";
import ConversationsWrapper, {Conversations, MyChatBubble} from "./style";
import TitleBar from "../titleBar/TitleBar";
import ChatBubble from "../chatBubble/ChatBubble";
import VoiceMessage from "../voiceMessage/VoiceMessage";
import Emoji from "../emoji/Emoji";
import Footer from "../footer/Footer";

type Props = {
}

const Conversation: React.FC<Props> = (props) => {
    return <ConversationsWrapper {...props}>
        <TitleBar />
        <Conversations>
            <ChatBubble time={'昨天 下午14：26'}>Hi 你在忙什么呢？</ChatBubble>
            <MyChatBubble time={'昨天 下午14：26'}>一直在加班改bug 然后古德拜</MyChatBubble>
            <ChatBubble time={'昨天 下午14：26'}>
                <VoiceMessage time={'昨天 下午14：26'}/>
            </ChatBubble>
            <MyChatBubble time={'昨天 下午14：26'}>
                明天约一把
                <Emoji label={'smile'}>🐱‍🏍</Emoji>
            </MyChatBubble>
        </Conversations>
        <Footer />
    </ConversationsWrapper>
}


export default Conversation;
