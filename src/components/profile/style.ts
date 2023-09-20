import styled from "styled-components"
import arrowRight from "assets/icons/arrowRight.svg"

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

const ContactSection = styled.section`
  display: grid;
  row-gap: 18px;
`

const AlbumSection = styled.section`
  
`

const AlbumTitle = styled.div`
  justify-self: stretch;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  & > a {
    position: relative;
    text-decoration: none;
    font-size: ${({theme}) => theme.normal};
    color: ${({theme}) => theme.primaryColor};
    
    &::after {
      position: absolute;
      display: inline-block;
      content: url(${arrowRight});
      margin-left: 2px;
    }
  }
`

const Album = styled.div`
  margin-top: 14px;
  justify-self: start;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`

const Photo = styled.img`
  width: 76px;
  height: 76px;
  object-fit: cover;
`


export default ProfileWrapper;
export {ContactSection,AlbumSection,AlbumTitle,Album,Photo}