import React from 'react'
import * as STYLED from './style'
import { ThemeProvider } from 'styled-components'

const Footer = ({ pageTheme }) => {
    let backgroundValue;
    let fontValue;
    if (pageTheme === 'dark') {
        backgroundValue = '000000'
        fontValue = 'CDCDCB'
    } else {
        backgroundValue = 'FFFFFF'
        fontValue = '868683'
    }
    const theme = {
        backgroundColor: `#${backgroundValue}`,
        frontColor: `#${fontValue}`
    }
    return (
        <ThemeProvider theme={theme}>
            <STYLED.FooterStyle>
                <STYLED.Infotext>@2020 by Mohamed-sal-ah</STYLED.Infotext>
            </STYLED.FooterStyle>
        </ThemeProvider>

    )
}

export default Footer
