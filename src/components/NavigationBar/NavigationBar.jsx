import React, { useState } from "react";
import * as STYLED from "./styled";
import { animateScroll as scroll, scroller } from "react-scroll";
import theme from "../theme";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import MobileNavigation from "./MobileNavigation/";
import { ThemeProvider } from "styled-components";
import { useColorTheme } from "../ColorThemeContext";

const NavigationBar = ({ colorTheme }) => {
  const { toggleTheme } = useColorTheme();
  const [mobileNav, setMobileNav] = useState(false);
  const ToggleMobileNav = (event) => {
    event.preventDefault();
    if (mobileNav) {
      setMobileNav(false);
    } else {
      setMobileNav(true);
    }
  };

  const ToggleMobileTheme = () => {
    setMobileNav(false);
    setTimeout(() => toggleTheme(), 100);
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
  const isLight = colorTheme === "light";
  const styledTheme = {
    backgroundColor: isLight
      ? theme.colors.white
      : theme.colors.black_blue.primary,
    boxShadow: isLight ? "0 2px 3px #cbcbcb" : "none",
    fontColor: isLight
      ? theme.colors.blue.primary
      : theme.colors.blue.light_blue,
  };
  return (
    <ThemeProvider theme={styledTheme}>
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
            <STYLED.TopListItem>
              <STYLED.ChangeThemeButton onClick={() => toggleTheme()}>
                <STYLED.ChangeThemeIcon />
              </STYLED.ChangeThemeButton>
            </STYLED.TopListItem>
            <STYLED.TopListItem>
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
              backgroundColor: isLight
                ? theme.colors.gradient.light
                : theme.colors.gradient.dark,
            },
          }}
          ariaHideApp={false}
          contentLabel="Small screen naivation"
        >
          <MobileNavigation
            handleMobileClick={handleMobileClick}
            toggleTheme={ToggleMobileTheme}
            isLight={isLight}
          />
        </STYLED.MobileNavModal>
      </STYLED.FullNav>
    </ThemeProvider>
  );
};
export default NavigationBar;
