import React, { Component } from 'react';
import styled from 'styled-components';
import './style/contact.scss'



const ContactSection = styled.section`
padding: 5rem 0;
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

const ContactForm = styled.form`
height: fit-content;
width: 500px;
@media (max-width: 800px) {
   width: 90%;
   padding: 1rem 0;
}
`;
const HeaderInput = styled.h4`
text-align: left;
  padding-top: 1.5rem;
  padding-bottom: 0.5rem;
  margin: 0;
  font-size: 1.2rem;
`;

const Button = styled.button`
padding: 0.5rem;
font-size: 1.2rem;
 text-transform: uppercase;
 outline: none;
 border:none;
 width: fit-content;
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
                <ContactForm id='contact-form'>
                    <HeaderInput className='header-input'>Email</HeaderInput>
                    <input onChange={this.onChange} type='text' name="email" />
                    <HeaderInput className='header-input'>Subject</HeaderInput>
                    <input onChange={this.onChange} type='text' name='subject' />
                    <HeaderInput className='header-input'>Message</HeaderInput>
                    <textarea value={this.state.message} onChange={this.onChange} type='text' name='message' id='text-area' rows='4' cols='50'>
                    </textarea>
                    <Button type='submit' onClick={this.Submit}>Submit</Button>    
                </ContactForm>
            </ContactSection>
        </main>);
    }
}

export default Contact;

/*

const ContactContent = () => {
    return ( <main>
        <section className='contact-section'>
              <h1 className='contact-title'>Contact</h1>
               <form className='contact-form'>
                   <h4 className='header-input'>Email</h4>
                    <input type='text'/>
                <h4 className='header-input'>Subject</h4>
                <input type='text' name='subject'/>
                <h4 className='header-input'>Message</h4>
                <textarea type='text' name='message' id='text-area' rows='4' cols='50'>
                </textarea>
                <Button1a>Submit</Button1a>
               </form>
        </section>
    </main> );
}

export default ContactContent;
*/
