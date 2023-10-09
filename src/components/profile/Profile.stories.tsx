import React from "react";
import Profile from "./Profile";

import '../../story.css'

export default {
    title: "页面/Profile",
    component: Profile
}

export const Default = () => {
    return <Profile status={"online"} />
}
