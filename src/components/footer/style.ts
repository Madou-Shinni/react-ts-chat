import styled from "styled-components"

interface StyleProps {
}

const FooterWrapper = styled.div<StyleProps>`
  padding: 12px 30px;
  width: 100%;
`
const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: -30px;
  & > * {
    margin-left: 16px;
  }
`

const PopoverContentWrapper = styled.div`
  display: flex;
  & > * {
    margin: 0 8px;
    font-size: 16px;
  }
`


export default FooterWrapper;
export {IconContainer,PopoverContentWrapper}
