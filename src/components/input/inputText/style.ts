import styled from "styled-components"

interface StyleProps {
}

const InputTextWrapper = styled.div<StyleProps>`
`

const InputUnderLine = styled.input`
  border: none;
  border-bottom: 1px solid ${({theme}) => theme.gray4};
  font-size: ${({theme}) => theme.normal};
  width: 100%;
  background: none;
  
  &::placeholder {
    color: ${({theme}) => theme.gray5};
  }
`

export default InputTextWrapper;
export {InputUnderLine}