import React from "react";
import { MenuMobileContainer } from "./menu.elements";
import { GrClose } from "react-icons/gr";
import { Link } from "react-scroll";

const MenuMobile = ({ active, toggleMenu }) => {
  return (
    <MenuMobileContainer className={active && "active"}>
      <GrClose className="close" onClick={() => toggleMenu()} />
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
        <span>Hire Me</span>
      </a>
    </MenuMobileContainer>
  );
};

export default MenuMobile;
