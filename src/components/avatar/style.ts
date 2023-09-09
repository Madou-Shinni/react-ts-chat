import styled, {css} from "styled-components"

interface StyleProps {
    size?: string
    status?: string
}

/* 提取相同的属性css函数 */
const circleMixinFunc = (color: string,size: string | undefined) => css`
  content: "";
  display: block;
  position: absolute;
  width: ${size || '8px'};
  height: ${size || '8px'};
  border-radius: 50%;
  background-color: ${color};
`

const AvatarWrapper = styled.div`
  position: relative;
`

const StatusIcon = styled.div<StyleProps>`
  position: absolute;
  left: 2px;
  top: 4px;
  
  &::before {
    ${({ size }) => circleMixinFunc('white',size)}
    transform: scale(2);
  }
  
  &::after {
    ${({theme, status, size}) => {
        if (status === 'online') {
          return circleMixinFunc(theme.green, size)
        }else {
          return circleMixinFunc(theme.gray, size)
        }
    }}
  }
`

const AvatarClip = styled.div<StyleProps>`
  width: ${({size}) => size || '48px'};
  height: ${({size}) => size || '48px'};
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