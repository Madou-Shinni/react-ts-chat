import React from "react";
import Text from "./Text";

import '../../story.css'

export default {
    title: "排版/Text",
    component: Text
}

export const Default = () => {
    return <Text >默认</Text>
}

export const Secondary = () => {
    return <Text type={"secondary"} >次要文本</Text>
}

export const Medium = () => {
    return <Text size={"medium"}>medium 大小文本</Text>
}

export const LargeAndBold = () => {
    return <Text bold size={"large"}>large 大小文本，加粗</Text>
}
