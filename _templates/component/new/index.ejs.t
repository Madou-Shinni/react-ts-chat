---
to: src/components/<%= h.changeCase.lcFirst(name) %>/<%= name %>.tsx
---
import React from "react";
import <%= name %>Wrapper from "./style";

type Props = {
}

const <%= name %>: React.FC<Props> = (props) => {
    return <<%= name %>Wrapper {...props}>
    </<%= name %>Wrapper>
}


export default <%= name %>;
