import React from 'react'
import * as STYLED from './style'
import AboutImage from '../../images/ben-kolde-bs2Ba7t69mM-unsplash.jpg'
import NavBar from '../Navbar'
const AboutPage = () => (
    <STYLED.AllPageMain classname="page">
        <NavBar />
        <STYLED.FullPage>
            <STYLED.FlexBox>
                <STYLED.ArticleBox>
                    <STYLED.ArticleTitle>
                        About me
                </STYLED.ArticleTitle>
                    <STYLED.ArticleText>
                        Hi my name is Mohamed Salah Ahmed I'm a Front-end developer student and I have an interest in web development. I during the course of the education i have learned HTML/CSS and JS also I created this website using React. I have typically worked on individual and teamwork project and these have evolved my experience with programming. What I am looking forward now is to learn new languages in web development and integrate them in my private projects.
                </STYLED.ArticleText>
                </STYLED.ArticleBox>
                <STYLED.TwoSidersBox>
                    <STYLED.Image src={AboutImage} alt='Photo by Ben Kolde on Unsplash' />
                </STYLED.TwoSidersBox>
            </STYLED.FlexBox>
        </STYLED.FullPage>
    </STYLED.AllPageMain>
)

export default AboutPage
