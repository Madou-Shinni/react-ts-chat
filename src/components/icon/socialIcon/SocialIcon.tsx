import React from "react"
import Button from "../../button/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconComponent} from "../../../type/type";

type Props = {
    icon?: IconComponent
    bgColor?: string
    href?: string
}

const SocialIcon: React.FC<Props> = (props) => {
    return <Button
        size={'30px'}
        backGroundColor={props.bgColor}
        onClick={()=> props.href && window.open(props.href,"_blank")}
        {...props}
    >
        <FontAwesomeIcon icon={props.icon} style={{fontSize: '16px'}} />
    </Button>
}

export default SocialIcon;