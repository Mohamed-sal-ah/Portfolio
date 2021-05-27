import React from "react";
import ProjectPreview from "../../../images/Landcape-pictures-preview.png";
import * as STYLED from "./styled";

const ProjectModal = ({ setOpenModal }) => {
  return (
    <STYLED.FullModalDiv>
      <STYLED.TopModalFlex>
        <STYLED.ProjectModalTitle>Landscape Pictures</STYLED.ProjectModalTitle>
        <STYLED.CloseModalButton onClick={() => setOpenModal(false)}>
          <STYLED.CloseIcon />
        </STYLED.CloseModalButton>
      </STYLED.TopModalFlex>
      <STYLED.PreviewImageLink href="https://mohamed-sal-ah.github.io/LandscapePictures/">
        <STYLED.PreviewImage
          src={ProjectPreview}
          alt="Project Landscape Pictures"
        />
      </STYLED.PreviewImageLink>
      <STYLED.ProjectInfoText>
        This is a private project of a web aplication build with React navite,
        Typescript and Expo web. Click on the image to see the website.
      </STYLED.ProjectInfoText>
    </STYLED.FullModalDiv>
  );
};

export default ProjectModal;
