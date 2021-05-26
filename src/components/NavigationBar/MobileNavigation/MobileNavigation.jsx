import React from "react";
import * as STYLED from "./styled";

const MobileNavigation = ({ handleMobileClick, isLight, toggleTheme }) => {
  return (
    <STYLED.FullMobileNavList>
      <STYLED.MobileNavListItem>
        <STYLED.MobileNavButton name="projects" onClick={handleMobileClick}>
          Projects
        </STYLED.MobileNavButton>
      </STYLED.MobileNavListItem>
      <STYLED.MobileNavListItem>
        <STYLED.MobileNavButton name="about" onClick={handleMobileClick}>
          About
        </STYLED.MobileNavButton>
      </STYLED.MobileNavListItem>
      <STYLED.MobileNavListItem>
        <STYLED.MobileNavButton name="skills" onClick={handleMobileClick}>
          Skills
        </STYLED.MobileNavButton>
      </STYLED.MobileNavListItem>
      <STYLED.MobileNavListItem>
        <STYLED.MobileNavButton name="contact" onClick={handleMobileClick}>
          Contact
        </STYLED.MobileNavButton>
      </STYLED.MobileNavListItem>
      <STYLED.MobileNavListItem>
        <STYLED.MobileNavButton name="contact" onClick={() => toggleTheme()}>
          Toggle to {isLight ? "Dark" : "Light"}mode
        </STYLED.MobileNavButton>
      </STYLED.MobileNavListItem>
    </STYLED.FullMobileNavList>
  );
};

export default MobileNavigation;
