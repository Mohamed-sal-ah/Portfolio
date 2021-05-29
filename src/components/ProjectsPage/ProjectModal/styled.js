import styled from "styled-components";
import theme from "../../theme";
import {CloseOutline} from '@styled-icons/evaicons-outline'

export const FullModalDiv = styled.div`
background-color: ${props => props.theme.modalColor};
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
max-width:750px;
@media (max-width: 750px) {
    width: fit-content;
    border-radius:0;
}

`

export const TopModalFlex = styled.div`
width: 100%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
padding:10px 0;
`

export const ProjectModalTitle = styled.h2`
font-family: ${theme.fonts.MontserratRegular};
font-weight:lighter;
color: ${props =>  props.theme.modalTitle};
font-size:30px;
margin-top:0;
margin-bottom: 0;
margin-left: 10px;
@media (max-width: 750px) {
      font-size: 23px;
  }
`

export const CloseModalButton = styled.button`
display: flex;
align-items: center;
justify-content: center;
background: none;
border: none;
cursor: pointer;
&:hover{
    opacity: 0.5;
}
`

export const CloseIcon = styled(CloseOutline)`
fill: ${theme.colors.red};
width:50px;
height:50px;
@media (max-width: 750px) {
    width: 45px;
    height: 45px;
}
`

export const PreviewImageLink = styled.a`
text-decoration:none;
display: flex;
justify-content: center;
align-items: center;
`

export const PreviewImage = styled.img`
max-width: 600px;
@media (max-width: 750px) {
    max-width: 90%;
}
border:5px solid ${theme.colors.gray_blue};
`

export const ProjectInfoText = styled.p`
font-family: ${theme.fonts.RobotoRegular};
color:${props => props.theme.textColor};
font-size:17px;
max-width: 500px;
text-align: center;
margin-top: 15px;
margin-bottom: 15px;
@media (max-width: 750px) {
      font-size: 14px;
  }
`