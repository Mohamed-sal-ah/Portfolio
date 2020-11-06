import styled from 'styled-components'
import { Mail } from '@styled-icons/heroicons-outline/Mail'

export const AllPageMain = styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
height:100vh;
position: absolute;
left: 0;
right: 0;
background-color: #FFFCFB;
`

export const FullPage = styled.main`
width: 100vw;
height:100%;
background-color:#FFFFFF;
display:flex;
transition: 0.2s ease;
justify-content :center;
align-items:center;
@media (max-width: 750px) {
    margin-top: 7vh;
}
`
export const FlexBox = styled.section`
display:flex;
flex-direction:row;
justify-content:center;
@media (max-width: 750px) { 
    flex-direction:column-reverse;
}
`
export const TwoSidersBox = styled.div`
justify-content:center;
align-items:center;
display:flex;
width:50%;
@media (max-width: 750px) { 
    width: 100%;
    padding:30px 0;
}
`


export const ContactDiv = styled.div`
width:500px;
display:flex;
height:fit-content;
align-items:center;
flex-direction:column;
color:#000000;
@media (max-width: 750px) {
    width:95vw;
}

@media (max-width: 350px) {
    width:100%;
}

`
export const ContactTitle = styled.h1`
padding-bottom: 10px;
margin :0;
font-size:50px;
color : #104687;
font-family : Roboto;
text-align:center;
text-transform: uppercase;
@media (max-width: 750px) { 
    font-size:30px;
}
`


export const ContactLinkDiv = styled.div`
padding:0px;
display: flex;
font-family : Roboto;
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
background-color: #C15261;
border-radius:50%;
`

export const LinkTitle = styled.h3`
color: #C15261;
font-size:25px;
font-family : Roboto;
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
font-family : Roboto;
font-size:17px;
letter-spacing: 1px;
color: #2B2E3B;
@media (max-width: 750px) { 
    font-size:15px;
}
`

export const StyledMail = styled(Mail)`
color: #FFFFFF;
transition: 0.2s ease;
height:50px;
width:50px;
`

export const Image = styled.img`
width:90%;
border-radius:9px;
`