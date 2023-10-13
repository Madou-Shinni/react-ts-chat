import styled from "styled-components"
import TextWrapper from "../text/style";
import Avatar from "../avatar/Avatar";
import Text from "../text/Text";
import Icon from "../icon/Icon";

interface StyleProps {
}

const BlockedAvatar = styled(Avatar)`
  grid-area: avatar;
`

const BlockedName = styled(Text).attrs({size: 'xlarge'})`
  grid-area: name;
  margin-top: 20px;
`

const CloseIcon = styled(Icon)`
  grid-area: 2 / 3 / 5 / 4;
  z-index: 10;
  margin-top: 10px;
`

const ClosableAvatar = styled.div`
  display: grid;
  grid-template-areas:
    'avatar avatar avatar'
    'avatar avatar avatar'
    'avatar avatar avatar'
    'name name name'
  ;
  justify-content: center;
`

const BlockedListWrapper = styled.div<StyleProps>`
  padding: 2vh 4vw;
`

const SettingsMenu = styled.div<StyleProps>`
  height: 148px;
  display: grid;
  grid-template-columns: 10px 1fr;
  align-items: center;
  
  ${TextWrapper} {
    grid-column: span 1/-1;
    justify-self: center;
  }
`

const FriendList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: 24px;
  justify-items: center;
`


export default BlockedListWrapper;
export {SettingsMenu,BlockedAvatar,BlockedName,CloseIcon,ClosableAvatar,FriendList}
