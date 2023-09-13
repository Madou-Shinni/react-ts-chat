import styled from "styled-components"
import CaretDown from "assets/icons/caret_down.svg"

interface StyleProps {
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
  /* 隐藏下拉图标 */
  appearance: none;
  ::-ms-expand {
    display: none;
  }
`


export default SelectWrapper;
