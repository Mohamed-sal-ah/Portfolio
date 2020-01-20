import React, { Component } from 'react';
import styled from 'styled-components';
import NavbarItems from './NavbarItems';
import {NavLink} from 'react-router-dom';
import {Link} from 'react-router-dom';

const TextColor = styled.p`
color:#ffffff;
`;

const TitleStyle = styled.h1`
color:#ffffff;
font-size: 1.7rem;
margin: 0;
padding-left: 0.5rem;
`;

class Navbar extends Component {
    constructor(props){
        super(props);
        this.toggleNav=this.toggleNav.bind(this)
        this.HeaderIcon=this.HeaderIcon.bind(this)
        this.ToggleTheme=this.ToggleTheme.bind(this)
        this.state={condtion: false, theme:''}
    }

    toggleNav (){    
        this.setState({
            condtion: !this.state.condtion})
    }
    
    HeaderIcon (){
        if (this.state.condtion) {
            this.toggleNav()
        }
    }
    componentDidMount(){
        document.documentElement.setAttribute('theme','light')
        this.setState({theme:'light'})
        
    }

    ToggleTheme(){

        if (this.state.theme==='light') {
            this.setState({theme:'dark'});
            document.documentElement.setAttribute('theme','dark'); 
        } else{
            this.setState({theme:'light'});
            document.documentElement.setAttribute('theme','light');
        }
        
        
    }

    render() { 
             
        const clasCondition = this.state.condtion ? ' open' : ' closed'
        const MobileClass = 'mobileUL'+clasCondition;
        return (
       
        <React.Fragment>
                <nav>
            <div className='nav-bar'>
                        <Link className='title-link' to='/' onClick={this.HeaderIcon}>
                <div className='div-center'>
                  <TitleStyle>Mohamed S.A</TitleStyle>
                </div>
                </Link>    
                <div className='div-center'>
                    <NavbarItems onTheme={this.ToggleTheme} onBoolean={this.state.condtion} onToggle={this.toggleNav}></NavbarItems>
                </div>   
            </div>
            <span className='mobile'>
                <ul className={MobileClass}>
                            <NavLink activeClassName='active' className='a-link' to='/applications' onClick={this.toggleNav}>
                                <li><TextColor>Applications</TextColor></li>
                            </NavLink>
                            <NavLink activeClassName='active' className='a-link' to='/about' onClick={this.toggleNav}>
                                <li><TextColor>About</TextColor></li>
                            </NavLink>
                            <NavLink activeClassName='active' className='a-link' to='/contact' onClick={this.toggleNav}>
                                <li><TextColor>Contact</TextColor></li>
                            </NavLink>       
                </ul>
            </span>
 
        </nav>
        </React.Fragment>
         );
    }
}


 
export default Navbar;