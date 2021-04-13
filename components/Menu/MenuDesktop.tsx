import React from "react";
import { MenuDesktopContainer } from "./menu.elements";
import { Link } from "react-scroll";

const MenuDesktop = () => {
  return (
    <MenuDesktopContainer>
      <Link to="about" spy={true} smooth={true}>
        <span>About</span>
      </Link>
      <Link to="skills" spy={true} smooth={true}>
        <span>Skills</span>
      </Link>
      <Link to="portfolio" spy={true} smooth={true}>
        <span>Works</span>
      </Link>
      <Link to="contacts" spy={true} smooth={true}>
        <span>Contacts</span>
      </Link>
      <a href="mailto:rita.petillo@gmail.com">
        <span className="hireMe">Hire Me</span>
      </a>
    </MenuDesktopContainer>
  );
};

export default MenuDesktop;
