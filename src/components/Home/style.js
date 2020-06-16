import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const FullPage = styled.div`
width: 100vw;
height :100vh;
background: ${props => props.theme.gradiant};
 transition: 0.2s ease;
display:flex;
justify-content :center;
`
export const OpacityBox = styled.div`
background-color:${props => props.theme.opacityBox};
 transition: 0.2s ease;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:600px;
height:fit-content;
padding:15px;
align-self: center;
border-radius:9px;
 @media (max-width: 750px) { 
    width:85vw;
 }

`
export const InfoText = styled.p`
font-size:30px;
font-family : 'Montserrat';
margin :0;
color: ${props => props.theme.fontColor};
 transition: 0.2s ease;
 @media (max-width: 750px) {    
    font-size: 110%;
 }
`

export const LinkText = styled(Link)`
background-color:${props => props.theme.linkBox};
 transition: 0.2s ease;
padding:5px;
border-radius:3px;
margin-top:10px;
font-size:25px;
font-family : 'Montserrat';
color:${props => props.theme.linkColor};
text-decoration:none;
width:fit-content;
cursor: pointer;
 @media (max-width: 750px) {    
    font-size: 15px;
 }
`