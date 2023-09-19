import styled from "styled-components"

interface StyleProps {
    offset?: {x?: string,y?: string}
    visible?: boolean
}

const Content = styled.div<StyleProps>`
  background: ${({theme})=>theme.background};
  border-radius: 21px;
  box-shadow: 0px 8px 40px rgba(0,0,0,0.12);
  padding: 12px 30px;
  position: absolute;
  
  bottom: calc(100% + 12px);
  
  ${({offset})=> offset && `transform: translate(${offset.x || 0}, ${offset.y || 0})`};
  ${({visible})=> !visible && `display: none`};
`

const Triangle = styled.div<StyleProps>`
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 6px 6px 0 6px;
  border-color: ${({theme}) => theme.background} transparent transparent transparent;
  left: calc(50% - 6px);
  bottom: calc(100% + 12px - 5px);

  ${({offset})=> offset && `transform: translateY(${offset.y || 0})`};
  ${({visible})=> !visible && `display: none`};
`

const Target = styled.div``

const PopoverWrapper = styled.div<StyleProps>`
  display: flex;
  justify-content: center;
  position: relative;
`


export default PopoverWrapper;
export {Content,Triangle,Target}
