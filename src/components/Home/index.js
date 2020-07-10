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
        title = 'FFFFFF'
        font = 'CDCDCB'
    } else {
        backGroundColor = 'FFFFFF'
        title = '000000'
        font = '6C6C6C'
    }
    const theme = {
        backGround: `#${backGroundColor}`,
        titleColor : `#${title}`,
        fontColor : `#${font}`
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
