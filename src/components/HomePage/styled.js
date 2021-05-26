import styled from 'styled-components'
import { Link } from "react-scroll";
import CommonStyled from "../CommonStyled";
import theme from '../theme';
import {ChevronDownOutline} from '@styled-icons/evaicons-outline'

export const HomeAllPageMain = styled(CommonStyled.AllPageMain)`
@media (max-width: 750px) { 
  padding-top: 30px;
}
`

export const TextBox = styled(CommonStyled.TwoSidersBox)`
font-family:${theme.fonts.RobotoRegular};
height:fit-content;
display: flex;
align-self:center;
align-items:flex-start;
flex-direction: column;
  @media (max-width: 750px) { 
align-items:center;
}
`

export const Title = styled.h1`
font-size:70px;
padding:0 20px;
color: ${props => props.theme.titleColor};
margin:0;
@media (max-width: 750px) { 
  font-size:60px;  
}
`

export const Text = styled.p`
font-size: 17px;
padding:0 20px;
color: ${props => props.theme.textColor};
margin:0;
@media (max-width: 750px) { 
  font-size:15px;  
  text-align:center;
}
`

export const ButtonLink = styled(Link)`
font-family: ${theme.fonts.MontserratRegular};
cursor: pointer;
background-color: ${theme.colors.green.dark};
padding:10px 20px;
font-weight:bold;
color: ${theme.colors.white};
font-size: 15px;
margin: 20px;
text-transform:uppercase;
text-decoration:none;
width:fit-content;
border-radius: 3px;
`

export const Image = styled.img`
height:40vh;
overflow: hidden;
`

export const SrollDownLink = styled(Link)`
@media (max-width: 750px) { 
  display:none;
}
position:absolute;
bottom:1%;
text-decoration:none;
cursor:pointer;
`

export const ChevronDown = styled(ChevronDownOutline)`
fill:${props => props.theme.textColor};
width: 80px;
height: 80px;
`