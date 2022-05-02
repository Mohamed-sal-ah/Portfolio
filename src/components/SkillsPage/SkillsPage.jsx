import React from "react";
import * as STYLED from "./styled";
import CommonStyled from "../CommonStyled";
import {Git,ReactLogo,Figma,Html5,Css3,Javascript,Nodejs,Vuejs,Angular} from '@styled-icons/boxicons-logos'

const SkillsPage = () => {
  return (
      <CommonStyled.AllPageMain name="skills" secondary="true">
        <CommonStyled.FullPage>
          <STYLED.SkillFlexBox>
            <CommonStyled.ArticleBox>
              <CommonStyled.TextTitle>MY SKILLS</CommonStyled.TextTitle>
              <CommonStyled.Text>
                Here is a list of my tech skills that I have learned during my path
                to become Frontend Developent which includes UI/UX design. 
              </CommonStyled.Text>
            </CommonStyled.ArticleBox>
            <CommonStyled.TwoSidersBox>
              <STYLED.SkillIconsGrid>
                  <STYLED.SkillIconItem>
                    <ReactLogo title="React"/>
                  </STYLED.SkillIconItem>
                  <STYLED.SkillIconItem>
                    <Git title="Git"/>
                  </STYLED.SkillIconItem>
                  <STYLED.SkillIconItem>
                    <Figma title="Figma"/>
                  </STYLED.SkillIconItem>
                  <STYLED.SkillIconItem>
                    <Html5 title="HTML5"/>
                  </STYLED.SkillIconItem>
                  <STYLED.SkillIconItem>
                    <Css3 title="CSS3"/>
                  </STYLED.SkillIconItem>
                  <STYLED.SkillIconItem>
                    <Javascript title="Javascript"/>
                  </STYLED.SkillIconItem>
                  <STYLED.SkillIconItem>
                    <Nodejs title="Node.js"/>
                  </STYLED.SkillIconItem>
                  <STYLED.SkillIconItem>
                    <Vuejs title="Vue.js" />
                  </STYLED.SkillIconItem>
                  <STYLED.SkillIconItem>
                    <Angular title="Angular" />
                  </STYLED.SkillIconItem>
              </STYLED.SkillIconsGrid>
            </CommonStyled.TwoSidersBox>
          </STYLED.SkillFlexBox>
        </CommonStyled.FullPage>
      </CommonStyled.AllPageMain>
  );
};

export default SkillsPage;
