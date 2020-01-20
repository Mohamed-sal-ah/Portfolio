import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'

const MobileBar =styled.div`
margin 0;
font-size:2.6rem;
cursor:pointer;
padding:0.6rem 1rem;
`;
const ToggleSpan = styled.span`
width: 30px;
background-color:#ffffff; 
display: block;
margin: 5px 0;
border-radius: 5px;
height: 4px;
`;
const TextColor = styled.p`
color:#ffffff;
`;

const NotMobilebtn = styled.div`
display:block;
@media (max-width: 800px) {
display:block;
}
`;

const MobileNavBtn = styled.div`
display:none;
@media (max-width: 800px) {
display:flex;
}
`;

const NormalNav = styled.ul`
margin: 0;
align-items: flex-start;
`;
const NavItems =styled.div`
color: white;
`

const NavBarItems = ({onTheme,onToggle, onBoolean}) => {

    
    return (
    <React.Fragment>
    <NavItems className='nav-items'>
        <NormalNav className='normal-nav'> 
            <NavLink activeClassName='active' className='a-link' to='/applications'>
                <li><TextColor>Applications</TextColor></li>
            </NavLink>
            <NavLink activeClassName='active' className='a-link' to='/about'>
                <li><TextColor>About</TextColor></li>
            </NavLink>
            <NavLink activeClassName='active' className='a-link' to='/contact'>
                <li><TextColor>Contact</TextColor></li>
            </NavLink>   
        </NormalNav>
        <NotMobilebtn onClick={onTheme}>
            <p>light</p>
        </NotMobilebtn>
        <MobileNavBtn>
            <MobileBar className={onBoolean ? 'clicked' : 'not-clicked'} onClick={() => onToggle()}>
                <div className='bar-toggle'>
                    <ToggleSpan className='toggle-span'></ToggleSpan>
                    <ToggleSpan className='toggle-span'></ToggleSpan>
                    <ToggleSpan className='toggle-span'></ToggleSpan>
                </div>
            </MobileBar>
            
        </MobileNavBtn>
    </NavItems>
   

    </React.Fragment>
 );
}
 
export default NavBarItems;

