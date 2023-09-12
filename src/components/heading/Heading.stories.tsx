import React from "react";
import Heading from "./Heading";

import '../../story.css'

export default {
    title: "排版/Heading",
    component: Heading
}

export const H1 = () => {
    return <Heading level={1}>标题</Heading>
}

export const H2 = () => {
    return <Heading level={2}>标题</Heading>
}

export const H3 = () => {
    return <Heading level={3}>标题</Heading>
}

export const H4 = () => {
    return <Heading level={4}>标题</Heading>
}

export const H5 = () => {
    return <Heading level={5}>标题</Heading>
}

export const H6 = () => {
    return <Heading level={6}>标题</Heading>
}