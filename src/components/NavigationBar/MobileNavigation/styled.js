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
    top: -9px; 
    right:15px;
    width: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid ${theme.colors.black_blue.trinary}; 
}
`

export const MobileNavListItem = styled.li`
list-style-type: none;
`

export const MobileNavButton = styled.button`
color: ${theme.colors.white};
font-family: ${theme.fonts.Nunito};
font-size: 0.85em;
padding:10px 0;
min-width: 300px;
border: none;
background: none;
cursor:pointer;
`