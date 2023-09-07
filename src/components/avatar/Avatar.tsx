import React from "react";

import avatar from "../../assets/images/OIP.jpg"
import AvatarWrapper, {AvatarClip, AvatarImage, StatusIcon} from "./style";

type Props = {}

const Avatar: React.FC<Props> = (props) => {
    return <AvatarWrapper>
        <StatusIcon/>
        <AvatarClip>
            <AvatarImage src={avatar} alt=""/>
        </AvatarClip>
    </AvatarWrapper>
}


export default Avatar;