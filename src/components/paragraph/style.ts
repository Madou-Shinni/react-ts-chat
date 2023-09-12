import TextWrapper from "components/text/style";
import styled, {css} from "styled-components"

interface StyleProps {
    ellipsis?: boolean
}

const ParagraphWrapper = styled(TextWrapper)<StyleProps>`
    ${({ellipsis}) => 
            ellipsis && 
            css`
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
            `}
`


export default ParagraphWrapper;
