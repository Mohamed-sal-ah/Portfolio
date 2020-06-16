import React from 'react'
import * as STYLED from './style'
import { ThemeProvider } from 'styled-components'

const Footer = ({ pageTheme }) => {
    let backgroundValue;
    let fontValue;
    if (pageTheme === 'dark') {
        backgroundValue = '252525'
        fontValue = 'C3C0C0'
    } else {
        backgroundValue = 'F0F0F0'
        fontValue = '3E3E3E'
    }
    const theme = {
        backgroundColor: `#${backgroundValue}`,
        frontColor: `#${fontValue}`
    }
    return (
        <ThemeProvider theme={theme}>
            <STYLED.FooterStyle>
                <STYLED.Infotext>@2020 by Mohamed-sal-ah</STYLED.Infotext>
                <STYLED.LinkRow>
                    <a href='https://github.com/Mohamed-sal-ah'><STYLED.StyledMail /></a>
                    <a href='mailto:mohamedsalahahmed@outlook.com'><STYLED.StyledGitHub /></a>
                </STYLED.LinkRow>
            </STYLED.FooterStyle>
        </ThemeProvider>

    )
}

export default Footer
