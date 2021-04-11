import React, { useContext, useEffect, useMemo } from "react";
import { Col } from "../../styles/uielements";
import Logo from "../Logo/Logo";
import { MenuMobileContainer } from "../Menu/menu.elements";
import MenuDesktop from "../Menu/MenuDesktop";
import MenuMobile from "../Menu/MenuMobile";
import { NavbarContainer, ToggleContainer } from "./navbar.elements";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import {
  RiSunFill,
  RiMoonClearFill,
  RiSunLine,
  RiMoonFill,
  RiMoonLine,
} from "react-icons/ri";

import { AppCxt } from "../../context/AppCxt";
import { useAppContext } from "../../context/AppContext";

const ToggleTheme = () => {
  return (
    <div>
      <BsToggleOff />
    </div>
  );
};

const Navbar = () => {
  const { theme, changeTheme } = useAppContext();

  const toggle = useMemo(() => {
    if (theme)
      return (
        <>
          {" "}
          <RiSunFill />
          <BsToggleOff onClick={() => changeTheme()} />
          <RiMoonLine />
        </>
      );
    else
      return (
        <>
          <RiSunLine /> <BsToggleOn onClick={() => changeTheme()} />
          <RiMoonFill />
        </>
      );
  }, [theme]);
  useEffect(() => {
    console.log(theme);
  }, [theme]);
  return (
    <NavbarContainer>
      <Logo />
      <ToggleContainer>{toggle}</ToggleContainer>
      <MenuMobile />
      <Col md={6}>
        <MenuDesktop />
      </Col>
    </NavbarContainer>
  );
};

export default Navbar;
