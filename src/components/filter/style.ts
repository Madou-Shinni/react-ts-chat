import styled from "styled-components"
import TextWrapper from "../text/style";

interface StyleProps {
}

/* 过滤选项 */
const FiltersWrapper = styled.div``

/* 包裹动作按钮和label */
const Actions = styled.div`
  justify-self: end;
  ${TextWrapper} {
    padding-right: 1rem;
  }
`

const FilterWrapper = styled.div<StyleProps>`
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
`


export default FilterWrapper;
export {FiltersWrapper,Actions}