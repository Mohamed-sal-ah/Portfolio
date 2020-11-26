import styled from 'styled-components'
import { Github } from '@styled-icons/boxicons-logos/Github'
import { Mail } from '@styled-icons/heroicons-outline/Mail'

export const FooterStyle = styled.footer`
top:100vh;
position: absolute;
height:100px;
width:100%;
background-color: #FFFFFF;
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
color: #2B2E3B;
transition: 0.2s ease;
margin:0;
font-family:Montserrat;
font-size: 17px;
padding-left: 20px;
font-weight:bold;
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
color:#2B2E3B;
height: 40px;
width: 40px;
`
export const MailIcon = styled(Mail)`
color:#2B2E3B;
height: 40px;
width: 40px;
`
