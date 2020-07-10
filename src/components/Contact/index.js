import React from 'react'
import * as STYLED from './style'
import { ThemeProvider } from 'styled-components'
import NavBar from '../Navbar'


const ContactPage = ({ pageTheme, onForward }) => {
    let title;
    let font;
    let color;
    if (pageTheme === 'dark') {
        font = 'CDCDCB'
        title = 'ffffff'
        color = '000000'
    } else {
        font = '6C6C6C'
        title = '000000'
        color = 'FFFFFF'
    }
    const theme = {
        fontColor: `#${font}`,
        backGround: `#${color}`,
        titleColor: `#${title}`
    }
    return (
        <>
            <NavBar changeTheme={onForward} pageTheme={pageTheme} />
            <ThemeProvider theme={theme} >
                <STYLED.FullPage>
                    <STYLED.ContactDiv>
                        <STYLED.ContactTitle>Contact</STYLED.ContactTitle>
                        <STYLED.ContactText>Here is my contact information and link to GitHub</STYLED.ContactText>
                        <STYLED.ContactLinkDiv>
                            <STYLED.StyledGitHub />
                            <STYLED.ContactSpan as='span'>
                                <STYLED.ContactLink href='https://github.com/Mohamed-sal-ah'>https://github.com/Mohamed-sal-ah</STYLED.ContactLink>
                            </STYLED.ContactSpan>
                        </STYLED.ContactLinkDiv>
                        <STYLED.ContactLinkDiv>
                            <STYLED.StyledMail />
                            <STYLED.ContactSpan as='span'>
                                <STYLED.ContactLink href='mailto:mohamedsalahahmed@outlook.com'>mohamedsalahahmed@outlook.com</STYLED.ContactLink>
                            </STYLED.ContactSpan>
                        </STYLED.ContactLinkDiv>
                    </STYLED.ContactDiv>
                </STYLED.FullPage>
            </ThemeProvider>
        </>
    )
}

export default ContactPage
