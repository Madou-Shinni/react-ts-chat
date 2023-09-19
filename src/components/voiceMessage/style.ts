import styled, {css} from "styled-components"
import ButtonWrapper from "../button/style";
import IconWrapper from "../icon/style";
import TextWrapper from "../text/style";

interface StyleProps {
    type?: 'mine'
}

const typeVariant = {
    mine: css`
      ${ButtonWrapper} {
        background-color: white;
        
        ${IconWrapper} path {
          fill: ${({theme}) => theme.primaryColor};
        }
      }

      & > ${IconWrapper} path {
        fill: white;
      }

      & > ${TextWrapper} {
        color: white;
      }
    `
}

const VoiceMessageWrapper = styled.div<StyleProps>`
  display: flex;
  align-items: center;
  
  & > *:first-child {
    flex-shrink: 0;
  }

  & > *:not(:first-child) {
    margin-left: 16px;
  }
  
  ${({type}) => type && typeVariant[type]}
`


export default VoiceMessageWrapper;
