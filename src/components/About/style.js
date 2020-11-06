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
background-color: #FFFFFF;
display:flex;
transition: 0.2s ease;
justify-content :center;
@media (max-width: 750px) {
   margin-top: 9vh;
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
color: #000000;
transition: 0.2s ease;
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

export const Image = styled.img`
height:60vh;
border-radius:9px;
`