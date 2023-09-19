import React from "react";
import VoiceMessageWrapper from "./style";
import Button from "../button/Button";
import Icon from "../icon/Icon";

import {ReactComponent as Play} from "assets/icons/play.svg";
import {ReactComponent as Wave} from "assets/icons/wave.svg";
import {useTheme} from "styled-components";
import Text from "../text/Text";

type Props = {
    children?: any
    time?: string
    type?: 'mine'
}

const VoiceMessage: React.FC<Props> = ({children,type,time,...props}) => {
    const theme = useTheme()
    return <VoiceMessageWrapper type={type} {...props}>
        <Button size={'40px'}>
            <Icon
                icon={Play}
                color={'white'}
                width={14}
                height={16}
                style={{transform: 'translateX(1px)'}}
            />
        </Button>
        <Icon icon={Wave} width={'100%'} height={'100%'} color={theme.primaryColor}/>
        <Text bold>{time}</Text>
    </VoiceMessageWrapper>
}


export default VoiceMessage;
