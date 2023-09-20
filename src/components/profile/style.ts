import styled from "styled-components"

interface StyleProps {
}

const ProfileWrapper = styled.div<StyleProps>`
  display: grid;  
  align-items: start;
  justify-content: center;
  justify-items: center;
  position: relative;
  padding: 30px;
  height: 100vh;
  margin-top: 2vh;
  overflow-y: auto;
`


export default ProfileWrapper;
