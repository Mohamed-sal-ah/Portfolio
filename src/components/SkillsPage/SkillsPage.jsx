import React from "react";
import * as STYLED from "./styled";
import Html5 from "../../images/html5.png";
import Css3 from "../../images/css3.png";
import JsLogo from "../../images/js-logo.png";
import Figma from "../../images/figma.png";
import GitIcon from "../../images/git-icon.png";
import ReactLogo from "../../images/react-logo.png";
import CommonStyled from "../CommonStyled";
import theme from "../theme";
import { ThemeProvider } from "styled-components";

const SkillsPage = ({ colorTheme }) => {
  const isLight = colorTheme === "light";
  const styledTheme = {
    backgroundColor: isLight
      ? theme.colors.light_gray
      : theme.colors.black_blue.secondary,
    titleColor: isLight
      ? theme.colors.blue.secondary
      : theme.colors.blue.light_blue,
    textColor: isLight ? theme.colors.gray_blue : theme.colors.white,
  };
  return (
    <ThemeProvider theme={styledTheme}>
      <CommonStyled.AllPageMain name="skills">
        <CommonStyled.FullPage>
          <STYLED.SkillFlexBox>
            <CommonStyled.ArticleBox>
              <CommonStyled.TextTitle>Skills</CommonStyled.TextTitle>
              <CommonStyled.Text>
                Here some of the skills that i do for web development.
              </CommonStyled.Text>
            </CommonStyled.ArticleBox>
            <CommonStyled.TwoSidersBox>
              <STYLED.SkillIconsGrid>
                <STYLED.SkillIconItem>
                  <img
                    style={{ height: "53px" }}
                    src={ReactLogo}
                    alt="React logo"
                  />
                </STYLED.SkillIconItem>
                <STYLED.SkillIconItem>
                  <img
                    style={{ width: "53px", height: "53px" }}
                    src={GitIcon}
                    alt="Git icon"
                  />
                </STYLED.SkillIconItem>
                <STYLED.SkillIconItem>
                  <img
                    style={{ width: "53px", height: "53px" }}
                    src={Figma}
                    alt="Fimga logo"
                  />
                </STYLED.SkillIconItem>
                <STYLED.SkillIconItem>
                  <img
                    style={{ width: "53px", height: "53px" }}
                    src={Html5}
                    alt="Html5 logo"
                  />
                </STYLED.SkillIconItem>
                <STYLED.SkillIconItem>
                  <img
                    style={{ width: "53px", height: "53px" }}
                    src={Css3}
                    alt="Css3 logo"
                  />
                </STYLED.SkillIconItem>
                <STYLED.SkillIconItem>
                  <img
                    style={{ width: "53px", height: "53px" }}
                    src={JsLogo}
                    alt="js logo"
                  />
                </STYLED.SkillIconItem>
              </STYLED.SkillIconsGrid>
            </CommonStyled.TwoSidersBox>
          </STYLED.SkillFlexBox>
        </CommonStyled.FullPage>
      </CommonStyled.AllPageMain>
    </ThemeProvider>
  );
};

export default SkillsPage;
