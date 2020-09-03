import React from 'react'
import * as STYLED from './style'
import NavBar from '../Navbar'
import { ThemeProvider } from 'styled-components'
import Ilustation from '../../images/img1.png'

const HomePage = ({ pageTheme, onForward }) => {
    let font;
    let title;
    let backGroundColor;
    if (pageTheme === 'dark') {
        backGroundColor = '000000'
        title = '6892C5'
        font = 'FFFFFF'
    } else {
        backGroundColor = 'FFFFFF'
        title = '104687'
        font = '000000'
    }
    const theme = {
        backGround: `#${backGroundColor}`,
        titleColor: `#${title}`,
        fontColor: `#${font}`
    }
    return (
        <>
            <NavBar changeTheme={onForward} pageTheme={pageTheme} />
            <ThemeProvider theme={theme}>
                <STYLED.FullPage>
                    <STYLED.FlexBox>
                        <STYLED.TextBox>
                            <STYLED.Title>Hello</STYLED.Title>
                            <STYLED.Text>I’m Mohamed Salah Ahmed. I’m front end developer student.</STYLED.Text>
                            <STYLED.ButtonLink to='/projects'>See my work</STYLED.ButtonLink>
                        </STYLED.TextBox>
                        <STYLED.TwoSidersBox>
                            <STYLED.Image src={Ilustation} />
                        </STYLED.TwoSidersBox>

                    </STYLED.FlexBox>
                </STYLED.FullPage>
            </ThemeProvider>
        </>
    )
}

export default HomePage
