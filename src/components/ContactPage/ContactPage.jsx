import React from "react";
import * as STYLED from "./styled";
import EmailImage from "../../images/email.jpg";
import CommonStyled from "../CommonStyled";
import Footer from "../Footer";
import theme from "../theme";
import { ThemeProvider } from "styled-components";

const ContactPage = ({ colorTheme }) => {
  const isLight = colorTheme === "light";
  const styledTheme = {
    backgroundColor: isLight
      ? theme.colors.white
      : theme.colors.black_blue.trinary,
    titleColor: isLight
      ? theme.colors.blue.secondary
      : theme.colors.blue.light_blue,
    textColor: isLight ? theme.colors.gray_blue : theme.colors.white,
  };
  return (
    <ThemeProvider theme={styledTheme}>
      <CommonStyled.AllPageMain name="contact">
        <CommonStyled.FullPage>
          <CommonStyled.FlexBox>
            <CommonStyled.TwoSidersBox>
              <STYLED.ContactDiv>
                <CommonStyled.TextTitle>Contact</CommonStyled.TextTitle>
                <STYLED.EmailCirlce>
                  <STYLED.StyledMail />
                </STYLED.EmailCirlce>
                <STYLED.LinkTitle>Email</STYLED.LinkTitle>
                <STYLED.ContactLink href="mailto:mohamedsalahahmed@outlook.com">
                  mohamedsalahahmed@outlook.com
                </STYLED.ContactLink>
              </STYLED.ContactDiv>
            </CommonStyled.TwoSidersBox>
            <CommonStyled.TwoSidersBox>
              <STYLED.Image
                src={EmailImage}
                alt="Photo by Onlineprinters on Unsplash"
              />
            </CommonStyled.TwoSidersBox>
          </CommonStyled.FlexBox>
        </CommonStyled.FullPage>
      </CommonStyled.AllPageMain>
      <Footer />
    </ThemeProvider>
  );
};

export default ContactPage;
