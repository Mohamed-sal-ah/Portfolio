import React from "react";
import * as STYLED from "./styled";
import * as ReusableStyles from '../ReusableStyles/ReusableStyles'
import FrontDevBlog from "../../images/Front-Dev-blog-preview.png"
import MemoryGame from "../../images/memory-game-preview.png";
import NotesApp from "../../images/notes-app-preview.png";
import SmallTodoList from "../../images/small-todo-list-preview.png";

const ProjectsPage = () => {
  return (
    <ReusableStyles.AllPageMain name="projects">
      <ReusableStyles.FullPage>
        <STYLED.ProjectsDiv>
          <ReusableStyles.TextTitle style={{ paddingTop: "50px" }}>
            PROJECTS
          </ReusableStyles.TextTitle>
          <ReusableStyles.Text style={{ maxWidth: "90vw" }}>
            Here are a list projects that I have worked on since I became a
            Frontend Developer and published to my{" "}
            <STYLED.TextLink href="https://github.com/Mohamed-sal-ah">
              Github page
            </STYLED.TextLink>
            .
          </ReusableStyles.Text>
          <STYLED.ProjectGrid>
            <STYLED.ProjectGridItem>
              <STYLED.ProjectImg src={MemoryGame} alt="Memory game preview" />
              <STYLED.ProjectHover>
                <STYLED.ProjectTitle>Memory game</STYLED.ProjectTitle>
                <STYLED.ProjectText>
                  This is a simple Vuejs memory game and it's uploaded to my{" "}
                  <STYLED.TextLink href="https://github.com/Mohamed-sal-ah/Memory-game">
                    Github repository
                  </STYLED.TextLink> and hosted on <STYLED.TextLink href="https://mohamed-sal-ah.github.io/Memory-game/">
                    Github Pages
                  </STYLED.TextLink>
                  .
                </STYLED.ProjectText>
              </STYLED.ProjectHover>
            </STYLED.ProjectGridItem>
            <STYLED.ProjectGridItem>
              <STYLED.ProjectImg src={SmallTodoList} alt="Small Todo list preview" />
              <STYLED.ProjectHover>
                <STYLED.ProjectTitle>Small Todo list</STYLED.ProjectTitle>
                <STYLED.ProjectText>
                  This is a simple todo list app build with GraphQL API and React with Typescript and
                  it's is uploaded to my{" "}
                  <STYLED.TextLink href="https://github.com/Mohamed-sal-ah/small-Todo-list">
                    Github repository
                  </STYLED.TextLink> and the demo is hosted on <STYLED.TextLink href="https://mohamed-sal-ah.github.io/small-Todo-list/">
                    Github Pages
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
            <STYLED.ProjectGridItem>
              <STYLED.ProjectImg src={FrontDevBlog} alt="Front-dev blog preview" />
              <STYLED.ProjectHover>
                <STYLED.ProjectTitle>Front-Dev blog</STYLED.ProjectTitle>
                <STYLED.ProjectText>
                  This is a simple static Blog build with Nextjs and Typescript and
                  it's uploaded to my{" "}
                  <STYLED.TextLink href="https://github.com/Mohamed-sal-ah/Front-dev-blog">
                    Github repository
                  </STYLED.TextLink>
                  .
                </STYLED.ProjectText>
              </STYLED.ProjectHover>
            </STYLED.ProjectGridItem>
          </STYLED.ProjectGrid>
        </STYLED.ProjectsDiv>
      </ReusableStyles.FullPage>
    </ReusableStyles.AllPageMain>
  );
};

export default ProjectsPage;
