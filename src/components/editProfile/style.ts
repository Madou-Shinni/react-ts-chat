import styled from "styled-components"
import Text from "../text/Text";

interface StyleProps {
}

const GroupTitle = styled(Text).attrs({size: 'large'})`
  align-self: end;
`

const EditProfileWrapper = styled.div<StyleProps>`
  display: grid;  
  grid-template-columns: 1fr;
  row-gap: 20px;
  padding: 30px;
  max-height: 100vh;
  overflow-y: auto;
`

const GenderAndRegion = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
`

const SelectGroup = styled.div`
  > * {
    margin: 0 4px;
  }
  
  margin: 0 -4px;
`

const IconInputWrapper = styled.div`
  display: grid;
  grid-template-columns: 38px 1fr;
  align-items: end;
`


export default EditProfileWrapper;
export {GroupTitle,GenderAndRegion,SelectGroup,IconInputWrapper}