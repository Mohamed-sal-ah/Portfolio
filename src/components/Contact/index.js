import React from 'react'
import * as STYLED from './style'
import EmailImage from '../../images/email.jpg'

const ContactPage = () => (
    <STYLED.AllPageMain classname="page">
        <STYLED.FullPage>
            <STYLED.FlexBox>
                <STYLED.TwoSidersBox>
                    <STYLED.ContactDiv>
                        <STYLED.ContactTitle>Contact</STYLED.ContactTitle>
                        <STYLED.EmailCirlce>
                            <STYLED.StyledMail />
                        </STYLED.EmailCirlce>
                        <STYLED.LinkTitle>Email</STYLED.LinkTitle>
                        <STYLED.ContactLink href='mailto:mohamedsalahahmed@outlook.com'>
                            mohamedsalahahmed @outlook.com
                    </STYLED.ContactLink>
                    </STYLED.ContactDiv>
                </STYLED.TwoSidersBox>
                <STYLED.TwoSidersBox>
                    <STYLED.Image src={EmailImage} alt='Photo by Onlineprinters on Unsplash' />
                </STYLED.TwoSidersBox>
            </STYLED.FlexBox>
        </STYLED.FullPage>
    </STYLED.AllPageMain>
)

export default ContactPage
