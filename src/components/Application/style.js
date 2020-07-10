import styled from 'styled-components'

export const FullPage = styled.div`
width: 100vw;
height :100vh;
display:flex;
background-color: ${props => props.theme.backGround};
justify-content :center;
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
color: ${props => props.theme.fontColor};
transition: 0.2s ease;
align-items:center;
display:flex;
width:50%;
@media (max-width: 750px) { 
    width: 100%;
    padding:30px 0;
}
`

export const ArticleBox = styled(TwoSidersBox)`
flex-direction:column;
`

export const ArticleTitle = styled.h1`
margin :0;
font-size:40px;
font-family : 'Roboto';
color : ${props => props.theme.titleColor};
padding-bottom: 20px;
text-align:center;
font-weight: 100;
text-transform: uppercase;
@media (max-width: 750px) { 
    font-size:30px;
}
`

export const ArticleText = styled.p`
margin:0;
font-size:17px;
text-align:center;
padding:0 20px;
font-family : 'Roboto';
@media (max-width: 750px) { 
    font-size:15px;
}
`

export const BoxShadowDiv = styled.div`
height:400px;
width: 400px;
box-shadow: 0px 0px 10px ${props => props.theme.shadowColor};
display: flex;
flex-direction: column;
justify-content: center;
border-radius: 20px;
@media (max-width: 750px) { 
    width: 100%;
    border-radius:0;
}
`

export const WeatherImg = styled.img`
height: 7rem;
width: 7rem;
@media (max-width: 750px) { 
height: 5rem;
width: 5rem;
}
`

export const WeatherTitle = styled(ArticleTitle)`
font-size: 30px;
@media (max-width: 750px) { 
    font-size:25px;
}
`

export const WeatherDiv = styled.div`
display:flex;
flex-direction:row;
width: 100%; 
font-family:'Roboto';
padding: 10px 0;
justify-content: center;
align-items: center;
`
export const WeatherText = styled.p`
font-size: 60px;
padding-left: 15px;
font-family:'Roboto';
color : ${props => props.theme.titleColor};
margin:0;
@media (max-width: 750px) { 
    font-size:30px;
}
`
export const WeatherData = styled.p`
margin: 10px 0;
font-family:'Roboto';
padding : 0 40px;
color : ${props => props.theme.titleColor};
font-size:17px;
@media (max-width: 750px) { 
    font-size:15px;
}
`