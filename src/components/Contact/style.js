import styled from 'styled-components'
import { Github } from '@styled-icons/boxicons-logos/Github'
import { Mail } from '@styled-icons/heroicons-outline/Mail'

export const FullPage = styled.div`
width: 100vw;
height :100vh;
background-color: ${props => props.theme.backGround};
display:flex;
 transition: 0.2s ease;
justify-content :center;
align-items:center;
@media (max-width: 750px) {
    padding: 80px 0;
}
`

export const ContactDiv = styled.div`
width:500px;
height:fit-content;
color:${props => props.theme.fontColor};
@media (max-width: 750px) {
    width:95vw;
}

@media (max-width: 350px) {
    width:100%;
}

`
export const ContactTitle = styled.h1`
margin :0;
font-size:40px;
color : ${props => props.theme.titleColor};
font-family : 'Roboto';
text-align:center;
font-weight: 100;
text-transform: uppercase;
@media (max-width: 750px) { 
    font-size:30px;
}
`

export const ContactText = styled.p`
margin:0;
font-size:17px;
text-align:center;
padding-bottom:20px;
font-family : 'Roboto';

`

export const ContactLinkDiv = styled.div`
padding:0px;
    display: flex;
    font-family : 'Roboto';
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
export const ContactSpan = styled.span`
padding:15px;
@media (max-width: 750px) { 
    padding:10px 5px;
}
`

export const ContactLink = styled.a`
text-decoration:none;
color: ${props => props.theme.fontColor};
`

export const StyledGitHub = styled(Github)`
color: ${props => props.theme.frontColor};
 transition: 0.2s ease;

height:40px;
width:40px;
`

export const StyledMail = styled(Mail)`
color: ${props => props.theme.frontColor};
transition: 0.2s ease;
height:40px;
width:40px;
`