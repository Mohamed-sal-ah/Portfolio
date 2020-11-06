import React from 'react'
import * as STYLED from './style'
import NavBar from '../Navbar'
import ProjectImg from '../../images/bild.png'
const ApplicationPage = () => (
    <STYLED.AllPageMain classname="page">
        <NavBar />
        <STYLED.FullPage>
            <STYLED.FlexBox>
                <STYLED.ArticleBox>
                    <STYLED.ArticleTitle>Projects</STYLED.ArticleTitle>
                    <STYLED.ArticleText>
                        I have worked on a project to develop this Portfolio site.In right side of this page is the project that i have been worked for example a mockup of online delivery soup.
                    </STYLED.ArticleText>
                </STYLED.ArticleBox>
                <STYLED.ArticleBox>
                    <STYLED.BoxShadowDiv>
                        <STYLED.WeatherTitle>Online Delivery soup</STYLED.WeatherTitle>
                        <STYLED.ProjectImg src={ProjectImg} />
                    </STYLED.BoxShadowDiv>
                </STYLED.ArticleBox>
            </STYLED.FlexBox>
        </STYLED.FullPage>
    </STYLED.AllPageMain>
)

export default ApplicationPage
