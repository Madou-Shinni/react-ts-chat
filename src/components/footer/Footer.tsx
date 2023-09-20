import React, {useState} from "react";
import FooterWrapper, {IconContainer, PopoverContentWrapper} from "./style";
import Input from "../input/Input";
import Icon from "../icon/Icon";
import Button from "../button/Button";
import Emoji from "../emoji/Emoji";

import {ReactComponent as ClipIcon} from "assets/icons/clip.svg";
import {ReactComponent as SmileIcon} from "assets/icons/smile.svg";
import {ReactComponent as MicrophoneIcon} from "assets/icons/microphone.svg";
import {ReactComponent as PlaneIcon} from "assets/icons/plane.svg";
import {ReactComponent as OptionsIcon} from "assets/icons/options.svg";
import Popover from "../popover/Popover";
import {useTheme} from "styled-components";


type Props = {
    children?: any
}

const Footer: React.FC<Props> = (props) => {
    const [emojiIconActive,setEmojiIconActive] = useState(false)
    const theme = useTheme();
    return <FooterWrapper {...props}>
        <Input prefix={<Icon icon={ClipIcon}/>}
               suffix={<IconContainer>
                   <Popover
                       content={<PopoverContent />}
                       offset={{x: '-25%'}}
                       onVisible={()=>{setEmojiIconActive(true)}}
                       onHide={()=>{setEmojiIconActive(false)}}
                   >
                       <Icon
                           icon={SmileIcon}
                           color={emojiIconActive ? undefined : theme.gray3}
                       />
                   </Popover>
                   <Icon icon={MicrophoneIcon}/>
                   <Button size={'52px'}>
                       <Icon
                            icon={PlaneIcon}
                            color={'white'}
                            style={{transform: 'translateX(-2px)'}}
                       />
                   </Button>
               </IconContainer>}
        />
    </FooterWrapper>
}

const PopoverContent: React.FC<Props> = (props) => {
    return <PopoverContentWrapper>
        <Emoji label={'smile'}>😀</Emoji>
        <Emoji label={'grinning'}>😆</Emoji>
        <Emoji label={'thumbup'}>👍</Emoji>
        <Emoji label={'indexfingerup'}>🥚</Emoji>
        <Emoji label={'ok'}>👌</Emoji>
        <Emoji label={'handsputtogether'}>🙏</Emoji>
        <Emoji label={'smilewithsunglasses'}>😎</Emoji>
        <Emoji label={'flexedbicep'}>💪</Emoji>
        <Icon icon={OptionsIcon} style={{marginLeft: '24px'}} />
    </PopoverContentWrapper>
}


export default Footer;
export {PopoverContent}
