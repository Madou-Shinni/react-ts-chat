import React from "react";
import ParagraphWrapper from "./style";

type Props = {
    children?: any
    as?: string
    ellipsis?: boolean
}

const Paragraph: React.FC<Props> = ({children,as='p',ellipsis},props) => {
    return <ParagraphWrapper as={as} ellipsis={ellipsis} {...props}>
        {children}
    </ParagraphWrapper>
}


export default Paragraph;
