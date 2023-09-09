import {css} from "styled-components";

export const circle = (color: string,size: string | undefined) => css`
  width: ${size || '8px'};
  height: ${size || '8px'};
  border-radius: 50%;
  background-color: ${color};
`