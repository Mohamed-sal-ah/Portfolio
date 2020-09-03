import React from 'react'
import * as STYLED from './style'
import { ThemeProvider } from 'styled-components'
import NavBar from '../Navbar'
import EmailImage from '../../images/email.jpg'


const ContactPage = ({ pageTheme, onForward }) => {
    let title;
    let font;
    let color;
    let link;
    if (pageTheme === 'dark') {
        font = 'ffffff'
        title = '6892C5'
        color = '000000'
        link = 'ffffff'
    } else {
        font = '000000'
        title = '104687'
        color = 'FFFFFF'
        link = '2B2E3B'
    }
    const theme = {
        fontColor: `#${font}`,
        backGround: `#${color}`,
        titleColor: `#${title}`,
        linkColor: `#${link}`,
    }
    return (
        <>
            <NavBar changeTheme={onForward} pageTheme={pageTheme} />
            <ThemeProvider theme={theme} >
                <STYLED.FullPage>
                    <STYLED.FlexBox>
                        <STYLED.TwoSidersBox>
                            <STYLED.ContactDiv>
                                <STYLED.ContactTitle>Contact</STYLED.ContactTitle>
                                <STYLED.EmailCirlce>
                                    <STYLED.StyledMail />
                                </STYLED.EmailCirlce>
                                <STYLED.LinkTitle>Email</STYLED.LinkTitle>
                                <STYLED.ContactLink href='mailto:mohamedsalahahmed@outlook.com'>
                                    mohamedsalahahmed@outlook.com
                                </STYLED.ContactLink>
                            </STYLED.ContactDiv>
                        </STYLED.TwoSidersBox>
                        <STYLED.TwoSidersBox>
                            <STYLED.Image src={EmailImage} alt='Photo by Onlineprinters on Unsplash' />
                        </STYLED.TwoSidersBox>
                    </STYLED.FlexBox>
                </STYLED.FullPage>
            </ThemeProvider>
        </>
    )
}

export default ContactPage
