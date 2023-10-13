import styled from "styled-components"

interface StyleProps {
}

const ContactListWrapper = styled.div<StyleProps>`
`

const Contacts = styled.div`
  margin-top: -8px;
  & > * {
    margin: 8px 0;
  }
`


export default ContactListWrapper;
export {Contacts}