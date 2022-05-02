import styled from 'styled-components'
import theme from '../theme'

export const ProjectsDiv = styled.div`
height:fit-content;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin:0;
@media (max-width: 750px) {
    width:95vw;
}
@media (max-width: 350px) {
    width:100%;
}
`

export const ProjectGrid = styled.ul`
    margin: 20px auto;
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(340px, 0fr));
    padding:0;
    grid-gap: 1rem;
    width: 90vw;
    /* @media (min-width: 650px) {
        grid-template-columns: repeat(auto-fit, minmax(400px, 0fr));
    } */
`

export const ProjectGridItem = styled.li`
    width: 100%;
    list-style-type: none;
    justify-self: center;
    position: relative;
    max-width:90vw;
    max-height:220px;
`


export const ProjectHover = styled.div`
transition:0.4s ease;
opacity: 0;
position: absolute;
top: 0;
left:0;
background: #222738;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
&:hover {
    opacity: 1;
}
`

export const ProjectTitle = styled.h3`
margin:0;
padding-bottom: 5px;
color: ${theme.colors.white};
font-family: ${theme.fonts.RobotoLight};
font-size: 25px;
`

export const ProjectText = styled.p`
margin:0;
max-width:90%;
font-family: ${theme.fonts.Nunito};
color: ${theme.colors.gray};
font-size: 15px;
text-align: center;
`

export const ProjectImg = styled.img`
width:100%;
min-height:100%;
max-height:220px;
`

export const TextLink = styled.a`
color:${theme.colors.light_blue};
`
