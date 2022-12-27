import { useEffect, useState } from "react";

import { StyledNavbar } from "./styles";

import NotesIcon from "../../assets/notes-icon.svg";

import Button from "../Utils/Button";
import TodoForm from "../TodoForm";

import { useLocation } from "react-router-dom";

function Navbar() {
  const logged = true;
  const [actualPage, setActualPage] = useState("");
  const [openNewTask, setOpenNewTask] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname.slice(0, 6) === "/board") setActualPage("Your tasks");
    if (pathname.slice(0, 6) === "/login") setActualPage("Login");
    if (pathname.slice(0, 9) === "/register") setActualPage("Register");
    if (pathname === "/") setActualPage("Boards");
  }, [pathname]);

  return (
    <>
      <TodoForm open={openNewTask} onClose={() => setOpenNewTask(false)} />
      <StyledNavbar>
        <div className="sectionName">
          <img src={NotesIcon} />
          <h1>{actualPage}</h1>
        </div>
        <div>
          {actualPage === "Your tasks" && (
            <Button
              onClick={() => setOpenNewTask(true)}
              text="+"
              height="40px"
              width="40px"
            />
          )}
          <p>{logged ? "Hello, João" : "Welcome!"}</p>
        </div>
      </StyledNavbar>
    </>
  );
}

export default Navbar;
