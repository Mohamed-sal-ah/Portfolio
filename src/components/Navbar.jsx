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
const NavbarStyle = styled.nav`
text-transform: uppercase;
font-weight: bold;
letter-spacing: 1px;
@media (max-width: 800px) {
    letter-spacing:0;
}
`;
const NavbarDiv= styled.div`
z-index: 1;
display: flex;
height: fit-content;
background-color: #2d3d5e;
justify-content: space-between;
position: fixed;
width: 100%;
@media (max-width: 800px) {
        bottom: 0%;
}
`;
const MobileNavSpan = styled.span`
display:none;
@media (max-width: 800px) {
    display: block;
}
`;
const MobileNavUL = styled.ul`
justify-content: flex-start;
    align-items: center;
    position: fixed;
    width: 100%;
     margin:  -50px 0 0 0;
     padding: 0;
`;

class Navbar extends Component {
    constructor(props){
        super(props);
        this.toggleNav=this.toggleNav.bind(this)
        this.HeaderIcon=this.HeaderIcon.bind(this)
        this.ToggleTheme=this.ToggleTheme.bind(this)
        this.ReturnID=this.ReturnID.bind(this)
        this.state={condtion: false, theme:'',loadedTheme:true}
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
        document.documentElement.setAttribute('theme','light');

        this.setState({theme:this.getLocalstorage()})
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

    ReturnID(theme) {
        if (theme==='dark') {
            return 'dark-theme-icon'
        } else{
            return 'light-theme-icon';
        }
    }

    render() { 
             
        const clasCondition = this.state.condtion ? ' open' : ' closed'
        const MobileClass = 'mobileUL'+clasCondition;
        const ThemeClass = this.ReturnID(this.state.theme)
        return (
       
        <React.Fragment>
                <NavbarStyle>
            <NavbarDiv>
                        <Link className='title-link' to='/' onClick={this.HeaderIcon}>
                <div className='div-center'>
                  <TitleStyle>Mohamed S.A</TitleStyle>
                </div>
                </Link>    
                <div className='div-center'>
                    <NavbarItems onWhichTheme={ThemeClass} onTheme={this.ToggleTheme} onBoolean={this.state.condtion} onToggle={this.toggleNav}></NavbarItems>
                </div>   
            </NavbarDiv>
            <MobileNavSpan>
                <MobileNavUL className={MobileClass}>
                            <NavLink activeClassName='active' className='a-link' to='/applications' onClick={this.toggleNav}>
                                <li><TextColor>Applications</TextColor></li>
                            </NavLink>
                            <NavLink activeClassName='active' className='a-link' to='/about' onClick={this.toggleNav}>
                                <li><TextColor>About</TextColor></li>
                            </NavLink>
                            <NavLink activeClassName='active' className='a-link' to='/contact' onClick={this.toggleNav}>
                                <li><TextColor>Contact</TextColor></li>
                            </NavLink>       
                </MobileNavUL>
            </MobileNavSpan>
 
        </NavbarStyle>
        </React.Fragment>
         );
    }
}


 
export default Navbar;