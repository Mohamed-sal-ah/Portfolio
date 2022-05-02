import React, { useState } from "react";
import * as STYLED from "./styled";
import { animateScroll as scroll, scroller } from "react-scroll";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import MobileNavigation from "./MobileNavigation/";

const NavigationBar = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const ToggleMobileNav = (event) => {
    event.preventDefault();
    if (mobileNav) {
      setMobileNav(false);
    } else {
      setMobileNav(true);
    }
  };

  const handleTitleClick = (e) => {
    e.preventDefault();
    if (mobileNav) {
      setTimeout(() => scroll.scrollToTop(), 500);
    } else {
      scroll.scrollToTop();
    }
    setMobileNav(false);
  };

  const handleMobileClick = (e) => {
    e.preventDefault();
    const elementName = e.target.name;
    setMobileNav(false);
    setTimeout(
      () =>
        scroller.scrollTo(elementName, {
          smooth: true,
          duration: 500,
          offset: -30,
        }),
      50
    );
  };
  const clicked = mobileNav ? "clicked" : "";
  mobileNav ? disableBodyScroll(document) : enableBodyScroll(document);

  return (
      <STYLED.FullNav>
        <STYLED.NavFlex>
          <STYLED.TitleNav onClick={handleTitleClick}>
            Mohamed-sal-ah
          </STYLED.TitleNav>
          <STYLED.ULNav>
            <STYLED.TopListItem>
              <STYLED.LinkItem
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="about"
              >
                About
              </STYLED.LinkItem>
            </STYLED.TopListItem>
            <STYLED.TopListItem>
              <STYLED.LinkItem
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="projects"
              >
                Projects
              </STYLED.LinkItem>
            </STYLED.TopListItem>
            <STYLED.TopListItem>
              <STYLED.LinkItem
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="skills"
              >
                Skills
              </STYLED.LinkItem>
            </STYLED.TopListItem>
            <STYLED.TopListItem>
              <STYLED.LinkItem
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="contact"
              >
                Contact
              </STYLED.LinkItem>
            </STYLED.TopListItem>
            <STYLED.TopListItem mobileView="true">
              <STYLED.BarItems className={clicked} onClick={ToggleMobileNav}>
                <STYLED.Bar />
                <STYLED.Bar />
                <STYLED.Bar />
              </STYLED.BarItems>
            </STYLED.TopListItem>
          </STYLED.ULNav>
        </STYLED.NavFlex>
        <STYLED.MobileNavModal
          isOpen={mobileNav}
          onRequestClose={() => setMobileNav(false)}
          style={{
            overlay: {
              backgroundColor: 'rgba(255,255,255,0.3)'
            },
          }}
          ariaHideApp={false}
          contentLabel="Small screen naivation"
        >
          <MobileNavigation
            handleMobileClick={handleMobileClick}
          />
        </STYLED.MobileNavModal>
      </STYLED.FullNav>
  );
};
export default NavigationBar;
