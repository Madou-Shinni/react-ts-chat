import React from "react";
import ProfileWrapper from "./style";
import Avatar from "../avatar/Avatar";
import "styled-components/macro"
import Paragraph from "../paragraph/Paragraph";

import face from "assets/images/OIP.jpg";
import Emoji from "../emoji/Emoji";

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
    </ProfileWrapper>
}


export default Profile;
