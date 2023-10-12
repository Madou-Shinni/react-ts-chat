import React from "react";
import Settings, {SettingsItem} from "./Settings";

import '../../story.css'

export default {
    title: "页面/Settings",
    component: Settings
}

export const Default = () => {
    return <Settings />
}

export const WithoutDescription = () => {
    return <SettingsItem label={'这是一个没有描述星系的组件'} />
}

export const WithDescription = () => {
    return <SettingsItem label={'这是一个有描述星系的组件'} description={'这是设置项描述'} />
}

export const WithMenu = () => {
    return <SettingsItem label={'这是一个有子菜单的组件'} type={'menu'} />
}
