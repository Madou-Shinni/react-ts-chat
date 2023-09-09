---
to: src/components/<%= h.changeCase.lcFirst(name) %>/style.ts
---
import styled from "styled-components"

interface StyleProps {
}

const <%= name %>Wrapper = styled.div<StyleProps>`
`


export default <%= name %>Wrapper;
