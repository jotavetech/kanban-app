import { useEffect, useState } from "react";

import { StyledSidebar } from "./styles";

import Button from "../Utils/Button";
import BoardsList from "./BoardsList";

import Menu from "../../assets/menu.png";
import Close from "../../assets/close.png";

import { useNavigate, Link, useLocation } from "react-router-dom";

function Sidebar() {
  const logged = true;
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <button
        className={`openSidebar ${isOpen ? "hidden" : ""}`}
        onClick={() => setIsOpen(true)}
      >
        <img src={Menu} />
      </button>
      <StyledSidebar
        isOpen={isOpen}
        className={`${isOpen ? "openedAnimation" : ""}`}
      >
        <div>
          <Link to="/" aria-label="go to home">
            <h1>Kanban</h1>
          </Link>

          <button className="closeSidebar" onClick={() => setIsOpen(false)}>
            <img src={Close} />
          </button>
        </div>

        {logged ? (
          <>
            <BoardsList />
            <Button
              onClick={() => console.log("cliquei")}
              text="+ Add New Board"
              height="50px"
              width="85%"
            />
          </>
        ) : (
          <div className="login">
            <Button
              onClick={() => navigate("/login")}
              text="Login"
              height="50px"
              width="85%"
              variant={true}
            />
            <Button
              onClick={() => navigate("/register")}
              text="Register"
              height="50px"
              width="85%"
              variant={true}
            />
          </div>
        )}
      </StyledSidebar>
    </>
  );
}

export default Sidebar;
