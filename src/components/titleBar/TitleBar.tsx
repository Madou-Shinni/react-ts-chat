import React from "react";
import TitleBarWrapper, {Actions, Title} from "./style";
import Avatar from "../avatar/Avatar";
import Paragraph from "../paragraph/Paragraph";
import Text from "../text/Text";
import Icon from "../icon/Icon";

import face1 from "assets/images/OIP.jpg"
import {ReactComponent as Call} from "assets/icons/call.svg"
import {ReactComponent as Camera} from "assets/icons/camera.svg"
import {ReactComponent as Options} from "assets/icons/options.svg"

type Props = {
}

const TitleBar: React.FC<Props> = (props) => {
    return <TitleBarWrapper {...props}>
        <Avatar src={face1} status={'offline'}  />
        <Title>
            <Paragraph size={'large'}>李嘉图</Paragraph>
            <Paragraph type={'secondary'}>
                <Text>离线</Text>
                <Text>· 最后阅读： 3小时前</Text>
            </Paragraph>
        </Title>
        <Actions>
            <Icon opacity={0.3} icon={Call}/>
            <Icon opacity={0.3} icon={Camera}/>
            <Icon opacity={0.3} icon={Options}/>
        </Actions>
    </TitleBarWrapper>
}


export default TitleBar;
