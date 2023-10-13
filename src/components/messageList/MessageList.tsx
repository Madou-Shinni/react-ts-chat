import React from "react";
import MessageListWrapper, {ChatList} from "./style";
import MessageCard from "../messageCard/MessageCard";
import face1 from "assets/images/OIP.jpg"
import FilterList from "../filterList/FilterList";


type Props = {
}

const MessageList: React.FC<Props> = (props) => {
    return <MessageListWrapper {...props}>
        <FilterList
            options={['最新消息优先','在线好友优先']}
            actionLabel={'创建会话'}
        >
        <ChatList>
            {[1,2,3,4,5,6].map((_,index)=>(
                <MessageCard
                    key={index}
                    avatarSrc={face1}
                    active={index === 3}
                    replied={index % 3 === 0}
                    name={'李嘉图'}
                    avatarStatus={'online'}
                    statusText={'在线'}
                    time={'3 小时之前'}
                    message={'没有人能比得上我记忆中的你，现在的你也不行'}
                    unreadCount={2}
                />
            ))}
            </ChatList>
        </FilterList>
    </MessageListWrapper>
}


export default MessageList;
