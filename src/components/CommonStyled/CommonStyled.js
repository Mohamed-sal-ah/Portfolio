import styled from 'styled-components'
import { Element} from "react-scroll";
import theme from '../theme'

export const AllPageMain = styled(Element)`
display:flex;
flex-direction:column;
justify-content:center;
min-height:100vh;
transition: 0.3s ease;
left: 0;
right: 0;
background-color: ${props => props.theme.backgroundColor};
@media (max-width: 750px) { 
  height:fit-content;
}
`

export const FullPage = styled.main`
width: 100vw;
height:100%;
display:flex;
transition: 0.2s ease;
justify-content :center;
`

export const FlexBox = styled.section`
width:100%;
display:flex;
flex-direction:row;
justify-content:center;
@media (max-width: 750px) { 
    flex-direction:column-reverse;
}
`

export const TwoSidersBox = styled.div`
justify-content:center;
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

export const TextTitle = styled.h1`
margin :0;
font-size:50px;
font-family : ${theme.fonts.RobotoRegular};
color:${props => props.theme.titleColor};
padding-bottom: 10px;
text-align:center;
@media (max-width: 750px) { 
    font-size:30px;
}
`

export const Text = styled.p`
color:${props => props.theme.textColor};
margin:0;
font-size:15px;
text-align:center;
padding:0 20px;
font-family : ${theme.fonts.RobotoRegular};
`