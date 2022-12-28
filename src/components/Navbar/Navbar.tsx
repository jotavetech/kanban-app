import { useEffect, useState } from "react";

import { StyledNavbar } from "./styles";

import NotesIcon from "../../assets/notes-icon.svg";

import Button from "../Utils/Button";
import TodoForm from "../TodoForm";

import { useLocation, useNavigate } from "react-router-dom";

import { auth } from "../../config/Firebase";

import { useAuthState } from "react-firebase-hooks/auth";

import { signOut } from "firebase/auth";

function Navbar() {
  const [actualPage, setActualPage] = useState("");
  const [openNewTask, setOpenNewTask] = useState(false);

  const [user] = useAuthState(auth);

  useEffect(() => {
    console.log(user);
  }, [user]);

  const { pathname } = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    if (pathname.slice(0, 6) === "/board") setActualPage("Your tasks");
    if (pathname.slice(0, 6) === "/login") setActualPage("Login");
    if (pathname.slice(0, 9) === "/register") setActualPage("Register");
    if (pathname === "/") setActualPage("Boards");
  }, [pathname]);

  const userLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

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
          <p>{user ? "Hello, João" : "Welcome!"}</p>
          {user && (
            <Button
              text="Leave >"
              width="80px"
              height="30px"
              onClick={userLogout}
            />
          )}
        </div>
      </StyledNavbar>
    </>
  );
}

export default Navbar;
