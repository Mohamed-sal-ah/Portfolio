import React, { Component } from 'react';
import styled from 'styled-components';
import './style/contact.scss'
import gitIcon from './icons/github-logo.svg';
import mailIcon from './icons/mail.svg';


const ContactSection = styled.section`
padding: 5rem 0 50vh 0;
height: fit-content;
justify-content: center;
align-items: center;
@media (max-width: 800px) {
    padding: 0;
}
`;
const ContactTitle = styled.h1`
font-size: 2rem;
  text-align: center;
height: fit-content;
width: 100%;
padding: 0;
margin: 0;
@media (max-width: 800px) {
    padding: 1rem 0;
}
`;

const ContactBox = styled.div`
height: fit-content;
width: 500px;
@media (max-width: 800px) {
   width: 90%;
   padding: 1rem 0;
}
`;
const HeaderInput = styled.h4`
text-align: left;

  margin: 0;
  font-size: 1.2rem;
`;

const Icons = styled.img`
width: 30px;
padding: 0;
margin: 0;
height: 30px;
`

const ContactLinks = styled.a`
text-decoration:none;
padding-left:2rem;
@media (max-width: 800px) {
  padding-left:2rem; 
}
`

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.Submit = this.Submit.bind(this)
        this.onChange = this.onChange.bind(this)
    }
    onChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }
    Submit(event) {
        console.log('clicked event');
        console.log(this.state.message);
        
        event.preventDefault();
    }

    render() {
        return (<main>
            <ContactSection className='contact-section'>
                <ContactTitle id='contact-title'>Contact</ContactTitle>
                <ContactBox id='contact-box'>
                    <div className='contact-div'>
                        <Icons className='icons' src={gitIcon} alt='github icon'/> 
                        <ContactLinks className='contact-links' href='https://github.com/Mohamed-sal-ah'><HeaderInput>https://github.com/Mohamed-sal-ah</HeaderInput></ContactLinks>
                    </div>
                    <div className='contact-div'>
                   <Icons className='icons' src={mailIcon} alt='mail icon' />
                  <ContactLinks className='contact-links' href='mailto:mohamedsalahahmed@outlook.com'><HeaderInput>mohamedsalahahmed@outlook.com</HeaderInput></ContactLinks>
                    </div>
                </ContactBox>
            </ContactSection>
        </main>);
    }
}

export default Contact;
