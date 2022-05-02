import React from "react";
import * as STYLED from "./styled";
import CommonStyled from "../CommonStyled";

const HomePage = () => {
  return (
      <STYLED.HomeAllPageMain name="home">
        <CommonStyled.FullPage>
          <CommonStyled.FlexBox>
            <STYLED.TextBox>
              <STYLED.SmallTitle>Hi, my name is</STYLED.SmallTitle>
              <STYLED.Title primary>
                Mohamed Salah Ahmed.
              </STYLED.Title>
              <STYLED.Title >I'm a Front end Developer</STYLED.Title>
              <STYLED.Text>
                I am a front-end developer who is very engaged, learning quickly, curious and interested in learning more about web development.
              </STYLED.Text>
              <STYLED.ButtonLink
                spy={false}
                smooth={true}
                offset={-70}
                duration={500}
                to="projects"
              >
                See my work
              </STYLED.ButtonLink>
            </STYLED.TextBox>
          </CommonStyled.FlexBox>
          <STYLED.SrollDownLink
            spy={false}
            smooth={true}
            offset={-70}
            duration={500}
            to="about"
          >
            <STYLED.ChevronDown />
          </STYLED.SrollDownLink>
        </CommonStyled.FullPage>
      </STYLED.HomeAllPageMain>
  );
};

export default HomePage;
