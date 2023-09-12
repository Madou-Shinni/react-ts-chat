import React from "react";
import HeadingWrapper from "./style";

type Props = {
    children?: any
    level?: 1 | 2 | 3 | 4 | 5 | 6
}

const Heading: React.FC<Props> = ({children, level},props) => {
    return <HeadingWrapper as={`h${level}`} {...props}>
        {children}
    </HeadingWrapper>
}


export default Heading;
