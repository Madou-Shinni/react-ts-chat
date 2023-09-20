import React from "react";
import ProfileWrapper, {ContactSection} from "./style";
import Avatar from "../avatar/Avatar";
import "styled-components/macro"
import Paragraph from "../paragraph/Paragraph";
import Emoji from "../emoji/Emoji";
import {SocialLinks} from "../icon/style";
import SocialIcon from "../icon/socialIcon/SocialIcon";

import face from "assets/images/OIP.jpg";
import {faWeight} from "@fortawesome/free-solid-svg-icons"
import Seperator from "../seperator/Seperator";
import Text from "../text/Text";

type Props = {
}

const Profile: React.FC<Props> = (props) => {
    return <ProfileWrapper {...props}>
        <Avatar
            css={`margin: 26px 0`}
            src={face}
            size={'160px'}
            status={'online'}
            statusIconSize={'25px'}
        />
        <Paragraph
            size={"xlarge"}
            css={`
              margin-bottom: 12px;
            `}
        >
            李嘉图
        </Paragraph>
        <Paragraph
            size={"medium"}
            type={'secondary'}
            css={`
              margin-bottom: 18px;
            `}
        >
            杭州市
        </Paragraph>
        <Paragraph
            css={`
              margin-bottom: 26px;
            `}
        >
            帮助客户构建网站，并协助在社交网站上进行推广
            <Emoji label={'fire'}>😍</Emoji>
        </Paragraph>
        <SocialLinks>
            <SocialIcon icon={faWeight} bgColor={'#f06767'} href={'http://www.weibo.com'}/>
            <SocialIcon icon={faWeight} bgColor={'black'}/>
            <SocialIcon icon={faWeight} bgColor={'#2483c0'}/>
        </SocialLinks>
        <Seperator />
        <ContactSection>
            <Description label={'联系电话'}>+86 1888888888</Description>
            <Description label={'电子邮箱'}>ohcanikissu@gmail.com</Description>
            <Description label={'个人网站'}>https://Ricardo.com</Description>
        </ContactSection>
    </ProfileWrapper>
}

const Description: React.FC<{label?: string,children?: any}> = (props) => {
    return <Paragraph>
        <Text type={'secondary'}>{props.label}: </Text>
        <Text>{props.children}</Text>
    </Paragraph>
}


export default Profile;
export {Description}
