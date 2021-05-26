import React from "react";
import * as STYLED from "./styled";
import Ilustation from "../../images/img1.png";
import CommonStyled from "../CommonStyled";
import theme from "../theme";
import { ThemeProvider } from "styled-components";

const HomePage = ({ colorTheme }) => {
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
      <STYLED.HomeAllPageMain name="home">
        <CommonStyled.FullPage>
          <CommonStyled.FlexBox>
            <STYLED.TextBox>
              <STYLED.Title>Hello</STYLED.Title>
              <STYLED.Text>
                I’m Mohamed Salah Ahmed. I’m front end developer student.
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
            <CommonStyled.TwoSidersBox>
              <STYLED.Image src={Ilustation} />
            </CommonStyled.TwoSidersBox>
          </CommonStyled.FlexBox>
          <STYLED.SrollDownLink
            spy={false}
            smooth={true}
            offset={-70}
            duration={500}
            to="projects"
          >
            <STYLED.ChevronDown />
          </STYLED.SrollDownLink>
        </CommonStyled.FullPage>
      </STYLED.HomeAllPageMain>
    </ThemeProvider>
  );
};

export default HomePage;
