import styled from "styled-components"
import Paragraph from "../paragraph/Paragraph";
import {card} from "../../utils/mixins";
import AvatarWrapper from "../avatar/style";

interface StyleProps {
}

const Name = styled(Paragraph).attrs({size: 'large'})`
  grid-area: name;
`

const Intro = styled(Paragraph).attrs({type: 'secondary'})`
  grid-area: intro;
`

const ContactCardWrapper = styled.div<StyleProps>`
  ${card()}
  display: grid;
  grid-template-areas: 
    'avatar name'
    'avatar intro'
  ;
  grid-template-columns: 62px auto;
  ${AvatarWrapper} {
    grid-area: avatar;
    align-self: center;
    justify-self: center;
  }
`


export default ContactCardWrapper;
export {Name,Intro}