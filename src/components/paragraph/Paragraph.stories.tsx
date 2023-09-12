import React from "react";
import Paragraph from "./Paragraph";

import '../../story.css'

export default {
    title: "排版/Paragraph",
    component: Paragraph
}

export const Default = () => {
    return <>
        <Paragraph>这是一个段落</Paragraph>
        <Paragraph>这是一个段落</Paragraph>
    </>
}

export const Ellipsis = () => {
    return <Paragraph ellipsis>这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落</Paragraph>

}
