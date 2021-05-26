import styled from 'styled-components'
import { Link } from "react-scroll";
import {Adjust} from '@styled-icons/boxicons-regular/Adjust'
import theme from '../theme'
import Modal from "react-modal";

export const FullNav = styled.div`
width:100%;
position:fixed;
z-index:1;
`

export const NavFlex = styled.nav`
display:flex;
flex-direction: row;
justify-content: space-between;
align-items:center;
transition: 0.3s ease;
background-color: ${props => props.theme.backgroundColor};
width:100%;
box-shadow: ${props => props.theme.boxShadow};
/* box-shadow: 0 2px 3px #cbcbcb; */
`

export const TitleNav = styled.button`
cursor: pointer;
font-family : ${theme.fonts.MontserratRegular};
font-size :35px;
font-weight: bold;
text-transform: uppercase;
text-decoration : none;
background:none;
border:none;
color: ${props => props.theme.fontColor};
padding:5px;
margin: 10px;
outline:none;
@media (max-width: 810px) { 
  font-size:23px;
}
@media (max-width : 375px) {
  font-size:17px
}
`
export const TitleNotNav = styled.h1`
font-family : ${theme.fonts.MontserratRegular};
font-size :35px;
font-weight: bold;
color: ${props => props.theme.fontColor};
text-transform: uppercase;
text-decoration : none;
padding:5px;
margin: 10px;
@media (max-width: 750px) { 
  font-size:23px;
}
@media (max-width : 375px) {
  font-size:17px
}
`

export const ULNav = styled.ul`
margin :0%;
padding:0;
display:flex;
flex-direction: row;
align-items: center;
`

export const ListItem = styled.li`
list-style :none;
`

export const TopListItem = styled(ListItem)`
padding:13px;
&:last-child{
  display:none;
}
@media (max-width: 750px) { 
&:first-child{
  display:none;
}
&:nth-child(2){
  display: none;
}
&:nth-child(3){
  display: none;
}
&:nth-child(4){
  display: none;
}
&:nth-child(5){
  display: none;
}
&:last-child{
  display:block;
}
}
`

export const LinkItem = styled(Link)`
font-family: ${theme.fonts.RobotoThin};
font-weight: bold;
cursor:pointer;
text-decoration:none;
transition: 0.2s ease;
color: ${props => props.theme.fontColor};
font-size:20px;
padding-left:2px;
padding-right:2px;
padding-bottom: 3px;
transition:none;
border:none;
outline:none;
&.active {
    border-bottom:2px solid #C15261;
  }
&.active:hover {
    border-bottom:2px solid #C15261;
  }

&:hover {
    border-bottom:2px solid #619E9E;
  }
`

export const ChangeThemeButton = styled.button`
display: flex;
align-items: center;
justify-content: center;
border:none;
background:none;
`

export const ChangeThemeIcon = styled(Adjust)`
fill : ${props => props.theme.fontColor};
width:30px;
height:30px;
`

export const BarItems = styled.div`
cursor:pointer;
display:flex;
flex-direction:column;
&.clicked > {
  :nth-child(1){
  transform: translateY(9px) rotate(-45deg);
}
&:nth-child(2){
  opacity: 0;
  transform: translateX(50px) ;
}
&:nth-child(3){
 transform: translateY(-9px) rotate(45deg);
}
}
`


export const Bar = styled.span`
transition: 0.3s ease;
background-color: ${props => props.theme.fontColor};
display: block;
margin: 3px 0;
border-radius: 5px;
height: 3px;
width: 35px;
transition:0.5s ease;
&.clicked:nth-child(1){
  transform: translateY(9px) rotate(-45deg);
}
&.clicked:nth-child(2){
 opacity: 0;
  transform: translateX(40px) ;
}
&.clicked:nth-child(3){
 transform: translateY(-9px) rotate(45deg);
}
`

export const MobileNavModal = styled(Modal)`
outline: none;
position: absolute;
background-color:${props => props.theme.backgroundColor};
  top: 190px;
  left: calc(100% - 165px);
  right: auto;
  bottom: auto;
  padding: 10px;
  transform: translate(-50%, -50%);
  margin-right: -50%;
  width: fit-content;
  border:none;
  border-radius: 5px;
  transition: 0.3s ease;
`