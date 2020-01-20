import React, { Component } from 'react';


class ContactContent extends Component {
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
            <section className='contact-section'>
                <h1 className='contact-title'>Contact</h1>
                <form className='contact-form'>
                    <h4 className='header-input'>Email</h4>
                    <input onChange={this.onChange} type='text' name="email" />
                    <h4 className='header-input'>Subject</h4>
                    <input onChange={this.onChange} type='text' name='subject' />
                    <h4 className='header-input'>Message</h4>
                    <textarea value={this.state.message} onChange={this.onChange} type='text' name='message' id='text-area' rows='4' cols='50'>
                    </textarea>
                    <button type='submit' onClick={this.Submit}>Submit</button>
                </form>
            </section>
        </main>);
    }
}

export default ContactContent;

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
                <button>Submit</button>
               </form>
        </section>
    </main> );
}

export default ContactContent;
*/
