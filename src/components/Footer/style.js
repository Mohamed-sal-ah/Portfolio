import styled from 'styled-components'

export const FooterStyle = styled.footer`
height:100px;
width:100%;
background-color: ${props => props.theme.backgroundColor};
 transition: 0.2s ease;
display:flex;
flex-direction: row;
align-items:center;
justify-content: space-between;
@media (max-width: 750px) { 
        height:60px;
    }
`
export const Infotext = styled.h4`
color: ${props => props.theme.frontColor};
 transition: 0.2s ease;
 margin:0;
font-family:'Montserrat';
    font-size: 15px;
    padding-left: 20px;
    font-family: 'Montserrat';
    font-weight:400;
    @media (max-width: 750px) { 
        font-size:15px;
        padding-left: 5px;
    }
`

