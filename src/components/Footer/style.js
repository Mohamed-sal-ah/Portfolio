import styled from 'styled-components'
import { Github } from '@styled-icons/boxicons-logos/Github'
import { Mail } from '@styled-icons/heroicons-outline/Mail'

export const FooterStyle = styled.footer`
height:100px;
width:100%;
background-color: #2B2E3B;
 transition: 0.2s ease;
display:flex;
flex-direction: row;
align-items:center;
justify-content: space-between;
@media (max-width: 750px) { 
    justify-content:space-around;
    flex-direction:column-reverse;
    }
`
export const Infotext = styled.h4`
color: #FFFFFF;
transition: 0.2s ease;
margin:0;
font-family:'Montserrat';
font-size: 17px;
padding-left: 20px;
font-family: 'Montserrat';
font-weight:900;
@media (max-width: 750px) { 
    font-size:15px;
    padding-left: 5px;
}
`
export const DivIcons = styled.div`
padding-right:20px;
`

export const IconSpan = styled.span`
padding:0 20px;
`

export const GithubIcon = styled(Github)`
color:#FFFFFF;
height: 40px;
width: 40px;
`
export const MailIcon = styled(Mail)`
color:#FFFFFF;
height: 40px;
width: 40px;
`
