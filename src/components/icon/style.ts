import styled from "styled-components"

interface StyleProps {
    opacity?: number
    color?: string
}

const IconWrapper = styled.div<StyleProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  
  svg,svg * {
    ${({color}) => (color ? `fill: ${color}` : '')}
    ${({opacity}) => (opacity ? `opacity: ${opacity}` : '')}
  }
`


export default IconWrapper;
