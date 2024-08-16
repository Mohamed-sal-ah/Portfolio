import styled from 'styled-components'
import { Link } from "react-scroll";
import * as ReusableStyles from '../ReusableStyles/ReusableStyles'
import theme from '../theme';
import {ChevronDownOutline} from '@styled-icons/evaicons-outline/ChevronDownOutline'

export const HomeAllPageMain = styled(ReusableStyles.AllPageMain)`
@media (max-width: 750px) { 
  padding-top: 30px;
}
`

export const TextBox = styled(ReusableStyles.TwoSidersBox)`
@media (max-width: 750px) {  
  padding:40px 0;
}
font-family:${theme.fonts.Nunito};
width:100%;
max-width:800px;
height:fit-content;
display: flex;
align-self:center;
align-items:flex-start;
flex-direction: column;
`

export const SmallTitle = styled.h6`
font-size:0.75em;
color:${theme.colors.white}; 
margin:0;
`
export const Title = styled.span`
font-size: 2em;
font-family: ${theme.fonts.NunitoBold};
-webkit-text-fill-color: transparent;
background: linear-gradient(109deg, #4aa5ff, #7dd7e1);
background-clip: text;
`

export const Text = styled.p`
font-size: 1em;
padding:5px 0;
color: ${theme.colors.white};
margin:0;
`

export const ButtonLink = styled(ReusableStyles.LinkButton)`
color: ${theme.colors.light_blue};
border:2px solid ${theme.colors.light_blue};
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
fill:${theme.colors.white};
width: 4.5rem;
height: 4.5rem;
`