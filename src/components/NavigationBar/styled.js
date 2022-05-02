import styled from 'styled-components'
import { Link } from "react-scroll";
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
background-color: ${theme.colors.black_blue.trinary};
width:100%;
`

export const TitleNav = styled.button`
cursor: pointer;
font-family : ${theme.fonts.NunitoBold};
font-size:1.25em;
font-weight: bold;
text-transform: uppercase;
text-decoration : none;
background:none;
border:none;
color: ${theme.colors.light_blue};
padding:5px;
margin: 10px;
outline:none;
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
display: ${props => props.mobileView ? 'none' : 'block'}; 
@media (max-width: 750px) { 
display: ${props => !props.mobileView ? 'none' : 'block'}; 
};
`

export const LinkItem = styled(Link)`
font-family: ${theme.fonts.Nunito};
cursor:pointer;
text-decoration:none;
color: ${theme.colors.white};
font-size:0.7em;
padding-left:2px;
padding-right:2px;
padding-bottom: 3px;
border:none;
transition: 0.3s ease;
outline:none;
&.active, &.active:hover{
    color: ${theme.colors.red};
  }
&:hover {
    color : ${theme.colors.gray};
  }
`

export const BarItems = styled.div`
cursor:pointer;
display:flex;
flex-direction:column;
&.clicked > *{
  background-color:${theme.colors.red};
}

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
background-color: ${theme.colors.white};
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
background-color:${theme.colors.black_blue.trinary};
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