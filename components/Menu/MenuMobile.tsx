import React from "react";
import { MenuMobileContainer } from "./menu.elements";
import { GrClose } from "react-icons/gr";

const MenuMobile = ({ active, toggleMenu }) => {
  return (
    <MenuMobileContainer className={active && "active"}>
      <GrClose className="close" onClick={() => toggleMenu()} />
      <span>About</span>
      <span>Skills</span>
      <span>Works</span>
      <span>Contacts</span>
      <span>Hire Me</span>
    </MenuMobileContainer>
  );
};

export default MenuMobile;
