---
to: src/components/<%= h.changeCase.lcFirst(name) %>/<%= name %>.stories.tsx
---
import React from "react";
import <%= name %> from "./<%= name %>";

import '../../story.css'

export default {
    title: "<%= name %>",
    component: <%= name %>
}

export const Default = () => {
    return <<%= name %> />
}
