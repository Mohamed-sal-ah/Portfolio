import React from "react";
import * as STYLED from "./styled";
import * as ReusableStyles from '../ReusableStyles/ReusableStyles'
import {Git,ReactLogo,Figma,Html5,Css3,Javascript,Nodejs,Vuejs,Angular,Python} from '@styled-icons/boxicons-logos'

const SkillsPage = () => {
  return (
      <ReusableStyles.AllPageMain name="skills" secondary="true">
        <ReusableStyles.FullPage>
          <STYLED.SkillFlexBox>
            <ReusableStyles.ArticleBox>
              <ReusableStyles.TextTitle>MY SKILLS</ReusableStyles.TextTitle>
              <ReusableStyles.Text>
                Here is a list of my tech skills that I have learned during my path
                to become Frontend Developent which includes UI/UX design. 
              </ReusableStyles.Text>
            </ReusableStyles.ArticleBox>
            <ReusableStyles.TwoSidersBox>
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
            </ReusableStyles.TwoSidersBox>
          </STYLED.SkillFlexBox>
        </ReusableStyles.FullPage>
      </ReusableStyles.AllPageMain>
  );
};

export default SkillsPage;
