import styled from 'styled-components'
import theme from '../theme'
import CommonStyled from "../CommonStyled";

export const SkillIconsGrid = styled.div`
display: grid;
grid-template-columns: auto auto auto;
gap:30px;
`

export const SkillIconItem = styled.div`
border-radius:5px;
background-color:${theme.colors.gray_blue};
display:flex;
align-items: center;
justify-content: center;
height:75px;
width:75px;
`

export const SkillFlexBox = styled(CommonStyled.FlexBox)`
@media (max-width :750px) {
    flex-direction: column;
}
`