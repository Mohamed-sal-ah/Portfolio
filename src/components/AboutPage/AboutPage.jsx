import React from "react";
import * as STYLED from "./styled";
import AboutImage from "../../images/ben-kolde-bs2Ba7t69mM-unsplash.jpg";
import CommonStyled from "../CommonStyled";
import theme from "../theme";
import { ThemeProvider } from "styled-components";

const AboutPage = ({ colorTheme }) => {
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
      <CommonStyled.AllPageMain name="about">
        <CommonStyled.FullPage>
          <CommonStyled.FlexBox>
            <CommonStyled.ArticleBox>
              <CommonStyled.TextTitle>About me</CommonStyled.TextTitle>
              <CommonStyled.Text>
                Hi my name is Mohamed Salah Ahmed I'm a Front-end developer. I
                am very committed, fast learner, curious and want to learn more
                about web development
              </CommonStyled.Text>
            </CommonStyled.ArticleBox>
            <CommonStyled.TwoSidersBox>
              <STYLED.Image
                src={AboutImage}
                alt="Photo by Ben Kolde on Unsplash"
              />
            </CommonStyled.TwoSidersBox>
          </CommonStyled.FlexBox>
        </CommonStyled.FullPage>
      </CommonStyled.AllPageMain>
    </ThemeProvider>
  );
};

export default AboutPage;
