import React from "react";
import ProfileWrapper from "./style";
import Avatar from "../avatar/Avatar";
import "styled-components/macro"
import Paragraph from "../paragraph/Paragraph";
import Emoji from "../emoji/Emoji";
import {SocialLinks} from "../icon/style";
import SocialIcon from "../icon/socialIcon/SocialIcon";

import face from "assets/images/OIP.jpg";
import {faWeight} from "@fortawesome/free-solid-svg-icons"

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
    </ProfileWrapper>
}


export default Profile;
