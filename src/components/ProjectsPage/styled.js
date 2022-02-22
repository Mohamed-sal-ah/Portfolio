import styled from 'styled-components'
import theme from '../theme'
import Modal from "react-modal";

export const ProjectViewButton = styled.button`
cursor: pointer;
padding:20px 0; 
background-color: ${theme.colors.gray_blue};
height:fit-content;
width: 90%;
display: flex;
flex-direction: column;
align-items:center;
justify-content: center;
border: none;
border-radius: 5px;
@media (max-width: 750px) {
    width: 80%;
}
`

export const ProjectImg = styled.img`
max-width:90%;
`

export const ProjectTitle = styled.h3`
margin-top: 20px;
margin-bottom:0;
color: ${theme.colors.white};
font-family: ${theme.fonts.MontserratLight};
font-size: 20px;
`

export const ModalStyled = styled(Modal)`
  outline: 0;
  position: absolute;
  background-color: ${props => props.theme.modalColor};
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  padding: 10px;
  transform: translate(-50%, -50%);
  margin-right: -50%;
  width: fit-content;
  border:none;
  border-radius: 5px;
  @media (max-width: 750px) {
      width: 90%;
  }
`;
