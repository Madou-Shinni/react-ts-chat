import styled from "styled-components"

interface StyleProps {
}

const LabelContainerWrapper = styled.label<StyleProps>`
  display: flex;
  flex-direction: column;
  font-size: ${({theme}) => theme.normal};
`


export default LabelContainerWrapper;
