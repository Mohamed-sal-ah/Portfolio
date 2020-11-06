import styled from 'styled-components'

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
display:flex;
background-color: #FFFFFF;
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
color: #000000;
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
font-size:50px;
font-family : Roboto;
color : #104687;
padding-bottom: 10px;
text-align:center;
text-transform: uppercase;
@media (max-width: 750px) { 
    font-size:30px;
}
`

export const ArticleText = styled.p`
margin:0;
font-size:15px;
text-align:center;
padding:0 20px;
font-family : Roboto;
`

export const BoxShadowDiv = styled.div`
height:400px;
width: 90%;
box-shadow: 0px 0px 10px #CDCDCB;
display: flex;
flex-direction: column;
align-items:center;
justify-content: center;
border-radius: 9px;
@media (max-width: 750px) {
    box-shadow: 0px 5px 10px  #CDCDCB; 
    width: 100%;
    border-radius:0;
}
`

export const ProjectImg = styled.img`
width:150px;
@media (max-width: 750px) {
    width:130px;
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
color : #000000;
font-size: 30px;
@media (max-width: 750px) { 
    font-size:25px;
}
`

export const WeatherDiv = styled.div`
display:flex;
flex-direction:row;
width: 100%; 
font-family:Roboto;
padding: 10px 0;
justify-content: center;
align-items: center;
`
export const WeatherText = styled.p`
font-size: 60px;
padding-left: 15px;
font-family:Roboto;
color : #000000;
margin:0;
@media (max-width: 750px) { 
    font-size:30px;
}
`
export const WeatherData = styled.p`
margin: 10px 0;
font-family:Roboto;
padding : 0 40px;
color :#000000;
font-size:17px;
@media (max-width: 750px) { 
    font-size:15px;
}
`