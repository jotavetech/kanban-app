import { useEffect, useState } from "react";

import { StyledNavbar } from "./styles";

import NotesIcon from "../../assets/notes-icon.svg";

import Button from "../Utils/Button";

function Navbar() {
  const logged = true;
  const [actualPage, setActualPage] = useState("Dashboard");

  return (
    <StyledNavbar>
      <div className="sectionName">
        <img src={NotesIcon} />
        <h1>{actualPage}</h1>
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
