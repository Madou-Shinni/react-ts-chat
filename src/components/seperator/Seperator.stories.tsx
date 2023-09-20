import React from "react";
import Seperator from "./Seperator";

import '../../story.css'

export default {
    title: "UI/Seperator",
    component: Seperator
}

export const Default = () => {
    // @ts-ignore
    return <Seperator style={{padding: '24px'}} />
}
