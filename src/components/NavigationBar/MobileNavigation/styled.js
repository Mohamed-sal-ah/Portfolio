import styled from 'styled-components'
import theme from '../../theme'

export const FullMobileNavList = styled.ul`
display: flex;
flex-direction: column;
align-items: center;
transition: 0.3s ease;
justify-content: center;
padding:0;
margin:0;
::before{
    content: ''; 
    height: 0; 
    position: absolute; 
    top: -10px; 
    right:15px;
    width: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid ${props => props.theme.backgroundColor}; 
}
`

export const MobileNavListItem = styled.li`
list-style-type: none;
`

export const MobileNavButton = styled.button`
color: ${props => props.theme.fontColor};
font-family: ${theme.fonts.RobotoRegular};
font-size: 20px;
padding:10px 0;
min-width: 300px;
border: none;
background: none;
cursor:pointer;
`