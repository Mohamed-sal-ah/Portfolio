import styled from 'styled-components'
import { Github } from '@styled-icons/boxicons-logos/Github'
import { Mail } from '@styled-icons/heroicons-outline/Mail'
import theme from '../theme'

export const FooterStyle = styled.footer`
top:100vh;
height:100px;
width:100%;
background-color:${theme.colors.black_blue.primary};
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
color: ${theme.colors.white};
transition: 0.2s ease;
margin:0;
font-family:${theme.fonts.MontserratRegular};
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
color: ${theme.colors.white};
height: 40px;
width: 40px;
`
export const MailIcon = styled(Mail)`
color: ${theme.colors.white};
height: 40px;
width: 40px;
`
