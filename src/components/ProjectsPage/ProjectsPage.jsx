import React from "react";
import * as STYLED from "./styled";
import CommonStyled from "../CommonStyled";
import LandscapePictures from "../../images/landcape-pictures-preview.png";
import MemoryGame from "../../images/memory-game-preview.png";
import NotesApp from "../../images/notes-app-preview.png";

const ProjectsPage = () => {
  return (
    <CommonStyled.AllPageMain name="projects">
      <CommonStyled.FullPage>
        <STYLED.ProjectsDiv>
          <CommonStyled.TextTitle style={{ paddingTop: "50px" }}>
            PROJECTS
          </CommonStyled.TextTitle>
          <CommonStyled.Text style={{ maxWidth: "90vw" }}>
            Here are a list projects that I have worked on since I became a
            Frontend Developer and published to my{" "}
            <STYLED.TextLink href="https://github.com/Mohamed-sal-ah">
              Github page
            </STYLED.TextLink>
            .
          </CommonStyled.Text>
          <STYLED.ProjectGrid>
            <STYLED.ProjectGridItem>
              <STYLED.ProjectImg
                src={LandscapePictures}
                alt="Landscape Pictures preview"
              />
              <STYLED.ProjectHover>
                <STYLED.ProjectTitle>Landscape Pictures</STYLED.ProjectTitle>
                <STYLED.ProjectText>
                  This is a private project of a web app of image gallery build
                  with React native and Typescript. Its uploaded to my{" "}
                  <STYLED.TextLink href="https://github.com/Mohamed-sal-ah/LandscapePictures">
                    Github repository
                  </STYLED.TextLink>
                  .
                </STYLED.ProjectText>
              </STYLED.ProjectHover>
            </STYLED.ProjectGridItem>
            <STYLED.ProjectGridItem>
              <STYLED.ProjectImg src={MemoryGame} alt="Memory game preview" />
              <STYLED.ProjectHover>
                <STYLED.ProjectTitle>Memory game</STYLED.ProjectTitle>
                <STYLED.ProjectText>
                  This is a simple Vuejs memory game and it's uploaded to my{" "}
                  <STYLED.TextLink href="https://github.com/Mohamed-sal-ah/Memory-game">
                    Github repository
                  </STYLED.TextLink>
                  .
                </STYLED.ProjectText>
              </STYLED.ProjectHover>
            </STYLED.ProjectGridItem>
            <STYLED.ProjectGridItem>
              <STYLED.ProjectImg src={NotesApp} alt="Notes app preview" />
              <STYLED.ProjectHover>
                <STYLED.ProjectTitle>Notes app</STYLED.ProjectTitle>
                <STYLED.ProjectText>
                  This is a simple Notes app build with Angular and SCSS and
                  it's uploaded to my{" "}
                  <STYLED.TextLink href="https://github.com/Mohamed-sal-ah/Notes-app">
                    Github repository
                  </STYLED.TextLink>
                  .
                </STYLED.ProjectText>
              </STYLED.ProjectHover>
            </STYLED.ProjectGridItem>
          </STYLED.ProjectGrid>
        </STYLED.ProjectsDiv>
      </CommonStyled.FullPage>
    </CommonStyled.AllPageMain>
  );
};

export default ProjectsPage;
