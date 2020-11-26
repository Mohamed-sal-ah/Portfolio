import React from 'react'
import * as STYLED from './style'
import Ilustation from '../../images/img1.png'

const HomePage = () => (
    <STYLED.AllPageMain>
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
    </STYLED.AllPageMain>
)

export default HomePage
