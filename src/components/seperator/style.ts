import styled from "styled-components"

interface StyleProps {
}

const SeperatorWrapper = styled.div<StyleProps>`
  width: 100%;  
  height: 1px;
  border-bottom: 1px solid ${({theme})=>theme.gray4};
`


export default SeperatorWrapper;
