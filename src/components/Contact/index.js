import React from 'react'
import * as STYLED from './style'
import { ThemeProvider } from 'styled-components'
import NavBar from '../Navbar'


const ContactPage = ({ pageTheme, onForward }) => {
    let font;
    let color;
    let border;
    if (pageTheme === 'dark') {
        font = 'ffffff'
        color = '1b1b1b'
        border = 'E3E3E3'
    } else {
        font = '000000'
        color = 'ffffff'
        border = '3E3E3E'
    }
    const theme = {
        fontColor: `#${font}`,
        backGround: `#${color}`,
        borderColor: `#${border}`

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
                            <STYLED.ContactText as='span'>
                                <STYLED.ContactLink href='https://github.com/Mohamed-sal-ah'>https://github.com/Mohamed-sal-ah</STYLED.ContactLink>
                            </STYLED.ContactText>
                        </STYLED.ContactLinkDiv>
                        <STYLED.ContactLinkDiv>
                            <STYLED.StyledMail />
                            <STYLED.ContactText as='span'>
                                <STYLED.ContactLink href='mailto:mohamedsalahahmed@outlook.com'>mohamedsalahahmed@outlook.com</STYLED.ContactLink>
                            </STYLED.ContactText>
                        </STYLED.ContactLinkDiv>
                    </STYLED.ContactDiv>
                </STYLED.FullPage>
            </ThemeProvider>
        </>
    )
}

export default ContactPage
