import styled from 'styled-components'
import { Mail } from '@styled-icons/heroicons-outline/Mail'
import theme from '../theme'

export const ContactDiv = styled.div`
width:500px;
display:flex;
height:fit-content;
align-items:center;
flex-direction:column;
@media (max-width: 750px) {
    width:95vw;
}

@media (max-width: 350px) {
    width:100%;
}

`


export const ContactLinkDiv = styled.div`
padding:0px;
display: flex;
font-family : ${theme.fonts.RobotoRegular};
flex-direction: row;
justify-content: space-evenly;
align-items: center;
margin:0;
@media (max-width: 750px) { 
    padding:0;
    justify-content:space-evenly;
}

@media (max-width: 350px) {
    border-radius:0;
    border-right:none;
    border-left:none;
    justify-content:space-evenly;
    }
`
export const EmailCirlce = styled.span`
padding:10px;
background-color: ${theme.colors.red};
border-radius:5px;
`

export const LinkTitle = styled.h3`
color: ${theme.colors.red};
font-size:25px;
font-family : ${theme.fonts.RobotoRegular};
letter-spacing:2px;
text-align:center;
text-transform:uppercase;
margin: 10px 0;
@media (max-width: 750px) { 
    font-size:20px;
}
`

export const ContactLink = styled.a`
text-decoration:none;
font-family : ${theme.fonts.RobotoRegular};
font-size:17px;
letter-spacing: 1px;
color: ${props => props.theme.textColor};
@media (max-width: 750px) { 
    font-size:15px;
}
`

export const StyledMail = styled(Mail)`
color: ${theme.colors.white};
transition: 0.2s ease;
height:50px;
width:50px;
`

export const Image = styled.img`
width:90%;
`