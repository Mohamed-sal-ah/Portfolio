import React from "react";
import * as STYLED from "./styled";
import AboutImage from "../../images/ben-kolde-bs2Ba7t69mM-unsplash.jpg";
import * as ReusableStyles from '../ReusableStyles/ReusableStyles'

const AboutPage = () => {
  return (
      <ReusableStyles.AllPageMain name="about" secondary="true">
        <ReusableStyles.FullPage>
          <ReusableStyles.FlexBox>
            <ReusableStyles.ArticleBox>
              <ReusableStyles.TextTitle>ABOUT ME</ReusableStyles.TextTitle>
              <ReusableStyles.Text>
                Hi! My name is Mohamed Salah Ahmed and I'm a Front end developer with a passion for web development.
                I have worked on a few projects with React and built an app for a startup during my internship. 
                My future career goal is to become a Fullstack developer, so that I can work on both the Frontend and the Backend.
              </ReusableStyles.Text>
            </ReusableStyles.ArticleBox>
            <ReusableStyles.TwoSidersBox style={{paddingTop:'30px'}}>
              <STYLED.Image
                src={AboutImage}
                alt="Photo by Ben Kolde on Unsplash"
              />
            </ReusableStyles.TwoSidersBox>
          </ReusableStyles.FlexBox>
        </ReusableStyles.FullPage>
      </ReusableStyles.AllPageMain>
  );
};

export default AboutPage;
