import styled, {css} from "styled-components"

/* 提取相同的属性css函数 */
const circleMixinFunc = (color: string) => css`
  content: "";
  display: block;
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${color};
`

const AvatarWrapper = styled.div`
  position: relative;
`

const StatusIcon = styled.div`
  position: absolute;
  left: 2px;
  top: 4px;
  
  &::before {
    ${circleMixinFunc('white')}
    
    transform: scale(2);
  }
  
  &::after {
    ${({theme}) => circleMixinFunc(theme.green)}
  }
`

const AvatarClip = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
`

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`

export default AvatarWrapper
export { StatusIcon, AvatarClip, AvatarImage}