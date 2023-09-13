import styled, {css} from "styled-components"

interface StyleProps {
    type: 'primary'
    shape: 'circle' | 'rect'
    size?: string
    backGroundColor?: string
}

const shapeVariants = {
    circle: css<StyleProps>`
      width: ${({size})=> size};
      height: ${({size})=> size};
      border-radius: 50%;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    `,
    rect: css<StyleProps>`
      padding: 12px 18px;
      border-radius: 6px;
    `,
}

const typeVariants = {
    primary: css`
      background-color: ${({theme})=> theme.primaryColor};
      color: white;
    `
}

const ButtonWrapper = styled.button<StyleProps>`
  border: none;
  outline: none;
  cursor: pointer;
  box-shadow: 0px 6px 12px rgba(0,0,0,0.1);
  ${({shape}) => shapeVariants[shape]}
  ${({type}) => typeVariants[type]}
  ${({backGroundColor}) => `background-color: ${backGroundColor}`}
`


export default ButtonWrapper;
