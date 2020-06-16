import React from 'react'
import * as STYLED from './style'
import NavBar from '../Navbar'
import { ThemeProvider } from 'styled-components'


const HomePage = ({ pageTheme, onForward }) => {
    let font;
    let link;
    let linkBackGround;
    let opacityBackGround;
    let leftColor;
    let rightColor;
    if (pageTheme === 'dark') {
        font = 'ffffff'
        link = 'C3C0C0'
        linkBackGround = '54,54,54'
        opacityBackGround = '0,0,0'
        leftColor = '76,65,119'
        rightColor = '42,84,112'
    } else {
        font = '000000'
        link = '3E3E3E'
        linkBackGround = '242,242,242'
        opacityBackGround = '255,255,255'
        leftColor = '133,141,215'
        rightColor = '150,219,245'
    }
    const theme = {
        fontColor: `#${font}`,
        linkColor: `#${link}`,
        linkBox: `rgba(${linkBackGround},0.4)`,
        opacityBox: `rgba(${opacityBackGround},0.4)`,
        gradiant: `linear-gradient(90deg, rgba(${leftColor},1) 0%, rgba(${rightColor},1) 100%)`
    }
    return (
        <>
            <NavBar changeTheme={onForward} pageTheme={pageTheme} />
            <ThemeProvider theme={theme}>
                <STYLED.FullPage id='light-box'>
                    <STYLED.OpacityBox>
                        <STYLED.InfoText>Hello I’m Mohamed Salah Ahmed.</STYLED.InfoText>
                        <STYLED.InfoText>I’m front end developer student.</STYLED.InfoText>
                        <STYLED.LinkText to='/projects' >See my projects</STYLED.LinkText>
                    </STYLED.OpacityBox>
                </STYLED.FullPage>
            </ThemeProvider>
        </>
    )
}

export default HomePage
