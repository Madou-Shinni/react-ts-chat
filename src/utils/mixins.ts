import {css} from "styled-components";
import theme from "../theme";

export const circle = (color: string,size: string | undefined) => css`
  width: ${size || '8px'};
  height: ${size || '8px'};
  border-radius: 50%;
  background-color: ${color};
`

export const activeBar = ({barWidth='8px', shadowWidth='20px'} = {}) => css`
  position: relative;
  &::before,&::after {
    content: '';
    display: block;
    position: absolute;
    height: 100%;
    left: 0;
  }

  /* 显示条 */
  &::before {
    width: ${barWidth};
    background: linear-gradient(
      180deg,
      rgba(142,197,242,1) 0%,
      rgba(79,157,222,1) 100%
    );
  }

  /* 阴影 */
  &::after {
    width: ${shadowWidth};
    background: linear-gradient(
      270deg,
      rgba(41,47,76,1) 0%,
      rgba(142,197,242,1) 100%
    );
    opacity: 0.6;
  }
`

export const card = (radius='6px', padding='20px 30px') => css`
  padding: ${padding};
  background: ${({theme})=>theme.background};
  box-shadow: 0px 18px 40px 0px rgba(0,0,0,0.04);
  border-radius: ${radius};
`