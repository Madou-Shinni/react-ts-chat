import React from "react";
import Popover from "./Popover";

import '../../story.css'
import Button from "../button/Button";

export default {
    title: "UI/Popover",
    component: Popover
}

export const Default = () => {
    return <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: '50vh'
    }}>
        <Popover content={'hello'}>
            <Button shape={"rect"}>点我</Button>
        </Popover>
    </div>
}

export const WithOffset = () => {
    return <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: '50vh'
    }}>
        <Popover offset={{x: '-25%'}} content={'hello'}>
            <Button shape={"rect"}>点我</Button>
        </Popover>
    </div>
}
