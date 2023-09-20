import React, {useState} from "react";
import PopoverWrapper, {Content, Target, Triangle} from "./style";

type Props = {
    children?: any
    content?: any
    offset?: {x?: string,y?: string}
    visible?: boolean
    onVisible?: any
    onHide?: any
}

const Popover: React.FC<Props> = ({onHide,onVisible,...props}) => {
    const [visible,setVisible] = useState(false)

    const handleClick = () => {
        if (visible) {
            setVisible(false)
            onHide && onHide()
        } else {
            setVisible(true)
            onVisible && onVisible()
        }
    }

    return <PopoverWrapper onClick={handleClick} {...props}>
        <Content visible={visible} offset={props.offset}>{props.content}</Content>
        <Triangle visible={visible} offset={props.offset} />
        <Target>{props.children}</Target>
    </PopoverWrapper>
}


export default Popover;
