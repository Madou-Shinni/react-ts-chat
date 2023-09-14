import styled, {css} from "styled-components"
import React from "react";
import { circle } from "utils/mixins";
import theme from "../../theme";

interface StyleProps {
    show?: boolean
    count?: number
    showZero?: boolean
    variant?: string /* 变体 */
}

const variants: any = {
    dot: css<StyleProps>`
      position: relative;
      padding: 5px;
      &::after {
        display: ${({show}) => (show ? 'block' : 'none')};
        content: '';
        ${({theme}) => circle(theme.red,'6px')};
        position: absolute;
        right: 0;
        top: 0;
      }
    `,

    default: css<StyleProps>`
      ${({theme}) => circle(theme.red,'26px')};
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0px 18px 40px 0px rgba(0,0,0,0.04),
      0px 6px 12px 0px rgba(0,0,0,0.08);
      ${({showZero,count}) => (!showZero && count===0 && `visibility: hidden`)}} /* visibility 隐藏时可以占据空间保持布局 */
    `
}

const Count = styled.div`
  font-size: ${({theme}) => theme.normal};
  color: white;
`

const BadgeWrapper = styled.div<StyleProps>`
  display: inline-block;
  ${({variant}) => variant && variants[variant] || variants['default']}
`

export {Count}
export default BadgeWrapper;
