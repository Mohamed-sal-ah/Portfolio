import React from "react";
import * as STYLED from "./styled";
import CommonStyled from "../CommonStyled";
import Footer from "../Footer";

const ContactPage = () => {
  return (
    <>
      <CommonStyled.AllPageMain name="contact">
        <CommonStyled.FullPage>
            <STYLED.ContactDiv>
                <CommonStyled.TextTitle>CONTACT</CommonStyled.TextTitle>
                <CommonStyled.Text>If you want to message me click on the button below.</CommonStyled.Text>
                <STYLED.ContactLink as="a" href="mailto:mohamedsalahahmed@outlook.com">Send me a message</STYLED.ContactLink>
            </STYLED.ContactDiv>
        </CommonStyled.FullPage>
      </CommonStyled.AllPageMain>
      <Footer />
    </>
  );
};

export default ContactPage;
