import React from "react";

import avatar from "../../assets/images/OIP.jpg"
import AvatarWrapper, {AvatarClip, AvatarImage, StatusIcon} from "./style";

type Props = {
    src?: string | any
    size?: string
    status?: string
    statusIconSize?: string
}

const Avatar: React.FC<Props> = (props) => {
    return <AvatarWrapper>
        {props.status && <StatusIcon status={props.status} size={props.statusIconSize}/>}
        <AvatarClip size={props.size}>
            <AvatarImage src={props.src} alt=""/>
        </AvatarClip>
    </AvatarWrapper>
}


export default Avatar;