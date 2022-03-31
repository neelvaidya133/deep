import React from "react";
import { IoMdCall } from "react-icons/io";
import {
  Nav,
  NavElement,
  NavMenu,
  MenuItem,
  Call,
  BUTTON,
  Number,
} from "./NavbarStyle";
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavElement>
          <NavMenu>
            <MenuItem>
              <a href=""> Home </a>
              <a href=""> Service </a>
              <a href="">About me </a>
            </MenuItem>
            <Call>
              <Number>
                <IoMdCall style={{ color: "blue" }} />
                <p> +919408341987 </p>
              </Number>
              <BUTTON>
                <a href=""> Call Now </a>{" "}
              </BUTTON>
            </Call>
          </NavMenu>
        </NavElement>
      </Nav>
    </>
  );
};

export default Navbar;
