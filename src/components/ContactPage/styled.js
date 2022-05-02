import styled from 'styled-components'
import theme from '../theme'
import CommonStyled from '../CommonStyled'

export const ContactDiv = styled.div`
padding:0px;
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

export const ContactLink = styled(CommonStyled.LinkButton)`
color: ${theme.colors.red};
border:2px solid ${theme.colors.red};

`