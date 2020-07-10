import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const FullPage = styled.div`
width: 100vw;
height :100vh;
background: ${props => props.theme.backGround};
 transition: 0.2s ease;
display:flex;
justify-content :center;
align-items: center;
flex-direction: row;
justify-content: space-around;
@media (max-width: 750px) { 
    flex-direction:column-reverse;
}
`
export const FlexBox = styled.section`
display:flex;
flex-direction:row;
justify-content:center;
width:100%;
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


export const TextBox = styled(TwoSidersBox)`
font-family:'Roboto';
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
font-size:60px;
padding:0 20px;
color:${props => props.theme.titleColor};
    font-weight: 300;
margin:0;
@media (max-width: 750px) { 
  font-size:50px;  
}
`

export const Text = styled.p`
font-size: 17px;
padding:0 20px;
color: ${props => props.theme.fontColor};
margin:0;
@media (max-width: 750px) { 
  font-size:15px;  
}
`

export const ButtonLink = styled(Link)`
font-family: 'Montserrat';
background-color:#4E7E7E;
padding:10px 20px;
color:#ffffff;
font-size: 15px;
margin: 15px 20px;
text-transform:uppercase;
text-decoration:none;
width:fit-content;
`

export const Image = styled.img`
height:40vh;
overflow: hidden;
`