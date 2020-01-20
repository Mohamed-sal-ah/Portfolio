import React from 'react';
import gitIcon from './icons/github-logo.svg'
import mailIcon from './icons/mail.svg'

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
                     <a href='https://github.com/Mohmed-sal-ah'><img className='icons' src={gitIcon} alt='github icon'></img></a>
                    <a href='https://outlook.live.com/owa/'><img className='icons' src={mailIcon} alt='mail icon'></img></a>
                </span>
                <p>@2019 by Mohamed Salah Ahmed</p>
            </div>
        </div>
       

    </footer> );
}
 
export default Footer;