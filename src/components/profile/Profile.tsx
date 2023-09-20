import React from "react";
import ProfileWrapper from "./style";
import Avatar from "../avatar/Avatar";

import face from "assets/images/OIP.jpg";

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
    </ProfileWrapper>
}


export default Profile;
