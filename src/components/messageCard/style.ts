import styled, {css} from "styled-components"
import Badge from "../badge/Badge";
import {activeBar, card} from "../../utils/mixins";
import AvatarWrapper from "../avatar/style";
import TextWrapper from "../text/style";
import ParagraphWrapper from "../paragraph/style";

interface StyleProps {
  active?: boolean
  replied?: boolean
}

const Name = styled(TextWrapper).attrs({size: 'large'})`
  grid-area: name;
`

const Time = styled(TextWrapper).attrs({size: 'medium', type: 'secondary'})`
  grid-area: time;
  justify-self: end;
`

const Status = styled(TextWrapper).attrs({type: 'secondary'})`
  grid-area: status;
`

const Message = styled.div<StyleProps>`
  grid-area: message;
  display: grid;
  grid-template-columns: 1fr 30px;
  align-items: center;
  
  ${({replied}) => replied && css`
    grid-template-columns: 24px 1fr 30px;
  `}
`

const MessageText = styled(ParagraphWrapper).attrs({ellipsis: true})`

`

const UnreadBadge = styled(Badge)`
  justify-self: end;
`

const MessageCardWrapper = styled.div<StyleProps>`
  ${card()};
  display: grid;
  grid-template-areas: 
  "avatar name time"
  "avatar status status"
  "message message message"
  ;
  grid-template-columns: 64px 1fr 1fr;
  row-gap: 16px;
  background: ${({theme}) => theme.background};
  
  &:hover {
    box-shadow: 0px 20px 50px rgba(0,0,0,0.1);
  }
  
  ${AvatarWrapper} {
    grid-area: avatar;
  }
  
  ${({active})=> active && css`
    background: ${({theme}) => theme.darkPurple};
    ${Name},${Status},${Time},${MessageText} {
      color: white;
    }
    ${Status},${Time} {
      opacity: 0.4;
    }
    ${activeBar({barWidth: '4px', shadowWidth: '14px'})}
    
    overflow: hidden;
  `}
`


export default MessageCardWrapper;
export {Name,Time,Status,Message,MessageText,UnreadBadge}
