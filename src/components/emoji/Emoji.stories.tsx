import React from "react";
import Emoji from "./Emoji";

import '../../story.css'

export default {
    title: "UI/Emoji",
    component: Emoji
}

export const Default = () => {
    return <div>
        <Emoji label={'smile'}>😊</Emoji>
        <Emoji label={'todo'}>✔</Emoji>
        <Emoji label={'clock'}>⏰</Emoji>
    </div>
}
