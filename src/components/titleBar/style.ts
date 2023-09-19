import styled from "styled-components"
import IconWrapper from "../icon/style";

interface StyleProps {
}

const TitleBarWrapper = styled.div<StyleProps>`
  display: grid;
  grid-template-columns: 62px 1fr 112px;
  padding: 30px;
  max-height: 110px;
  border-bottom: 1px solid ${({theme})=>theme.gray4};
`

const Title = styled.div`
  display: grid;
`

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  ${IconWrapper} {
    cursor: pointer;
  }
`


export default TitleBarWrapper;
export {Title,Actions}
