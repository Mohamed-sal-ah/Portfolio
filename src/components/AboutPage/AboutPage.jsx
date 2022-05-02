import React from "react";
import * as STYLED from "./styled";
import AboutImage from "../../images/ben-kolde-bs2Ba7t69mM-unsplash.jpg";
import CommonStyled from "../CommonStyled";

const AboutPage = () => {
  return (
      <CommonStyled.AllPageMain name="about" secondary="true">
        <CommonStyled.FullPage>
          <CommonStyled.FlexBox>
            <CommonStyled.ArticleBox>
              <CommonStyled.TextTitle>ABOUT ME</CommonStyled.TextTitle>
              <CommonStyled.Text>
                Hi! My name is Mohamed Salah Ahmed and I'm a Front end developer with a passion for web development.
                I have worked on a few projects with React and built an app for a startup during my internship. 
                My future career goal is to become a Fullstack developer, so that I can work on both the Frontend and the Backend.
              </CommonStyled.Text>
            </CommonStyled.ArticleBox>
            <CommonStyled.TwoSidersBox style={{paddingTop:'30px'}}>
              <STYLED.Image
                src={AboutImage}
                alt="Photo by Ben Kolde on Unsplash"
              />
            </CommonStyled.TwoSidersBox>
          </CommonStyled.FlexBox>
        </CommonStyled.FullPage>
      </CommonStyled.AllPageMain>
  );
};

export default AboutPage;
