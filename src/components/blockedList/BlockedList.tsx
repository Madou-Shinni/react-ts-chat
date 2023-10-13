import React from "react";
import BlockedListWrapper, {
    BlockedAvatar,
    BlockedName,
    ClosableAvatar,
    CloseIcon,
    FriendList,
    SettingsMenu
} from "./style";
import Icon from "../icon/Icon";
import {ReactComponent as ArrowMenuLeft} from 'assets/icons/arrowMenuLeft.svg'
import Text from "../text/Text";
import face from 'assets/images/OIP.jpg'
import {ReactComponent as closeCircle} from 'assets/icons/closeCircle.svg'
import "styled-components/macro"

type Props = {
}

const BlockedList: React.FC<Props> = (props) => {
    return <BlockedListWrapper {...props}>
        <SettingsMenu>
            <Icon
                icon={ArrowMenuLeft}
                css={`
                  cursor: pointer;
`               }
            />
            <Text size={'large'}>已屏蔽的好友</Text>
        </SettingsMenu>
        <FriendList>
            {new Array(8).fill(0).map((_,index)=>{
                return <ClosableAvatar key={index}>
                    <BlockedAvatar size={'105px'} src={face} />
                    <CloseIcon width={46} height={51} icon={closeCircle} />
                    <BlockedName>李嘉图</BlockedName>
                </ClosableAvatar>
            })}
        </FriendList>
    </BlockedListWrapper>
}


export default BlockedList;
