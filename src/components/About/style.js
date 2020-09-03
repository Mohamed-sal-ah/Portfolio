import styled from 'styled-components'

export const FullPage = styled.div`
width: 100vw;
height :100vh;
background-color: ${props => props.theme.backGround};
display:flex;
 transition: 0.2s ease;
justify-content :center;
@media (max-width: 750px) {
    padding: 80px 0;
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

export const ArticleBox = styled(TwoSidersBox)`
flex-direction:column;
color: ${props => props.theme.fontColor};
 transition: 0.2s ease;
 
`

export const ArticleTitle = styled.h1`
margin :0;
font-size:50px;
font-family : 'Roboto';
color : ${props => props.theme.titleColor};
padding-bottom: 10px;
text-align:center;
font-weight: 400;
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
font-family : 'Roboto';
`

export const Image = styled.img`
height:60vh;
border-radius:9px;
`