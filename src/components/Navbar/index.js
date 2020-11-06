import React, { Component } from 'react'
import * as STYLED from './style'
import { ThemeProvider } from 'styled-components'
import { withRouter } from 'react-router-dom'

class NavBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            mobileNav: false
        }
    }
    ToggleMobileNav = (event) => {
        event.preventDefault();
        if (this.state.mobileNav) {
            this.setState({ mobileNav: false })
        } else {
            this.setState({ mobileNav: true })
        }
    }
    render() {
        const percentVaule = this.state.mobileNav ? '100' : '0';
        const clicked = this.state.mobileNav ? 'clicked' : '';
        const theme = {
            toggle: `${percentVaule}%`,
        };
        const disablePathHome = this.props.location.pathname === '/' ? true : false
        const disablePathAbout = this.props.location.pathname === '/about' ? true : false
        const disablePathProjects = this.props.location.pathname === '/projects' ? true : false
        const disablePathContact = this.props.location.pathname === '/contact' ? true : false
        return (
            <ThemeProvider theme={theme}>
                <STYLED.FullNav>
                    <STYLED.NavFlex>
                        <STYLED.TitleNav to='/' style={{ pointerEvents: `${disablePathHome ? 'none' : 'auto'}` }}>Mohamed-sal-ah</STYLED.TitleNav >
                        <STYLED.ULNav>
                            <STYLED.TopListItem>
                                <STYLED.LinkItem style={{ pointerEvents: `${disablePathAbout ? 'none' : 'auto'}` }} activeClassName='active-link' to='/about'>About</STYLED.LinkItem>
                            </STYLED.TopListItem>
                            <STYLED.TopListItem>
                                <STYLED.LinkItem style={{ pointerEvents: `${disablePathProjects ? 'none' : 'auto'}` }} activeClassName='active-link' to='/projects'>Projects</STYLED.LinkItem>
                            </STYLED.TopListItem>
                            <STYLED.TopListItem>
                                <STYLED.LinkItem style={{ pointerEvents: `${disablePathContact ? 'none' : 'auto'}` }} activeClassName='active-link' to='/contact'>Contact</STYLED.LinkItem>
                            </STYLED.TopListItem>
                            <STYLED.TopListItem>
                                <STYLED.BarItems className={clicked} onClick={this.ToggleMobileNav}>
                                    <STYLED.Bar />
                                    <STYLED.Bar />
                                    <STYLED.Bar />
                                </STYLED.BarItems>
                            </STYLED.TopListItem>
                        </STYLED.ULNav>
                    </STYLED.NavFlex>
                    <STYLED.MobileNav >
                        <STYLED.MobileUL>
                            <STYLED.MobileListItem>
                                <STYLED.LinkItem style={{ pointerEvents: `${disablePathAbout ? 'none' : 'auto'}` }} activeClassName='active-link' to='/about'>About</STYLED.LinkItem>
                            </STYLED.MobileListItem>
                            <STYLED.MobileListItem>
                                <STYLED.LinkItem style={{ pointerEvents: `${disablePathProjects ? 'none' : 'auto'}` }} activeClassName='active-link' to='/projects'>Projects</STYLED.LinkItem>
                            </STYLED.MobileListItem>
                            <STYLED.MobileListItem>
                                <STYLED.LinkItem style={{ pointerEvents: `${disablePathContact ? 'none' : 'auto'}` }} activeClassName='active-link' to='/contact'>Contact</STYLED.LinkItem>
                            </STYLED.MobileListItem>
                        </STYLED.MobileUL>
                    </STYLED.MobileNav>
                </STYLED.FullNav>
            </ThemeProvider>
        )
    }

}
export default withRouter(NavBar)
