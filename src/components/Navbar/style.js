import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom'

export const FullNav = styled.div`
width:100%;
position:fixed;
`

export const NavFlex = styled.nav`
display:flex;
flex-direction: row;
justify-content: space-between;
align-items:center;
transition: 0.2s ease;
background-color: #FFFFFF;
width:100%;
box-shadow: 0 2px 3px #cbcbcb;
`

export const TitleNav = styled(Link)`
font-family : Montserrat;
font-size :35px;
font-weight: bold;
text-transform: uppercase;
text-decoration : none;
color: #225588;
padding:5px;
margin: 10px;
@media (max-width: 750px) { 
  font-size:23px;
}
@media (max-width : 375px) {
  font-size:17px
}
`
export const TitleNotNav = styled.h1`
font-family : Montserrat;
font-size :35px;
font-weight: bold;
text-transform: uppercase;
text-decoration : none;
color: #225588;
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
&:last-child{
  display:block;
}
}
`

export const LinkItem = styled(NavLink)`
font-family: Roboto-Light;
font-weight: bold;
cursor:pointer;
text-decoration:none;
transition: 0.2s ease;
color: #225588;
font-size:20px;
padding-left:2px;
padding-right:2px;
padding-bottom: 3px;
transition:none;
&.active-link {
    border-bottom:2px solid #C15261;
  }
&.active-link:hover {
    border-bottom:2px solid #C15261;
  }

&:hover {
    border-bottom:2px solid #619E9E;
  }
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
background-color: #225588;
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

export const MobileNav = styled.div`
display:none;
@media (max-width: 850px) { 
  z-index:-1;
  overflow-y: hidden;
  display:flex;
  position:fixed;
  width: 100%;
  transition: 0.5s;
  height: ${props => props.theme.toggle};
  background-color: #F2F2F2;
}
`
export const MobileUL = styled(ULNav)`
  flex-direction: column;
  position: relative;
  justify-content:start;
  width:100%;
`
export const MobileListItem = styled(ListItem)`
font-size:30px;
padding:10px 0;
transition: 0.1s;
display:block;
font-family:Roboto-Light;
font-weight: bold;
width: 100%;
text-align: center;
`


