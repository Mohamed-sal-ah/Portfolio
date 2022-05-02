import React from "react";
import * as STYLED from "./styled";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <STYLED.FooterStyle>
      <STYLED.Infotext>@{currentYear} by Mohamed-sal-ah</STYLED.Infotext>
      <STYLED.DivIcons>
        <STYLED.IconSpan>
          <a href="https://github.com/Mohamed-sal-ah">
            <STYLED.GithubIcon title="Link to Github"/>
          </a>
        </STYLED.IconSpan>
        <STYLED.IconSpan>
          <a href="mailto:mohamedsalahahmed@outlook.com">
            <STYLED.MailIcon title="Email link"/>
          </a>
        </STYLED.IconSpan>
      </STYLED.DivIcons>
    </STYLED.FooterStyle>
  );
};

export default Footer;
