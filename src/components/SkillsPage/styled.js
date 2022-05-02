import styled from 'styled-components'
import theme from '../theme'
import CommonStyled from "../CommonStyled";

export const SkillIconsGrid = styled.div`
display: grid;
grid-template-columns: auto auto auto;
gap:15px;
`

export const SkillIconItem = styled.div`
background-color:#B55D0B;
display:flex;
align-items: center;
justify-content: center;
height:75px;
width:75px;
& *{
    color:${theme.colors.white};
    width:85%;
    height:85% ;
} 
`

export const SkillFlexBox = styled(CommonStyled.FlexBox)`
@media (max-width :750px) {
    flex-direction: column;
}
`