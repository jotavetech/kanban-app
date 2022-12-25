import { StyledNavbar } from "./styles";

import NotesIcon from "../../assets/notes-icon.svg";
import Button from "../Utils/Button";
import { useState } from "react";

function Navbar() {
  const logged = true;
  const dashboard = false;

  return (
    <StyledNavbar>
      <div className="sectionName">
        <img src={NotesIcon} />
        <h1>{!logged ? "Welcome" : dashboard ? "Dashboard" : "Sectioname"}</h1>
      </div>
      <div>
        <Button
          onClick={() => console.log("oi")}
          text="+"
          height="40px"
          width="40px"
        />
        <p>Hello, João</p>
      </div>
    </StyledNavbar>
  );
}

export default Navbar;
