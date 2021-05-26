import React, { useState } from "react";
import * as STYLED from "./styled";
import CommonStyled from "../CommonStyled";
import ProjectPreview from "../../images/Landcape-pictures-preview.png";
import theme from "../theme";
import ProjectModal from "./ProjectModal";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { ThemeProvider } from "styled-components";

const ProjectsPage = ({ colorTheme }) => {
  const [openModal, setOpenModal] = useState(false);
  openModal ? disableBodyScroll(document) : enableBodyScroll(document);
  const isLight = colorTheme === "light";
  const styledTheme = {
    backgroundColor: isLight
      ? theme.colors.light_gray
      : theme.colors.black_blue.secondary,
    titleColor: isLight
      ? theme.colors.blue.secondary
      : theme.colors.blue.light_blue,
    textColor: isLight ? theme.colors.gray_blue : theme.colors.white,
    modalColor: isLight ? theme.colors.white : theme.colors.black_blue.primary,
    modalTitle: isLight ? theme.colors.black : theme.colors.white,
  };
  return (
    <ThemeProvider theme={styledTheme}>
      <CommonStyled.AllPageMain name="projects">
        <STYLED.ModalStyled
          isOpen={openModal}
          onRequestClose={() => setOpenModal(false)}
          style={{
            overlay: {
              backgroundColor: isLight
                ? theme.colors.gradient.light
                : theme.colors.gradient.dark,
            },
          }}
          ariaHideApp={false}
          contentLabel="Project Details"
        >
          <ProjectModal setOpenModal={setOpenModal} />
        </STYLED.ModalStyled>
        <CommonStyled.FullPage>
          <CommonStyled.FlexBox>
            <CommonStyled.ArticleBox>
              <CommonStyled.TextTitle>Projects</CommonStyled.TextTitle>
              <CommonStyled.Text>
                Here is some projects that i have worked in.
              </CommonStyled.Text>
            </CommonStyled.ArticleBox>
            <CommonStyled.ArticleBox>
              <STYLED.ProjectViewButton onClick={() => setOpenModal(true)}>
                <STYLED.ProjectImg
                  src={ProjectPreview}
                  alt="Project Landscape Pictures"
                />
                <STYLED.ProjectTitle>Landscape Pictures</STYLED.ProjectTitle>
              </STYLED.ProjectViewButton>
            </CommonStyled.ArticleBox>
          </CommonStyled.FlexBox>
        </CommonStyled.FullPage>
      </CommonStyled.AllPageMain>
    </ThemeProvider>
  );
};

export default ProjectsPage;
