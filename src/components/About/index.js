import React from 'react'
import * as STYLED from './style'
import { ThemeProvider } from 'styled-components'
import AboutImage from '../../images/ben-kolde-bs2Ba7t69mM-unsplash.jpg'
import NavBar from '../Navbar'

const AboutPage = ({ pageTheme, onForward }) => {
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
        titleColor : `#${title}`
    }
    return (
        <>
            <NavBar changeTheme={onForward} pageTheme={pageTheme} />
            <ThemeProvider theme={theme}>
                <STYLED.FullPage>
                    <STYLED.FlexBox>
                        <STYLED.ArticleBox>
                            <STYLED.ArticleTitle>
                                About me
                        </STYLED.ArticleTitle>
                            <STYLED.ArticleText>
                                Hello, my name is Mohamed Salah Ahmed I'm a Front-end developer student and I have interest in web development.
                                I during the course of the education HTML/CSS, JS and I created this website in React.
                                I have typically worked on individual and teamwork project and these have evolved my experience with programming.
                                What I am looking forward now is to learn new languages in web development and integrate them in my private project.
                            </STYLED.ArticleText>
                        </STYLED.ArticleBox>
                        <STYLED.TwoSidersBox>
                            <STYLED.Image src={AboutImage} alt='Photo by Ben Kolde on Unsplash' />
                        </STYLED.TwoSidersBox>
                    </STYLED.FlexBox>
                </STYLED.FullPage>
            </ThemeProvider>
        </>
    )
}

export default AboutPage
