import styled, {css} from "styled-components"
import CaretDown from "assets/icons/caret_down.svg"
import CaretDown2 from "assets/icons/caretDown2.svg"

interface StyleProps {
    type?: 'form'
}

const typeVariants = {
    form: css`
      background-image: url(${CaretDown2});
    `
}

const SelectWrapper = styled.select<StyleProps>`
  background-image: url(${CaretDown});
  background-repeat: no-repeat;
  background-position: right center;
  background-color: transparent;
  border: none;
  padding-right: 14px;
  font-size: ${({theme}) => theme.normal};
  color: ${({theme}) => theme.grayDark};
  
  ${({type}) => type && typeVariants[type]}
  
  /* 隐藏下拉图标 */
  appearance: none;
  ::-ms-expand {
    display: none;
  }
`


export default SelectWrapper;
