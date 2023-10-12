import styled from "styled-components"

interface StyleProps {
}

const SettingsWrapper = styled.div<StyleProps>`
  padding: 72px;  
`

const SettingsItemWrapper = styled.div<StyleProps>`
`

const SettingsItemControl = styled.div<StyleProps>`
  display: flex;
  justify-content: space-between;
`

const SettingsGroupWrapper = styled.div<StyleProps>`
`

export default SettingsWrapper;
export {SettingsItemWrapper,SettingsItemControl,SettingsGroupWrapper}