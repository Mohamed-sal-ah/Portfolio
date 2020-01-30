import React from 'react';
import styled from 'styled-components';
import gitIcon from './icons/github-logo.svg';
import mailIcon from './icons/mail.svg';
import './style/footer.scss'

const Icons = styled.img`
width: 30px;
padding: 0;
margin: 0;
height: 30px;
`

const Footer = () => {
    return ( <footer>
        <div>
            <h1>React App</h1>
               <p>Lorem ipsum dolor sit, amet consectetur</p>
        </div>
        <div>

            <div className="contact">
                <h3>contact</h3>
                <span>
                     <a href='https://github.com/Mohmed-sal-ah'><Icons className='icons' src={gitIcon} alt='github icon'></Icons></a>
                    <a href='https://outlook.live.com/owa/'><Icons className='icons' src={mailIcon} alt='mail icon'></Icons></a>
                </span>
                <p>@2019 by Mohamed Salah Ahmed</p>
            </div>
        </div>
       

    </footer> );
}
 
export default Footer;