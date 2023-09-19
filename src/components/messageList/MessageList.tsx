import Filter, {FilterAction, FilterOption} from "components/filter/Filter";
import React from "react";
import MessageListWrapper, {ChatList} from "./style";
import Select from "../select/Select";
import Option from "../option/Option";
import Button from "../button/Button";
import Icon from "../icon/Icon";
import Input, {Search} from "../input/Input";
import MessageCard from "../messageCard/MessageCard";

import {ReactComponent as Plus} from "assets/icons/plus.svg"
import face1 from "assets/images/OIP.jpg"


type Props = {
}

const MessageList: React.FC<Props> = (props) => {
    return <MessageListWrapper {...props}>
        <Search />
        <ChatFilter />
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
    </MessageListWrapper>
}

const ChatFilter: React.FC<Props> = (props) => {
    return <Filter style={{padding: '20px 0'}} {...props}>
        <FilterOption label={'列表排序'}>
            <Select>
                <Option>最新消息优先</Option>
                <Option>在线好友优先</Option>
            </Select>
        </FilterOption>
        <FilterAction label={'创建会话'}>
            <Button>
                <Icon icon={Plus} width={12} height={12} />
            </Button>
        </FilterAction>
    </Filter>
}


export default MessageList;
