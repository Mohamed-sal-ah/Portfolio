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

    handleTitleClick = e => {
        e.preventDefault();
        this.props.history.push(`/`)
        setTimeout(() => this.setState({ mobileNav: false }), 1000)
    }

    handleMobileClick = e => {
        e.preventDefault();
        setTimeout(() => this.setState({ mobileNav: false }), 1000)
        this.props.history.push(`/${e.target.id}`)
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
                        <STYLED.TitleNav onClick={this.handleTitleClick} disabled={disablePathHome} style={{ cursor: `${disablePathHome ? 'auto' : 'pointer'}` }}>Mohamed-sal-ah</STYLED.TitleNav >
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
                                <STYLED.LinkItemMobile onClick={this.handleMobileClick} disabled={disablePathAbout} style={{ cursor: `${disablePathAbout ? 'auto' : 'pointer'}` }} className={disablePathAbout ? 'active-link' : ''} id='about'>About</STYLED.LinkItemMobile>
                            </STYLED.MobileListItem>
                            <STYLED.MobileListItem>
                                <STYLED.LinkItemMobile onClick={this.handleMobileClick} disabled={disablePathProjects} style={{ cursor: `${disablePathProjects ? 'auto' : 'pointer'}` }} className={disablePathProjects ? 'active-link' : ''} id='projects'>Projects</STYLED.LinkItemMobile>
                            </STYLED.MobileListItem>
                            <STYLED.MobileListItem>
                                <STYLED.LinkItemMobile onClick={this.handleMobileClick} disabled={disablePathContact} style={{ cursor: `${disablePathContact ? 'auto' : 'pointer'}` }} className={disablePathContact ? 'active-link' : ''} id='contact'>Contact</STYLED.LinkItemMobile>
                            </STYLED.MobileListItem>
                        </STYLED.MobileUL>
                    </STYLED.MobileNav>
                </STYLED.FullNav>
            </ThemeProvider>
        )
    }

}
export default withRouter(NavBar)
