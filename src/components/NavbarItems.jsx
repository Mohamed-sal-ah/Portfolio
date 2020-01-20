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
const Mobilebtn= styled.div`
display:none;
@media (max-width: 800px) {
display:block;
}
`;
const NotMobilebtn = styled.div`
display:block;
@media (max-width: 800px) {
display:none;
}
`


const NavBarItems = ({onTheme,onToggle, onBoolean}) => {

    
    return (
    <React.Fragment>
        <Mobilebtn onClick={onTheme}>
            <p>light</p>
        </Mobilebtn>
    <div className='nav-items'>
       
        <div className='mobile-nav'>
            <MobileBar className={onBoolean ? 'clicked' : 'not-clicked'} onClick={() => onToggle()}>
                <div className='bar-toggle'>
                    <ToggleSpan className='toggle-span'></ToggleSpan>
                    <ToggleSpan className='toggle-span'></ToggleSpan>
                    <ToggleSpan className='toggle-span'></ToggleSpan>
                </div>
            </MobileBar>
            
        </div>
        
        <ul className='normal-nav'> 
            <NavLink activeClassName='active' className='a-link' to='/applications'>
                <li><TextColor>Applications</TextColor></li>
            </NavLink>
            <NavLink activeClassName='active' className='a-link' to='/about'>
                <li><TextColor>About</TextColor></li>
            </NavLink>
            <NavLink activeClassName='active' className='a-link' to='/contact'>
                <li><TextColor>Contact</TextColor></li>
            </NavLink>
            
        </ul>
        
    </div>
    <NotMobilebtn onClick={onTheme}>
            <p>light</p>
        </NotMobilebtn>
    </React.Fragment>
 );
}
 
export default NavBarItems;

