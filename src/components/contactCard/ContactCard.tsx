import React from "react";
import ContactCardWrapper, {Intro, Name} from "./style";
import Avatar from "../avatar/Avatar";
import face from 'assets/images/OIP.jpg'

type Props = {
}

const ContactCard: React.FC<Props> = (props) => {
    return <ContactCardWrapper {...props}>
        <Avatar src={face} status={'online'} />
        <Name>李嘉图</Name>
        <Intro>我是小白</Intro>
    </ContactCardWrapper>
}


export default ContactCard;
