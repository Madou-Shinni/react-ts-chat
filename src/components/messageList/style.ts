import styled from "styled-components"
import MessageCardWrapper from "../messageCard/style";

interface StyleProps {
}

const MessageListWrapper = styled.div<StyleProps>`
`

const ChatList = styled.div`
  ${MessageCardWrapper} {
    margin-bottom: 20px;
  }
`


export default MessageListWrapper;
export {ChatList}