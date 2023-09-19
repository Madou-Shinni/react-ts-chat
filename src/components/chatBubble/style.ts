import styled, {css} from "styled-components"
import Paragraph from "../paragraph/Paragraph";
import Icon from "../icon/Icon";
import Text from "../text/Text";

interface StyleProps {
    type?: 'mine'
}

const Time = styled(Paragraph).attrs({type: "secondary", size: "small"})`
  margin: 6px 6px 6px 24px;
  word-spacing: 1rem;
`

const BubbleTip = styled(Icon)`
  position: absolute;
  bottom: -15%;
  left: 0;
  z-index: 5;
`

const Bubble = styled.div`
  padding: 15px 22px;
  box-shadow: 0px 8px 24px rgba(0,0,0,0.1);
  border-radius: 100px;
  position: relative;
  z-index: 10;
`

const MessageText = styled(Text)``

const typeVariant = {
    mine: css`
      ${Bubble} {
        background-color: ${({theme})=>theme.primaryColor};
      }

      ${BubbleTip} {
        transform: rotateY(180deg);
        left: unset;
        right: 0;
        
        path {
          fill: ${({theme})=>theme.primaryColor};
        }
      }
      
      ${Time} {
        text-align: right;
        margin-left: 0;
        margin-right: 24px;
      }
      
      ${MessageText} {
        color: white;
      }
    `
}

const ChatBubbleWrapper = styled.div<StyleProps>`
  display: flex;
  flex-direction: column;
  
  ${({type})=>type && typeVariant[type]}
`

export default ChatBubbleWrapper;
export {Time,Bubble,BubbleTip,MessageText}