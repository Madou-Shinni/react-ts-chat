import React from "react";
import VoiceMessage from "./VoiceMessage";

import '../../story.css'

export default {
    title: "UI/VoiceMessage",
    component: VoiceMessage
}

export const Default = () => {
    return <VoiceMessage time={'01:21'}/>
}

export const VoiceMessageType = () => {
    return <VoiceMessage time={'01:21'}/>
}

export const VoiceMessageMine = () => {
    return <VoiceMessage type={"mine"} time={'01:21'}/>
}