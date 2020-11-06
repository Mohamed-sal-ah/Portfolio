import React from 'react'
import * as STYLED from './style'
import NavBar from '../Navbar'
import Ilustation from '../../images/img1.png'
import Footer from '../Footer'

const HomePage = () => (
    <STYLED.AllPageMain>
        <NavBar />
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
        <Footer />
    </STYLED.AllPageMain>
)

export default HomePage
