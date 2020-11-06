import React from 'react'
import * as STYLED from './style'

const Footer = () => (
    <STYLED.FooterStyle>
        <STYLED.Infotext>@2020 by Mohamed-sal-ah</STYLED.Infotext>
        <STYLED.DivIcons>
            <STYLED.IconSpan>
                <a href='https://github.com/Mohamed-sal-ah'>
                    <STYLED.GithubIcon />
                </a>
            </STYLED.IconSpan>
            <STYLED.IconSpan>
                <a href='mailto:mohamedsalahahmed@outlook.com'>
                    <STYLED.MailIcon />
                </a>
            </STYLED.IconSpan>
        </STYLED.DivIcons>
    </STYLED.FooterStyle>
)

export default Footer
