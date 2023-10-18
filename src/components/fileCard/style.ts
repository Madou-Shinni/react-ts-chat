import styled from "styled-components"
import Icon from "../icon/Icon";
import Paragraph from "../paragraph/Paragraph";
import Popover from "../popover/Popover";
import Heading from "../heading/Heading";
import {card} from "../../utils/mixins";

interface StyleProps {
}

const FileCardWrapper = styled.div<StyleProps>`
  ${card()};
  display: grid;
  grid-template-areas: 
    'icon name options'
    'icon size time'
  ;
  grid-template-columns: 74px 1fr 1fr;
`

const FileIcon = styled(Icon).attrs({width: 60,height: 60})`
  grid-area: icon;
  justify-self: start;
`

const FileName = styled(Heading).attrs({level: 2})`
  grid-area: name;
  justify-self: center;
`

const FileSize = styled(Paragraph).attrs({type: 'secondary'})`
  grid-area: size;
`

const Options = styled(Popover)`
  grid-area: options;
  justify-self: end;
  align-self: center;
`

const Time = styled(Paragraph).attrs({type: 'secondary'})`
  grid-area: time;
  justify-self: end;
`

export default FileCardWrapper;
export {FileIcon,FileName,FileSize,Options,Time}
