import React from "react";
import SwitchWrapper, {CheckBox, Slider} from "./style";

type Props = {
}

const Switch: React.FC<Props> = (props) => {
    return <SwitchWrapper {...props}>
        <CheckBox />
        <Slider />
    </SwitchWrapper>
}


export default Switch;
