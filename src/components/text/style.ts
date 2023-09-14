import styled, {css} from "styled-components"

interface StyleProps {
    type?: 'primary' | 'secondary' | 'danger'
    size?: 'large' | 'xlarge' | 'xxlarge' | 'small' | 'xsmall' | 'xxsmall' | 'normal' | 'medium'
    bold?: boolean
}

const typeVariants = {
    primary: css`
      color: ${({theme}) => theme.grayDark};
    `,
    secondary: css`
      color: ${({theme}) => theme.grayDark};
      opacity: 0.3;
    `,
    danger: css`
      color: ${({theme}) => theme.red};
    `
}

const sizeVariants = {
    normal: css`
      ${({theme}) => theme.normal};
    `,
    medium: css`
      ${({theme}) => theme.medium};
    `,
    large: css`
      ${({theme}) => theme.large};
    `,
    xlarge: css`
      ${({theme}) => theme.xlarge};
    `,
    xxlarge: css`
      ${({theme}) => theme.xxlarge};
    `,
    small: css`
      ${({theme}) => theme.small};
    `,
    xsmall: css`
      ${({theme}) => theme.xsmall};
    `,
    xxsmall: css`
      ${({theme}) => theme.xxsmall};
    `
}

const TextWrapper = styled.span<StyleProps>`
    font-size: ${({size}) => size && sizeVariants[size] || sizeVariants.normal};
    ${({type}) => type && typeVariants[type]};
    ${({bold}) => bold && `font-weight: 500px`};
`


export default TextWrapper;
