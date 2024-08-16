import React from "react";
import * as STYLED from "./styled";
import * as ReusableStyles from '../ReusableStyles/ReusableStyles'
import Footer from "../Footer/Footer";

const ContactPage = () => {
  return (
    <>
      <ReusableStyles.AllPageMain name="contact">
        <ReusableStyles.FullPage>
            <STYLED.ContactDiv>
                <ReusableStyles.TextTitle>CONTACT</ReusableStyles.TextTitle>
                <ReusableStyles.Text>If you want to message me click on the button below.</ReusableStyles.Text>
                <STYLED.ContactLink as="a" href="mailto:mohamedsalahahmed@outlook.com">Send me a message</STYLED.ContactLink>
            </STYLED.ContactDiv>
        </ReusableStyles.FullPage>
      </ReusableStyles.AllPageMain>
      <Footer />
    </>
  );
};

export default ContactPage;
